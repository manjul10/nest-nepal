"use client";
import React from "react";
import Image from "next/image";

const CTAIcon = ({ path, color }: { path: React.ReactNode; color: string }) => (
  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
      {path}
    </svg>
  </div>
);

const GoogleWorkspaceCTA = () => {
  return (
    <div className="font-sans bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-[#F8F9FA] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center relative">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 z-10">
          {/* Icons Row */}
          <div className="flex gap-4 mb-8">
            {/* Gmail */}
            <img src={"/aunty-apps.png"} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-sans">
            Prefer to talk to sales directly?
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
            <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              तपाईंको
            </span>{" "}
            company{" "}
            <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              को
            </span>{" "}
            unique requirements{" "}
            <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              अनुसार तयार गरिएको
            </span>{" "}
            solution{" "}
            <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              सँग
            </span>{" "}
            efficiency{" "}
            <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              र
            </span>{" "}
            collaboration maximize{" "}
            <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              गर्नुहोस्
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button className="bg-[#fadbe2] border-2 border-[#fba4b7] text-[#e94560] hover:bg-[#ffe5ea] px-6 py-3 rounded-xl font-medium flex items-center gap-3 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message On WhatsApp
            </button>

            <div className="flex items-center gap-4 text-black font-semibold">
              <span className="hidden sm:block w-[1px] h-8 bg-gray-300"></span>
              <span>Call: +977 9864333517</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] flex items-end justify-center overflow-hidden">
          <div className="relative z-10 w-full h-full flex items-end justify-center">
            <img
              src="/aunty.png"
              alt="Sales Representative"
              className="h-full w-auto object-contain object-bottom"
            />
          </div>
        </div>

        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap");
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </div>
    </div>
  );
};

export default GoogleWorkspaceCTA;
