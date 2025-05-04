use std::fs;
use std::io::{self, Read, Write};
use std::process::Command;
use serde::{Deserialize, Serialize};
use std::os::unix::fs::PermissionsExt;
use std::os::unix::io::AsRawFd;
use libc::{socket, bind, listen, accept, sockaddr_vm, AF_VSOCK, SOCK_STREAM, VMADDR_CID_ANY};
use std::mem;

#[derive(Debug, Serialize, Deserialize)]
struct ExecutionRequest {
    language: String,
    code: String,
    filename: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct ExecutionResponse {
    success: bool,
    stdout: String,
    stderr: String,
    exit_code: i32,
}

const VSOCK_PORT: u32 = 52;

fn main() -> io::Result<()> {
    eprintln!("VSock agent starting...");
    
    // Create vsock socket
    let sock_fd = unsafe { socket(AF_VSOCK, SOCK_STREAM, 0) };
    if sock_fd < 0 {
        return Err(io::Error::last_os_error());
    }

    // Prepare address
    let mut addr: sockaddr_vm = unsafe { mem::zeroed() };
    addr.svm_family = AF_VSOCK as u16;
    addr.svm_cid = VMADDR_CID_ANY;
    addr.svm_port = VSOCK_PORT;

    // Bind
    if unsafe { bind(sock_fd, &addr as *const _ as *const _, mem::size_of::<sockaddr_vm>() as u32) } < 0 {
        return Err(io::Error::last_os_error());
    }

    // Listen
    if unsafe { listen(sock_fd, 1) } < 0 {
        return Err(io::Error::last_os_error());
    }

    eprintln!("VSock listening on port {}", VSOCK_PORT);

    // Accept loop
    loop {
        let client_fd = unsafe { accept(sock_fd, std::ptr::null_mut(), std::ptr::null_mut()) };
        if client_fd < 0 {
            eprintln!("Accept failed: {}", io::Error::last_os_error());
            continue;
        }

        eprintln!("Client connected");

        // Handle client in a separate function
        if let Err(e) = handle_client(client_fd) {
            eprintln!("Error handling client: {}", e);
        }

        // Close client socket
        unsafe { libc::close(client_fd) };
    }
}

fn handle_client(fd: i32) -> io::Result<()> {
    // Read request
    let mut buffer = Vec::new();
    let mut temp_buffer = [0u8; 1024];

    loop {
        let bytes_read = unsafe { libc::read(fd, temp_buffer.as_mut_ptr() as *mut _, temp_buffer.len()) };
        if bytes_read < 0 {
            return Err(io::Error::last_os_error());
        }
        if bytes_read == 0 {
            break;
        }

        buffer.extend_from_slice(&temp_buffer[..bytes_read as usize]);
        
        // Check if we have a complete JSON message
        if let Ok(s) = std::str::from_utf8(&buffer) {
            if s.trim().ends_with('}') {
                break;
            }
        }
    }

    let input = String::from_utf8_lossy(&buffer);
    eprintln!("Received request: {}", input);

    // Process request
    let response = match serde_json::from_str::<ExecutionRequest>(&input) {
        Ok(request) => execute_code(request)?,
        Err(e) => ExecutionResponse {
            success: false,
            stdout: String::new(),
            stderr: format!("Failed to parse request: {}", e),
            exit_code: -1,
        },
    };

    // Send response
    let response_json = serde_json::to_string(&response)?;
    let response_bytes = response_json.as_bytes();
    
    let mut total_written = 0;
    while total_written < response_bytes.len() {
        let bytes_written = unsafe {
            libc::write(
                fd,
                response_bytes[total_written..].as_ptr() as *const _,
                response_bytes.len() - total_written,
            )
        };
        
        if bytes_written < 0 {
            return Err(io::Error::last_os_error());
        }
        
        total_written += bytes_written as usize;
    }

    Ok(())
}

fn execute_code(request: ExecutionRequest) -> io::Result<ExecutionResponse> {
    // Write code to file in /tmp
    let filepath = format!("/tmp/{}", request.filename);
    fs::write(&filepath, &request.code)?;
    fs::set_permissions(&filepath, fs::Permissions::from_mode(0o755))?;

    // Execute based on language
    let output = match request.language.as_str() {
        "python" => Command::new("python3").arg(&filepath).output(),
        "javascript" | "node" => Command::new("node").arg(&filepath).output(),
        "typescript" => Command::new("ts-node").arg(&filepath).output(),
        "java" => {
            let classname = request.filename.trim_end_matches(".java");
            Command::new("sh")
                .arg("-c")
                .arg(format!("cd /tmp && javac {} && java {}", request.filename, classname))
                .output()
        }
        "c" => Command::new("sh")
            .arg("-c")
            .arg(format!("cd /tmp && gcc {} -o program && ./program", request.filename))
            .output(),
        "cpp" => Command::new("sh")
            .arg("-c")
            .arg(format!("cd /tmp && g++ {} -o program && ./program", request.filename))
            .output(),
        "go" => Command::new("sh")
            .arg("-c")
            .arg(format!("cd /tmp && go run {}", request.filename))
            .output(),
        "rust" => Command::new("sh")
            .arg("-c")
            .arg(format!("cd /tmp && rustc {} -o program && ./program", request.filename))
            .output(),
        _ => return Err(io::Error::new(io::ErrorKind::InvalidInput, "Unsupported language")),
    }?;

    // Prepare response
    let response = ExecutionResponse {
        success: output.status.success(),
        stdout: String::from_utf8_lossy(&output.stdout).into_owned(),
        stderr: String::from_utf8_lossy(&output.stderr).into_owned(),
        exit_code: output.status.code().unwrap_or(-1),
    };

    Ok(response)
}