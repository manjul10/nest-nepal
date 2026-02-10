"use client";
import React from "react";
import Image from "next/image";

const FeatureItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="flex items-center gap-3 mb-2">
    <div className="flex-shrink-0 w-5 h-5">{icon}</div>
    <span className="text-sm text-gray-700 font-medium">{text}</span>
  </div>
);

const GoogleWorkspacePricing = () => {
  return (
    <div className="font-sans bg-white  px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg mb-6 font-medium">
            Trusted by 1,000+ Nepali businesses on their
            <br />
            growth journey.{" "}
            <span
              className="text-[#3b82f6] font-semibold"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              अब तपाईंको team तयार छ?
            </span>
          </p>

          <div className="flex flex-wrap justify-center py-8 items-center gap-8 md:gap-16 mt-8 relative w-full">
            <img
              src={"groups.png"}
              className="object-contain h-auto w-full max-w-[600px] md:max-w-4xl"
              alt="group"
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium leading-tight text-gray-900 mb-6">
            <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              के{" "}
            </span>
            <span className="text-[#4285F4] font-medium">Google Workspace</span>
            <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              {" "}
              तपाईंको
            </span>
            <br />
            <span className="text-black font-medium">business growth</span>
            <span
              className="text-[#4285F4] font-semibold"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              {" "}
              को लागि{" "}
            </span>
            <span className="text-black font-medium">best fit </span>
            <span
              className="text-[#4285F4] font-semibold"
              style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
            >
              हो?
            </span>
          </h2>

          <p
            className="text-gray-600 text-lg mb-6"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            Tailored Plans तपाईंको Online Presence को हरेक पहलुलाई
            <br />
            Elevate र Empower गर्न
          </p>

          <div className="flex justify-center items-center gap-4">
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                  fill="#EA4335"
                />
              </svg>
            </div>
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"
                  fill="#4285F4"
                />
                <text
                  x="50%"
                  y="65%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#4285F4"
                  fontSize="8"
                  fontWeight="bold"
                >
                  31
                </text>
              </svg>
            </div>
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  d="M8.667 3.5h7.333l3.667 6.333H12.333L8.667 3.5z"
                  fill="#FFBA00"
                />
                <path
                  d="M19.667 9.833h-7.333l-3.667 6.334h7.333l3.667-6.334z"
                  fill="#2684FC"
                />
                <path
                  d="M8.667 16.167L5 9.833 8.667 3.5h-7.333L-2.333 9.833l3.667 6.334h7.333z"
                  fill="#00AC47"
                  transform="rotate(-60 6.833 9.833)"
                />
              </svg>
            </div>
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                  fill="#2684FC"
                />
                <path d="M14.5 2V7.5H20" fill="#2684FC" />
                <path d="M14.5 2v5.5H20L14.5 2z" fill="#8AB4F8" />
                <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h5v2H8z" fill="white" />
              </svg>
            </div>
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                  fill="#0F9D58"
                />
                <path d="M14.5 2V7.5H20" fill="#0F9D58" />
                <path d="M14.5 2v5.5H20L14.5 2z" fill="#34A853" />
                <rect x="8" y="11" width="2" height="2" fill="white" />
                <rect x="8" y="14" width="2" height="2" fill="white" />
                <rect x="11" y="11" width="5" height="2" fill="white" />
                <rect x="11" y="14" width="5" height="2" fill="white" />
              </svg>
            </div>
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                  fill="#F4B400"
                />
                <path d="M14.5 2V7.5H20" fill="#F4B400" />
                <path d="M14.5 2v5.5H20L14.5 2z" fill="#FBBC04" />
                <rect x="8" y="11" width="8" height="6" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12  flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 flex  items-start pt-4">
            <div className="w-full h-full">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                Starter
              </h3>

              <div className="flex items-baseline mb-1">
                <span className="text-sm font-medium text-gray-500 mr-1">
                  Rs.
                </span>
                <span className="text-5xl font-bold text-gray-900">499</span>
                <span className="text-2xl text-gray-400 line-through ml-3 decoration-red-500 decoration-2">
                  560
                </span>
              </div>

              <div className="text-xs text-gray-500 mb-6 text-left">
                per user / month,
                <br />
                <span className="border border-blue-200 bg-blue-50 text-blue-600 px-1 rounded text-[10px] inline-flex items-center gap-1 mt-1">
                  1 year commitment
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>

              <button className="w-full md:w-auto px-8 py-3 rounded-xl border-2 border-[#ff8fa3] text-[#f45077] font-medium hover:bg-[#fff0f3] transition-colors flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Contact Sales
              </button>
            </div>
            <div className="h-full w-[2px] bg-gray-200" />
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Storage */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Storage</h4>
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      d="M8.667 3.5h7.333l3.667 6.333H12.333L8.667 3.5z"
                      fill="#FFBA00"
                    />
                    <path
                      d="M19.667 9.833h-7.333l-3.667 6.334h7.333l3.667-6.334z"
                      fill="#2684FC"
                    />
                    <path
                      d="M8.667 16.167L5 9.833 8.667 3.5h-7.333L-2.333 9.833l3.667 6.334h7.333z"
                      fill="#00AC47"
                      transform="rotate(-60 6.833 9.833)"
                    />
                  </svg>
                }
                text="30GB Pooled Storage per user"
              />

              <h4 className="font-semibold text-gray-900 mb-4 mt-4">
                Collaborate
              </h4>

              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                      fill="#2684FC"
                    />
                    <path d="M14.5 2V7.5H20" fill="#2684FC" />
                    <path d="M14.5 2v5.5H20L14.5 2z" fill="#8AB4F8" />
                    <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h5v2H8z" fill="white" />
                  </svg>
                }
                text="Documents with Google Docs"
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                      fill="#0F9D58"
                    />
                    <path d="M14.5 2V7.5H20" fill="#0F9D58" />
                    <path d="M14.5 2v5.5H20L14.5 2z" fill="#34A853" />
                    <rect x="8" y="11" width="2" height="2" fill="white" />
                    <rect x="8" y="14" width="2" height="2" fill="white" />
                    <rect x="11" y="11" width="5" height="2" fill="white" />
                    <rect x="11" y="14" width="5" height="2" fill="white" />
                  </svg>
                }
                text="Data Insights with Google Sheets"
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                      fill="#F4B400"
                    />
                    <path d="M14.5 2V7.5H20" fill="#F4B400" />
                    <path d="M14.5 2v5.5H20L14.5 2z" fill="#FBBC04" />
                    <rect x="8" y="11" width="8" height="6" fill="white" />
                  </svg>
                }
                text="Present with Google Slides"
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                      fill="#7B1FA2"
                    />
                    <path d="M14.5 2V7.5H20" fill="#7B1FA2" />
                    <path d="M14.5 2v5.5H20L14.5 2z" fill="#9C27B0" />
                    <rect x="8" y="11" width="8" height="2" fill="white" />
                    <rect x="8" y="14" width="8" height="2" fill="white" />
                  </svg>
                }
                text="Surveys, To-dos and Many More"
              />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Communicate</h4>
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                      fill="#EA4335"
                    />
                  </svg>
                }
                text="Secured & Personalized Gmail"
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"
                      fill="#4285F4"
                    />
                    <text
                      x="50%"
                      y="65%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fill="#4285F4"
                      fontSize="8"
                      fontWeight="bold"
                    >
                      31
                    </text>
                  </svg>
                }
                text="Always in Track with Schedule"
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <circle cx="12" cy="12" r="10" fill="#fff" />
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                      fill="#00897B"
                    />
                    <path
                      d="M13 11.5l5.5-4.5v10l-5.5-4.5v3.5A1.5 1.5 0 0 1 11.5 17.5h-8A1.5 1.5 0 0 1 2 16V8a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 13 8v3.5z"
                      fill="#00AC47"
                    />
                  </svg>
                }
                text="HD Video Calls (100 Users)"
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
                      fill="#00AC47"
                    />
                    <path
                      d="M17 12h-2v2h2v-2zm-4 2h2v-2h-2v2zm-4 0h2v-2H9v2zm8-6H7v2h10V8z"
                      fill="white"
                    />
                  </svg>
                }
                text="Gossip Secretly in your Group"
              />
              <h4 className="font-semibold text-gray-900 mb-4 mt-6">Control</h4>
              <FeatureItem
                icon={
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                }
                text="Basic Security & Admin Control"
              />
              <FeatureItem
                icon={
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                }
                text="Standard Endpoint Management"
              />
              <FeatureItem
                icon={
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                }
                text="Smart Search with Workspace"
              />
              <FeatureItem
                icon={
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                }
                text="Vault for eDiscovery"
              />
              <FeatureItem
                icon={
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      d="M8.667 3.5h7.333l3.667 6.333H12.333L8.667 3.5z"
                      fill="#FFBA00"
                    />
                    <path
                      d="M19.667 9.833h-7.333l-3.667 6.334h7.333l3.667-6.334z"
                      fill="#2684FC"
                    />
                    <path
                      d="M8.667 16.167L5 9.833 8.667 3.5h-7.333L-2.333 9.833l3.667 6.334h7.333z"
                      fill="#00AC47"
                      transform="rotate(-60 6.833 9.833)"
                    />
                  </svg>
                }
                text="Backup options for Drive and Gmail"
              />
            </div>
          </div>
        </div>

        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap");
        `}</style>
      </div>
    </div>
  );
};

export default GoogleWorkspacePricing;
