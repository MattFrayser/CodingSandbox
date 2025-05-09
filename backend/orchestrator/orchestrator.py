import subprocess
import os
import time
import logging
from connect import redis_conn

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger('orchestrator')

# Map language to app name
LANGUAGE_APPS = {
    "python": "codr-python-runner",
    "javascript": "codr-javascript-runner",
    "cpp": "codr-cpp-runner",
    "c": "codr-c-runner",
    "rust": "codr-rust-runner",
}

# Track which apps we've requested to start to avoid duplicate requests
starting_apps = {}

def run_fly_command(command):
    """Run a fly command using subprocess"""
    try:
        result = subprocess.run(
            command,
            capture_output=True,
            text=True,
            check=True
        )
        return True, result.stdout
    except subprocess.CalledProcessError as e:
        logger.error(f"Command failed: {' '.join(command)}")
        logger.error(f"Error: {e.stderr}")
        return False, e.stderr

def get_machine_ids(app_name):
    """Get a list of machine IDs with their states for an app"""
    success, output = run_fly_command(["fly", "machines", "list", "-a", app_name, "--json"])
    if not success:
        return []
    
    try:
        import json
        machines = json.loads(output)
        return [(machine.get("id"), machine.get("state")) for machine in machines]
    except Exception as e:
        logger.error(f"Error parsing machine list for {app_name}: {str(e)}")
        
        # Fallback to text parsing if JSON fails
        machine_ids = []
        for line in output.splitlines():
            if line.strip() and "started" in line or "stopped" in line:
                parts = line.split()
                if len(parts) >= 1:
                    machine_id = parts[0].strip()
                    state = "stopped" if "stopped" in line else "started"
                    machine_ids.append((machine_id, state))
        return machine_ids

def start_runner(app_name):
    """Start a specific runner app using fly commands"""
    current_time = time.time()
    
    # Check if we've already tried to start this app recently
    if app_name in starting_apps:
        last_start_time = starting_apps[app_name]
        # Only try to start once every 30 seconds
        if current_time - last_start_time < 30:
            return
    
    # Mark that we're starting this app
    starting_apps[app_name] = current_time
    
    # First check if app is suspended and resume if needed
    logger.info(f"Checking status of {app_name}")
    status_success, status_output = run_fly_command(["fly", "status", "-a", app_name])
    
    if not status_success:
        # If the app is suspended, resume it
        if "suspended" in status_output.lower():
            logger.info(f"App {app_name} is suspended, resuming...")
            resume_success, resume_output = run_fly_command(["fly", "resume", "-a", app_name])
            if not resume_success:
                logger.error(f"Failed to resume app {app_name}")
                return
            logger.info(f"Successfully resumed {app_name}")
            # Wait a moment for the app to resume
            time.sleep(5)
    
    # Get all machines and their states
    logger.info(f"Getting machines for {app_name}")
    machines = get_machine_ids(app_name)
    
    if not machines:
        logger.error(f"No machines found for {app_name}")
        return
    
    # Check if any machines are already running
    running_machines = [m_id for m_id, state in machines if state == "started"]
    stopped_machines = [m_id for m_id, state in machines if state == "stopped"]
    
    if running_machines:
        logger.info(f"App {app_name} already has running machines: {running_machines}")
        return
    
    # If there are stopped machines, start one
    if stopped_machines:
        machine_id = stopped_machines[0]
        logger.info(f"Starting machine {machine_id} for {app_name}")
        start_success, start_output = run_fly_command(["fly", "machine", "start", machine_id, "-a", app_name])
        if start_success:
            logger.info(f"Successfully started machine {machine_id}")
        else:
            logger.error(f"Failed to start machine {machine_id}")
    else:
        logger.warning(f"No stopped machines available to start for {app_name}")
        # If there are no stopped machines, we might need to create one
        # This would be a more advanced feature, requiring setting up the correct machine config

def clean_starting_apps():
    """Remove apps from the starting_apps dict if they were started more than 2 minutes ago"""
    current_time = time.time()
    to_remove = []
    
    for app, start_time in starting_apps.items():
        if current_time - start_time > 120:  # 2 minutes
            to_remove.append(app)
    
    for app in to_remove:
        del starting_apps[app]

def monitor_queues():
    """Monitor Redis queues and start appropriate runners"""
    logger.info("Starting queue monitoring")
    
    while True:
        try:
            # Clean up the starting_apps dictionary periodically
            clean_starting_apps()
            
            # Check each language queue
            for language, app_name in LANGUAGE_APPS.items():
                queue_name = f"queue:{language}"
                try:
                    queue_length = redis_conn.llen(queue_name)
                    
                    if queue_length > 0:
                        logger.info(f"Jobs waiting for {language}: {queue_length}")
                        start_runner(app_name)
                except Exception as e:
                    logger.error(f"Error checking queue for {language}: {str(e)}")
            
            # Wait before checking again
            time.sleep(5)
        
        except Exception as e:
            logger.exception(f"Unexpected error in monitoring loop: {str(e)}")
            time.sleep(10)  # Wait longer if there's an error

if __name__ == "__main__":
    logger.info("Orchestrator Starting")
    monitor_queues()