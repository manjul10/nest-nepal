"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0000ff] to-[#0000ff] text-white py-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 w-full relative">
          <div className="relative  px-4 py-2 inline-block">
            <div className="flex items-center gap-2">
              <img src={"nestnepal.png"} />
            </div>
          </div>

          <div className="flex flex-col items-start text-sm font-light gap-2 tracking-wide mt-8 md:mt-0">
            <div className="py-1">Nepal</div>
            <p className="mb-1">Call us : +977 986-160-1174</p>
            <p className="mb-1">Kupondole, Lalitpur, Nepal</p>
            <p>support@nestsms.com</p>
          </div>
        </div>

        <div className="relative w-full flex justify-center items-center pointer-events-none select-none overflow-hidden">
          <h1
            className={`${manrope.className} text-[60px] md:text-[240px] font-bold text-transparent text-stroke-gradient opacity-30 whitespace-nowrap tracking-tighter leading-[0.8]`}
            style={{
              background:
                "linear-gradient(to bottom, transparent, transparent)",
              WebkitTextStroke: "2px #84b5ecff",
            }}
          >
            NEST NEPAL
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end w-full mt-20 pt-8 border-t border-white/10">
          <div className="mb-4 md:mb-0">
            <p className="text-sm font-medium">Google Workspace</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-light">
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Why google workspace?
            </Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              Pricing
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              Get A Quotation
              <span className="text-xs">↗</span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-stroke-2 {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.1);
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(-50%) translate(0, 0);
          }
          50% {
            transform: translateY(-50%) translate(0, -10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out 1.5s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
