"use client";

import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actions from '../actions';
import { VscDebugRestart, VscSettingsGear} from "react-icons/vsc";
import { MdOutlineFileDownload, MdDarkMode, MdLightMode } from "react-icons/md";
import { Terminal as TerminalIcon, Play,  Square } from "lucide-react";


interface JobResult {
  status: string;
  result: string;
}


// Define the supported languages based on the backend
const SUPPORTED_LANGUAGES = [
  { value: "python", label: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
  { value: "javascript", label: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { value: "cpp", label: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"},
  { value: "c", label: "C", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { value: "rust", label: "Rust", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"  }
]

// Hello worlds for each lang
const defaultCode = {
  "python": '# Write your Python code here\nprint("Hello, from Codr!")',
  "javascript": '// Write your JavaScript code here\nconsole.log("Hello, from Codr!");',
  "cpp": '#include <iostream>\n\nint main() {\n    std::cout << "Hello, from Codr!" << std::endl;\n    return 0;\n}',
  "c": '#include <stdio.h>\n\nint main() {\n    printf("Hello, from Codr!"\\n");\n    return 0;\n}',
  "rust": 'fn main() {\n    println!("Hello, from Codr!");\n}'
};


export default function IDE() {
  const [code, setCode] = useState('# Write your Python code here\nprint("Hello, from Codr!")');
  const [language, setLanguage] = useState<string>("python")
  const [filename, setFilename] = useState("Main");
  const [fileExt, setFileExt] = useState(".py");   
  const [output, setOutput] = useState<string[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [theme, setTheme] = useState("vs-dark");
  const [showSettings, setShowSettings] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [tabSize, setTabSize] = useState(2);
  const [enableAutocomplete, setEnableAutocomplete] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

// Update code as typed
const handleChange = (value: string = "") => {
    setCode(value);
};

// Reset output and call execute
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOutput([]);
    await execute(code, language);
};

// Call functions with api calls
const execute = async (code: string, language: string) => {
    if (!code.trim()) {
      setOutput(["$"]);
      return;
    }
  
    setIsExecuting(true);
    setOutput(["$ Setting up your enviroment..."]);
    
    try {
      const fullFilename = `${filename}${fileExt}`;
      const response = await actions.executeCode(code, language, fullFilename);
      
      if (!response?.job_id) {
        throw new Error("Failed to start job");
      }
      
      await pollJobStatus(response.job_id);
      
    } catch (err: any) {
      setOutput(prev => [
        ...prev,
        "Execution failed",
        err.message || "Unknown error occurred"
      ]);
    } finally {
      setIsExecuting(false);
    }
};

 // Poll for job status
 const pollJobStatus = async (job_id: string) => {
  const maxAttempts = 30;
  let attempts = 0;
  let lastStatus = '';
  let backoffTime = 1000; // Start with 1 second
  
  while (attempts < maxAttempts) {
    try {
      const response = await actions.getJob(job_id);
      
      // Update output based on status change
      if (response.status !== lastStatus) {
        if (response.status === 'processing'){
            setOutput(["$ Compiling..."]);
        }
     
        lastStatus = response.status;
      }
      
      // Process completed jobs
      if (response.status === 'completed') {
        try {
          // Handle result object directly - it's already parsed correctly
          if (response.result && typeof response.result === 'object') {
            const result = response.result;
            setOutput([
              ...(result.stdout ? [`$ ${result.stdout}`] : []),
              ...(result.stderr ? [`$ ${result.stderr}`] : [])
            ]);
            setIsExecuting(false);
            return;
          } 
          // Handle string result that needs parsing
          else if (typeof response.result === 'string') {
            try {
              const resultObj = JSON.parse(response.result);
              setOutput([
                ...(resultObj.stdout ? [`Output: ${resultObj.stdout}`] : []),
                ...(resultObj.stderr ? [`Error: ${resultObj.stderr}`] : [])
              ]);
            } catch (e) {
              // String that's not JSON
              setOutput([`$ ${response.result}`]);
            }
            setIsExecuting(false);
            return;
          }
          // Handle null/undefined result
          else {
            setOutput(["$ No output returned"]);
            setIsExecuting(false);
            return;
          }
        } catch (parseErr) {
          console.error("Error processing result:", parseErr);
          setOutput(["Error processing result"]);
          setIsExecuting(false);
          return;
        }
      }
      
      // Handle failed jobs
      if (response.status === 'failed') {
        setOutput(["Unknown Error has occured", response.error || "Unknown error"]);
        setIsExecuting(false);
        return;
      }
      
      // Continue polling for in-progress jobs
      if (response.status === 'queued' || response.status === 'processing') {
        await new Promise(resolve => setTimeout(resolve, backoffTime));
        backoffTime = Math.min(backoffTime * 1.2, 5000);
        attempts++;
      } else {
        // Unknown status
        setOutput([`Unexpected job status: ${response.status}`]);
        setIsExecuting(false);
        return;
      }
      
    } catch (err) {
      console.error("Poll error:", err);
      attempts++;
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  setIsExecuting(false);
  setOutput(["$ Code Execution timed out. This could be caused by an infinate loop or too long of a proccess."]);
};

  // Function to handle file download
const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename + fileExt; // Use current filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setOutput([`File downloaded as ${filename}`]);
};

  // Function to restart/reset the code
const handleRestart = () => {
    const fileExtensions: {[key: string]: string} = {
      "python": ".py",
      "javascript": ".js",
      "cpp": ".cpp",
      "c": ".c",
      "rust": ".rs"
    };
  
    const defaultLanguageCode = defaultCode[language as keyof typeof defaultCode] || 'print("hello world")';
    setCode(defaultLanguageCode);
    setFilename("main"); // Reset just the name
    setFileExt(fileExtensions[language]); // Reset extension based on current language
    setOutput(["Code reset to default"]);
};

  // Function to toggle theme
const handleToggleTheme = () => {
    setTheme(theme === "vs-dark" ? "light" : "vs-dark");
};

  // Handle language change
const handleLanguageChange = (langValue: string) => {
    const fileExtensions: {[key: string]: string} = {
      "python": ".py",
      "javascript": ".js",
      "cpp": ".cpp",
      "c": ".c",
      "rust": ".rs"
    };
  
    setLanguage(langValue);
    setCode(defaultCode[langValue as keyof typeof defaultCode] || '# Write your Python code here\nprint("Hello, from Codr!")');
    setFileExt(fileExtensions[langValue]); // Only update extension
};

 // Function to toggle settings panel
const handleToggleSettings = () => {
  setShowSettings(!showSettings);
};

// Functions to adjust font size
const increaseFontSize = () => {
  setFontSize(prev => prev + 2);
};

const decreaseFontSize = () => {
  setFontSize(prev => Math.max(8, prev - 2));
};

// Function to apply settings
const applySettings = () => {
  // Settings are applied instantly through state variables
  setShowSettings(false);
};
      
  return (
   <> 
    {/* logo */ }
    <div className="flex items-center justify-between bg-[#181818] py-4">
        <div className="flex items-center w-full max-w-6xl px-20 mx-auto">
          <span className="text-blue-300 font-bold text-3xl mr-1">{"<"}</span>
          <span className="text-white font-bold text-3xl mr-1">Codr</span>
          <span className="text-blue-300 font-bold text-3xl mr-1">{"/>"}</span>
        </div>
        {/* Toolbar */}
        <div className="flex justify-between py-1 px-20">
            <div className="flex">
                    <button 
                        className="p-2 hover:bg-gray-600 rounded" 
                        onClick={handleDownload} 
                        title="Download code"
                    >
                        <MdOutlineFileDownload size={30}/>
                    </button>
                    <button 
                        className="p-2 hover:bg-gray-600 rounded" 
                        onClick={handleRestart}
                        title="Reset code"
                    >
                        <VscDebugRestart size={25} />
                    </button>
            </div>
            <div className="flex items-center">
                    <button 
                        className="p-2 hover:bg-gray-600 rounded mr-1" 
                        onClick={handleToggleTheme}
                        title="Theme"
                    >
                        {theme === 'vs-dark' ? <MdDarkMode size={25}/> : <MdLightMode size={25}/>}
                    </button>
                    <button 
                        className="p-2 hover:bg-gray-600 rounded mr-1" 
                        onClick={handleToggleSettings}
                        title="Settings"
                    >
                        <VscSettingsGear size={25}/>
                    </button>
            </div>
        </div>
      </div>

    <div className="w-full max-w-6xl mx-auto my-1 rounded-lg overflow-hidden shadow-xl">
      {/* Settings */}
      {showSettings && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-[#1e1e1e] rounded-lg shadow-xl w-96 border border-gray-700">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-white font-medium">Editor Settings</h3>
              <button 
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Font Size Control with + and - buttons */}
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm">Font Size</label>
                <div className="flex items-center">
                  <button 
                    onClick={decreaseFontSize}
                    className="bg-[#3d3d3d] hover:bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-l"
                  >
                    −
                  </button>
                  <div className="bg-[#2d2d2d] text-white px-4 py-1 w-16 text-center">
                    {fontSize}px
                  </div>
                  <button 
                    onClick={increaseFontSize}
                    className="bg-[#3d3d3d] hover:bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Tab Size */}
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm">Tab Size</label>
                <div className="bg-[#3d3d3d] rounded overflow-hidden">
                  <select 
                    className="bg-[#3d3d3d] text-white w-full p-2 outline-none"
                    value={tabSize}
                    onChange={(e) => setTabSize(Number(e.target.value))}
                  >
                    <option value={2}>2 spaces</option>
                    <option value={4}>4 spaces</option>
                    <option value={8}>8 spaces</option>
                  </select>
                </div>
              </div>
              
              {/* Autocomplete Toggle */}
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm">Autocomplete</label>
                <div 
                  className="flex items-center cursor-pointer"
                  onClick={() => setEnableAutocomplete(!enableAutocomplete)}
                >
                  <div className={`w-10 h-5 rounded-full flex items-center transition-colors duration-200 ease-in-out ${enableAutocomplete ? 'bg-blue-600' : 'bg-gray-600'}`}>
                    <div className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-200 ease-in-out ${enableAutocomplete ? 'translate-x-5' : 'translate-x-1'}`}></div>
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">
                    {enableAutocomplete ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 p-4 flex justify-end space-x-3">
              <button 
                className="px-4 py-2 rounded text-gray-300 hover:bg-gray-700"
                onClick={() => setShowSettings(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                onClick={applySettings}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Editor Bar */}
      <div className="flex justify-between bg-[#171717]">
        
        {/* File Name */}
        <div className="bg-[#0f0f0f] py-2 px-4 rounded-t-lg flex items-center">
          <input 
            type="text" 
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            className="bg-transparent text-white outline-none w-32"
          />
          <span className="text-gray-400">{fileExt}</span>
        </div>

        {/* Lang Select */}
        <div className="flex items-center py-2 ">
          <div className="bg-[#3d3d3d] w-40 hover:bg-gray-600 rounded px-5 mx-4 relative">
            <div 
              className="text-gray-200 cursor-pointer flex items-center gap-2 py-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img src={SUPPORTED_LANGUAGES.find(lang => lang.value === language)?.image} className="w-4 h-4" />
              {SUPPORTED_LANGUAGES.find(lang => lang.value === language)?.label}
            </div>
            
            {dropdownOpen && (
              <div className="absolute top-full left-0 right-0 bg-[#3d3d3d] border border-gray-600 rounded mt-1 z-10">
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <div
                    key={lang.value}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-600 cursor-pointer text-gray-200"
                    onClick={() => {
                      handleLanguageChange(lang.value);
                      setDropdownOpen(false);
                    }}
                  >
                    <img src={lang.image} className="w-4 h-4" />
                    {lang.label} 
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
          </div>

      {/* Editor Section */}
      <div className="flex-grow">
        <Editor
          height="50vh"
          defaultLanguage="python"
          language={language.toLowerCase()}
          theme={theme}
          value={code}
          onChange={handleChange}
          options={{
            minimap: { enabled: false },
            fontSize: fontSize,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: tabSize,
            wordWrap: "on",
            suggestOnTriggerCharacters: enableAutocomplete,
            quickSuggestions: {
              other: enableAutocomplete,
              comments: false,
              strings: enableAutocomplete,
            },
            wordBasedSuggestions: enableAutocomplete ? 'currentDocument' : 'off'
          }}
        />
      </div>
      {/* Output Section */}
      <div className="h-56 bg-[#1e1e1e] border-t-10 border-[#0f0f0f]">
        {/* Console Tools */}
        <div className="flex items-center border-b-10 border-[#0f0f0f] bg-[#0f0f0f]">
          <form onSubmit={handleSubmit} className="flex w-full">
            <button 
              type="submit" 
              className="flex items-center px-4 mx-4 py-1 text-sm bg-green-700 hover:bg-green-800 text-white font-medium"
              disabled={isExecuting}
            >
            <div className="flex items-center gap-2">
                <Play size={14}/>
                <span className="text-sm font-medium">Run</span>
            </div>

            </button>
          </form>
        </div>

        {/* Terminal Header */}
        <div className="flex items-center justify-between p-2 border-b border-[#3d3d3d]">
            <div className="flex items-center gap-2">
                <TerminalIcon size={14} />
                <span className="text-sm font-medium">Output</span>
            </div>
        </div>
        
        {/* Console Output */}
        <div className="h-full overflow-auto p-4 text-sm">
          {output.length === 0 ? (
            <div className="text-gray-500">$</div>
          ) : (
            output.map((line, i) => (
              <pre key={i} className="text-gray-300 whitespace-pre-wrap font-mono text-sm mb-1">{line}</pre>
            ))
          )}
        </div>
      </div>

    </div>
    </>
  );
}
