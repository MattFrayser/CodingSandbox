"use client";

import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import * as actions from '../actions';
import { VscSave, VscDebugRestart , VscShare, VscSettingsGear} from "react-icons/vsc";
import { MdOutlineFileDownload } from "react-icons/md";

import { webSocket } from '../hooks/webSocket';

interface JobResult {
  status: string;
  result: string;
}


// Define the supported languages based on the backend
const SUPPORTED_LANGUAGES = [
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
  { value: "cpp", label: "C++" },
  { value: "c", label: "C" },
  { value: "rust", label: "Rust" }
]

// Hello worlds for each lang
const defaultCode = {
  "python": '# Write your Python code here\nprint("Hello, World!")',
  "javascript": '// Write your JavaScript code here\nconsole.log("Hello, World!");',
  "cpp": '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
  "c": '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
  "rust": 'fn main() {\n    println!("Hello, World!");\n}'
};


export default function IDE() {
  const [code, setCode] = useState('print("hello world")');
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
  const [jobId, setJobId] = useState<string | null>(null);

  const { 
    status, 
    result, 
    error, 
    connectionState,
    executionTime 
  } = webSocket(jobId, {
    apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    reconnectAttempts: 3,
    pingInterval: 30000
  });

  useEffect(() => {
    // Handle connection state changes
    if (connectionState === 'connecting') {
      setOutput(prev => [
        ...prev.filter(msg => !msg.startsWith('Connection')),
        'Connection: Connecting to server...'
      ]);
    } else if (connectionState === 'reconnecting') {
      setOutput(prev => [
        ...prev.filter(msg => !msg.startsWith('Connection')),
        'Connection: Reconnecting...'
      ]);
    } else if (connectionState === 'authenticating') {
      setOutput(prev => [
        ...prev.filter(msg => !msg.startsWith('Connection')),
        'Connection: Authenticating...'
      ]);
    }
    
    // Handle job status changes
    if (status === 'queued' || status === 'processing') {
      setOutput(prev => [
        ...prev.filter(msg => !msg.startsWith('Job ')),
        `Job ${status}...`
      ]);
    }
    
    // Handle job completion
    if (status === 'completed' && result) {
      const executionMsg = executionTime ? 
        `Execution completed in ${executionTime.toFixed(2)}s` :
        'Execution completed';
        
      setOutput(prev => [
        ...prev.filter(msg => !msg.includes('Job') && !msg.includes('Execution')),
        executionMsg,
        ...(result.stdout ? [`Output: ${result.stdout}`] : []),
        ...(result.stderr ? [`Error: ${result.stderr}`] : [])
      ]);
      setIsExecuting(false);
    }
    
    // Handle job failure or errors
    if (status === 'failed' || error) {
      setOutput(prev => [
        ...prev.filter(msg => !msg.startsWith('Job ')),
        "Job failed",
        error || ""
      ]);
      setIsExecuting(false);
    }
  }, [status, result, error, connectionState, executionTime]);

  // API Call
  const execute = async (code: string, language: string) => {
    if (!code.trim()) {
      setOutput(["Please enter some code"]);
      return;
    }
  
    setIsExecuting(true);
    setOutput(["Submitting code..."]);
    
    try {
      const fullFilename = `${filename}${fileExt}`;
      const response = await actions.executeCode(code, language, fullFilename);
      
      if (!response?.job_id) {
        throw new Error("Failed to start job");
      }
      
      // Set the job ID to trigger WebSocket connection
      setJobId(response.job_id);
      setOutput(["Code submitted. Waiting for execution..."]);
      
    } catch (err: any) {
      setOutput(prev => [
        ...prev,
        "Submission failed",
        err.message || "Unknown error occurred"
      ]);
      setIsExecuting(false);
    }
  };

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

  // Function to handle file download
const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename; // Use current filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setOutput(prev => [...prev, `File downloaded as ${filename}`]);
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
    setCode(defaultCode[langValue as keyof typeof defaultCode] || 'print("Hello, World!")');
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
    <div className="w-full max-w-6xl mx-auto my-4 rounded-lg overflow-hidden shadow-xl">

      {/* Toolbar */}
      <div className="flex justify-between py-6">
        <div className="flex">
          <div className="flex bg-[#3d3d3d] rounded p-2">
            <button 
              className="p-2 hover:bg-gray-600 rounded" 
              onClick={handleDownload} 
              title="Download code"
            >
              <MdOutlineFileDownload />
            </button>
            <button 
              className="p-2 hover:bg-gray-600 rounded" 
              onClick={handleRestart}
              title="Reset code"
            >
              <VscDebugRestart />
            </button>
            <button 
              className="p-2 hover:bg-gray-600 rounded" 
              //onClick={handleShare}
              title="Share code"
            >
              <VscShare />
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-[#3d3d3d] rounded">
            <button 
              className="p-2 hover:bg-gray-600 rounded mr-1" 
              onClick={handleToggleTheme}
            >
              Theme
            </button>
            <button 
              className="p-2 hover:bg-gray-600 rounded mr-1" 
              onClick={handleToggleSettings}
            >
              <VscSettingsGear />
            </button>
          </div>
        </div>
      </div>

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
      <div className="flex justify-between bg-[#1d1d1d]">
        
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

        {/* Lang Select*/}
        <div className="flex items-center border-b border-gray-600 py-2 bg-[#1d1d1d]">
          <div className="bg-[#3d3d3d] hover:bg-gray-600 rounded px-5 mx-4">
            <select 
              className="text-gray-200 outline-none bg-transparent"
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}

            </select>
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
              Run
            </button>
            <span className="flex-grow px-4 py-1 text-sm text-gray-500"> Output </span>
          </form>
        </div>
        
        {/* Console Output */}
        <div className="h-full overflow-auto p-4 text-sm">
          {output.length === 0 ? (
            <div className="text-gray-500">Run your code to see output here</div>
          ) : (
            output.map((line, i) => (
              <pre key={i} className="text-gray-300 whitespace-pre-wrap font-mono text-sm mb-1">{line}</pre>
            ))
          )}
        </div>
      </div>

    </div>
  );
}