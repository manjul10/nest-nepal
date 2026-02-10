"use client";
import React from "react";

const GoogleWorkspaceFeatures = () => {
  return (
    <div className="font-sans bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-normal text-black mb-2">
            <span
              className="text-[#3b82f6] font-semibold"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              सबै{" "}
            </span>
            <span className="font-medium">Tools </span>
            <span
              className="text-[#3b82f6] font-semibold"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              एउटै{" "}
            </span>
            <span className="font-medium">Platform </span>
            <span
              className="font-medium"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              मा
            </span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-medium text-[#5f6368]">
            Google Workspace
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full mb-16 text-center">
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-medium text-gray-900 mb-4">
              Premium AI built-in
            </h4>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              Do your best work faster with the Gemini app, NotebookLM, and
              Gemini in Gmail, Docs, Sheets, and more.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-medium text-gray-900 mb-4">
              Tools born in the Cloud
            </h4>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              Collaborate in real time, from any device, across tools that are
              always up-to-date.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-medium text-gray-900 mb-4">
              Enterprise-grade security
            </h4>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              Protect your emails, files, and meetings with AI-powered security
              and compliance controls.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <button className="bg-white border border-gray-400 text-gray-800 hover:bg-gray-50 px-8 py-3 rounded-full text-base font-medium transition-colors flex items-center justify-center gap-2">
            Get a quotation
            <span className="transform -translate-y-[1px]">↗</span>
          </button>
        </div>

        <div className="w-full hidden md:flex flex-col items-center">
          <h4 className="text-xl font-bold text-gray-800 mb-10">
            Google Workspace includes:
          </h4>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-8 max-w-6xl">
            <img src={"/apps.png"} />
          </div>
        </div>

        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap");
        `}</style>
      </div>
    </div>
  );
};

export default GoogleWorkspaceFeatures;
