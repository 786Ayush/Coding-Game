"use client";
import React, {  useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { language } from "../Common/Variables";
import { CompileCode } from "@/app/lib/api";

interface LanguageOption {
  id: number;
  name: string;
  editorLang?: string; // e.g., "javascript", "python"
}

interface CompileResponse {
  stdout?: string;
  stderr?: string;
  compile_output?: string;
  status?: {
    id: number;
    description: string;
  };
}

export default function Code() {
  const [code, setCode] = useState<string>(`function helloWorld() {
    console.log("Hello, World!");
  }
    helloWorld();`);
  const [languageId, setLanguageId] = useState<number>(63);
  const [output, setOutput] = useState<CompileResponse | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] =useState<LanguageOption | null>(null);
  const [input, setInput] = useState<any>(null); // For stdin input


  console.log("Selected Language:", selectedLanguage,selectedLanguage?.name.toLowerCase().split(" ")[0]);
  const handleCompileCode = async () => {
    setIsLoading(true);
    try {
      const response: CompileResponse = await CompileCode(code, languageId,input);
      setOutput(response);
      setStatus(response?.status?.description || null);
      console.log("Compilation Result:", response);
    } catch (error) {
      console.error("Error during compilation:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const selectedLang = language.find(
      (lang: LanguageOption) => lang.id === languageId
    );
    setSelectedLanguage(selectedLang || null);
  }, [languageId]);

  return (
    <div className="p-4 space-y-4 bg-zinc-900  text-white overflow-y-scroll border rounded-lg border-gray-700 m-3 m-collapse">
      {/* Controls */}
      <div className="flex items-center justify-between">
        {/* <div className="h-48 overflow-y-scroll w-full max-w-xs"> */}
        <select
          className="bg-white text-black px-4 py-2 rounded-md shadow min-w-40"
          value={languageId}
          onChange={(e) => {
            const selected = language.find(
              (lang: LanguageOption) => lang.id === parseInt(e.target.value)
            );
            if (selected) {
              setLanguageId(selected.id);
            }
          }}
          
        >
          {language.map((lang: LanguageOption) => (
            <option key={lang.id} value={lang.id}>
              {lang.name}
            </option>
          ))}
        </select>
        {/* </div> */}
        <div className="space-x-2">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition disabled:opacity-50"
            onClick={handleCompileCode}
            disabled={isLoading}
          >
            {isLoading ? "Running..." : "Run"}
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">
            Submit
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="w-full border border-gray-700 rounded-md overflow-hidden shadow">
        <Editor
          height="400px"
          language={selectedLanguage?.editorLang || "javascript"}
          // language={selectedLanguage?.name.split(" ")[0] || "javascript"}
          // language="cpp"
          // defaultLanguage="C++"
          value={code}
          theme="vs-dark"
          onChange={(value) => setCode(value || "")}
        />
      </div>

      {/* Output */}
      <div className="w-full bg-gray-900 border border-gray-700 text-white rounded-md p-4 shadow">
        <h2 className="text-lg font-semibold mb-2">Output</h2>
        <pre className="whitespace-pre-wrap break-words text-sm bg-gray-800 p-4 rounded-md">
          {output?.stdout ||
            output?.compile_output ||
            output?.stderr ||
            "No output"}
        </pre>
        {status && (
          <p className="text-gray-400 mt-2 text-xs">Status: {status}</p>
        )}
      </div>
    </div>
  );
}
