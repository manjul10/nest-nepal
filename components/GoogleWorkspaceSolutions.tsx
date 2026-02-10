import React from "react";
import Image from "next/image";

const SolutionCard = ({
  image,
  title,
  children,
}: {
  image: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-full  rounded-3xl mb-8 flex items-center justify-center overflow-hidden  relative">
      <img src={image} alt={title} />
    </div>
    <h3 className="text-xl font-medium text-gray-900 mb-3">{title}</h3>
    <div className="text-gray-500 text-sm leading-relaxed max-w-sm relative">
      {children}
    </div>
  </div>
);

const GoogleWorkspaceSolutions = () => {
  return (
    <div className="font-sans bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-black mb-2">
            Solutions for businesses,
          </h2>
          <h3
            className="text-3xl md:text-5xl font-medium text-[#3b82f6] mb-6"
            style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}
          >
            साना देखि ठूला सबैका लागि
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            No matter the size, Google Workspace{" "}
            <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              ले तपाईंको
            </span>{" "}
            business <br />
            <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              को सबै
            </span>{" "}
            needs{" "}
            <span style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>
              पूरा गर्छ
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <SolutionCard title="For enterprise" image={"enterprise.png"}>
            <span className="text-[#3b82f6]  rounded px-1 group-hover:bg-blue-50 transition-colors">
              Secure collaboration
            </span>{" "}
            <span className="text-[#3b82f6]">tools for enterprise</span> , with
            premium AI and enterprise-grade security built in for all the ways
            work is changing.
          </SolutionCard>

          {/* Card 2: For small business */}
          <SolutionCard title="For small business" image={"newbusiness.png"}>
            Tools for <span className="text-[#3b82f6]">small businesses</span>{" "}
            that help teams and{" "}
            <span className="text-[#3b82f6]">individuals</span> with everyday
            tasks like scheduling appointments and email marketing.
          </SolutionCard>

          {/* Card 3: For new business */}
          <SolutionCard title="For new business" image={"newbusiness.png"}>
            Essentials tools for{" "}
            <span className="text-[#3b82f6]">new businesses</span> and{" "}
            <span className="text-[#3b82f6]">startups</span> , including
            business email domains, online file sharing and storage, and more.
          </SolutionCard>
        </div>
      </div>
    </div>
  );
};

export default GoogleWorkspaceSolutions;
