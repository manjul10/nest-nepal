"use client";
import { useState } from "react";

export default function VideoDemoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    console.log("Video playing...");
  };

  return (
    <div className="w-full font-sans py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden group cursor-pointer"
          onClick={handlePlayClick}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gray-300 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300">
                <svg
                  className="w-18 h-18 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <p className="text-lg font-normal">
            Get A Free 15 Min Demo · See if it fits your business
          </p>
        </div>
      </div>
    </div>
  );
}
