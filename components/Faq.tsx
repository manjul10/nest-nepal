"use client";
import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "Is Google Workspace compatible with my current email client?",
    answer:
      "Yes, Google Workspace is compatible with most email clients. You can access your Gmail through IMAP/POP protocols on clients like Outlook, Apple Mail, and Thunderbird. Additionally, Google Workspace provides its own web interface and mobile apps for seamless email management.",
  },
  {
    id: 2,
    question:
      "Can I transfer my current Google Workspace account to Nest Nepal?",
    answer:
      "Yes, you can transfer your existing Google Workspace account to Nest Nepal. Our team will guide you through the migration process to ensure a smooth transition with minimal downtime. All your data, emails, and settings will be preserved during the transfer.",
  },
  {
    id: 3,
    question: "Are there any fees for transferring a domain to Nest Nepal?",
    answer:
      "Domain transfer fees vary depending on the domain extension and registrar. Our team will provide you with a detailed breakdown of any applicable fees before initiating the transfer process. In many cases, transfers include a one-year domain renewal.",
  },
  {
    id: 4,
    question: "Are there any hidden charges for Nest Nepal Customers?",
    answer:
      "No, there are no hidden charges. All pricing is transparent and clearly communicated upfront. You only pay for the services you subscribe to, with no surprise fees or additional costs beyond what is stated in your plan.",
  },
  {
    id: 5,
    question: "What all does Gsuite productivity suite include?",
    answer:
      "G Suite (now Google Workspace) includes Gmail for business email, Google Drive for cloud storage, Google Docs, Sheets, and Slides for document creation, Google Calendar for scheduling, Google Meet for video conferencing, Google Chat for messaging, and Google Forms for surveys and data collection.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id: any) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-normal text-center mb-12 text-gray-900">
          Frequently Asked Questions{" "}
          <span className="text-blue-500">(FAQs)</span>
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <div key={faq.id}>
              {/* Divider */}
              {index === 0 && <div className="h-px bg-gray-200 mb-0"></div>}

              {/* FAQ Item */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full py-6 px-0 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors duration-200 group"
                >
                  <span className="text-lg font-normal text-gray-900 pr-8 group-hover:text-gray-700">
                    {faq.question}
                  </span>

                  {/* Chevron Icon */}
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openId === faq.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-6 px-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
