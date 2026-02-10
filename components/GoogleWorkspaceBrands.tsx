"use client";
import React from "react";
import Image from "next/image";

const GoogleWorkspaceBrands = () => {
  // Feature list
  const features = [
    { id: 1, text: "Your files, all in one place", active: true },
    { id: 2, text: "Annotate PDFs", active: false },
    { id: 3, text: "AI-powered search", active: false },
    { id: 4, text: "Activity view", active: false },
  ];

  return (
    <div className="font-sans bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-black mb-4 leading-tight">
            Brands using Google Workspace to
            <br className="hidden md:block" />
            succeed online,{" "}
            <span
              className="text-[#3b82f6]"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              कसरी?
            </span>
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            <span
              className="font-semibold"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              कसरी
            </span>{" "}
            teams Google Workspace{" "}
            <span
              className="font-semibold"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              सँग
            </span>{" "}
            productivity
            <br className="hidden md:block" />
            <span
              className="font-semibold"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              बढाउँछन् र समय बचत गर्छन्
            </span>
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12 md:gap-24">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              {/* Placeholder for the complex orbit animation, using the provided drive.png as the core visual */}
              <div className="relative w-full h-full p-8 flex items-center justify-center">
                <img
                  src="/drive.png"
                  alt="Google Drive Workflow"
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`pl-6 border-l-4 transition-all duration-300 cursor-pointer ${feature.active ? "border-[#3b82f6]" : "border-transparent hover:border-gray-200"}`}
              >
                <h3
                  className={`text-xl font-medium mb-2 ${feature.active ? "text-gray-900" : "text-gray-500 hover:text-gray-700"}`}
                >
                  {feature.text}
                </h3>
                {feature.active && (
                  <div className="text-gray-600 text-base leading-relaxed animate-fadeIn">
                    Edit and organize{" "}
                    <span className="text-[#3b82f6] hover:underline cursor-pointer">
                      Google Docs
                    </span>
                    ,{" "}
                    <span className="text-[#3b82f6] hover:underline cursor-pointer">
                      Sheets
                    </span>
                    ,{" "}
                    <span className="text-[#3b82f6] hover:underline cursor-pointer">
                      Slides
                    </span>
                    , Microsoft Office files, and PDFs in real-time. Plus,
                    access over 100 other file types!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap");
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-5px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default GoogleWorkspaceBrands;
