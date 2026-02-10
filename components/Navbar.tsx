"use client";

import { useState, useEffect } from "react";
import { Great_Vibes } from "next/font/google";
import Image from "next/image";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const Navbar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 40,
    seconds: 35,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (
          prev.days === 0 &&
          prev.hours === 0 &&
          prev.minutes === 0 &&
          prev.seconds === 0
        ) {
          clearInterval(timer);
          return prev;
        }

        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <div className="w-full bg-white/50 backdrop-blur-md  z-50 mt-4  border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center py-4 lg:h-20 gap-y-8 lg:gap-y-0">
          <div className="flex items-center gap-4 order-1">
            <div className="shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="Nest Nepal Logo"
                width={150}
                height={40}
                className="object-contain w-[150px] md:w-[200px]"
              />
            </div>
          </div>

          <div className="order-3 lg:order-2 w-full lg:w-auto flex flex-col items-center relative lg:mb-0">
            <div className="flex items-end gap-2 md:gap-3 relative mt-2 lg:mt-4">
              <h2
                className={`${greatVibes.className} absolute w-full left-0 text-3xl z-10 -top-6 text-[#FF4D6D] text-center tracking-wide`}
              >
                Valentine's offer
              </h2>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1E88E5] leading-none">
                  {formatTime(timeLeft.days)}{" "}
                  <span className="text-[#1E88E5] text-xl md:text-2xl relative -top-1">
                    :
                  </span>
                </div>
                <div className="text-[10px] uppercase text-gray-800 font-bold mt-1">
                  Days
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1E88E5] leading-none">
                  {formatTime(timeLeft.hours)}{" "}
                  <span className="text-[#1E88E5] text-xl md:text-2xl relative -top-1">
                    :
                  </span>
                </div>
                <div className="text-[10px] uppercase text-gray-800 font-bold mt-1">
                  Hrs
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1E88E5] leading-none">
                  {formatTime(timeLeft.minutes)}{" "}
                  <span className="text-[#1E88E5] text-xl md:text-2xl relative -top-1">
                    :
                  </span>
                </div>
                <div className="text-[10px] uppercase text-gray-800 font-bold mt-1">
                  Min
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1E88E5] leading-none">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="text-[10px] uppercase text-gray-800 font-bold mt-1">
                  Sec
                </div>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-3 flex items-center">
            <button className="bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] hover:bg-[#C8E6C9] px-3 md:px-4 py-1 rounded-xl shadow-sm transition-all duration-300 flex items-center font-medium cursor-pointer text-sm md:text-base">
              <span className="mr-2 text-lg md:text-xl">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 36 36"
                  className="w-6 h-6 md:w-9 md:h-9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.651 32.4772L5.6715 25.101C4.425 22.9425 3.7695 20.493 3.77025 17.9842C3.774 10.1355 10.161 3.75 18.0105 3.75C21.8198 3.7515 25.3943 5.23425 28.083 7.9245C30.771 10.6155 32.2515 14.1915 32.25 17.9955C32.247 25.8442 25.8585 32.2305 18.0105 32.2305H18.0045C15.6218 32.2297 13.2795 31.632 11.1998 30.4972L3.651 32.4772Z"
                    fill="white"
                  />
                  <path
                    d="M3.65104 32.8522C3.55204 32.8522 3.45604 32.8132 3.38479 32.7412C3.29104 32.646 3.25429 32.5072 3.28954 32.379L5.26879 25.152C4.04179 22.9725 3.39454 20.4975 3.39604 17.985C3.39904 9.9285 9.95479 3.375 18.0105 3.375C21.918 3.3765 25.5893 4.89825 28.3485 7.65975C31.1078 10.422 32.6265 14.0925 32.625 17.9955C32.622 26.0512 26.0655 32.6055 18.0105 32.6055C15.6188 32.6047 13.2525 32.0145 11.1525 30.8977L3.74629 32.8395C3.71479 32.8485 3.68329 32.8522 3.65104 32.8522Z"
                    fill="white"
                  />
                  <path
                    d="M18.0104 3.75C21.8197 3.7515 25.3942 5.23425 28.0829 7.9245C30.7709 10.6155 32.2514 14.1915 32.2499 17.9955C32.2469 25.8442 25.8584 32.2305 18.0104 32.2305H18.0044C15.6217 32.2297 13.2794 31.632 11.1997 30.4972L3.65094 32.4772L5.67144 25.101C4.42494 22.9425 3.76944 20.493 3.77019 17.9842C3.77394 10.1355 10.1609 3.75 18.0104 3.75ZM18.0104 3C9.74844 3 3.02394 9.7215 3.02019 17.9842C3.01944 20.5095 3.65694 22.998 4.86594 25.2008L2.92719 32.28C2.85669 32.5387 2.92869 32.8147 3.11769 33.0052C3.26019 33.1492 3.45294 33.228 3.65094 33.228C3.71469 33.228 3.77844 33.2197 3.84144 33.2032L11.1067 31.2982C13.2277 32.3992 15.6052 32.9805 18.0044 32.9812C26.2724 32.9812 32.9969 26.259 33.0007 17.9962C33.0022 13.992 31.4444 10.227 28.6147 7.395C25.7834 4.56225 22.0177 3.0015 18.0104 3Z"
                    fill="#CFD8DC"
                  />
                  <path
                    d="M26.382 9.624C24.147 7.3875 21.1762 6.15525 18.0142 6.1545C11.4862 6.1545 6.17695 11.4615 6.17395 17.985C6.1732 20.2207 6.7987 22.3972 7.9837 24.282L8.2657 24.7297L7.06945 29.0955L11.5492 27.921L11.982 28.1775C13.7985 29.256 15.882 29.826 18.006 29.8267H18.0105C24.534 29.8267 29.8432 24.519 29.8455 17.9947C29.8462 14.8335 28.617 11.8605 26.382 9.624Z"
                    fill="#40C351"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.4511 12.0337C14.1848 11.4412 13.9043 11.4293 13.6501 11.4188C13.4423 11.4098 13.2053 11.4105 12.9683 11.4105C12.7313 11.4105 12.3458 11.4997 12.0196 11.856C11.6933 12.2122 10.7738 13.0725 10.7738 14.823C10.7738 16.5735 12.0488 18.2655 12.2266 18.5025C12.4043 18.7395 14.6881 22.4467 18.3046 23.8732C21.3098 25.0582 21.9218 24.8228 22.5743 24.7635C23.2268 24.7043 24.6796 23.9032 24.9758 23.0723C25.2721 22.2413 25.2721 21.5295 25.1836 21.381C25.0943 21.2325 24.8573 21.144 24.5018 20.9655C24.1463 20.787 22.3966 19.9267 22.0703 19.8082C21.7441 19.6897 21.5071 19.6305 21.2693 19.9867C21.0323 20.3422 20.3506 21.144 20.1428 21.381C19.9351 21.6187 19.7273 21.6488 19.3718 21.4703C19.0163 21.2917 17.8703 20.9167 16.5106 19.7048C15.4531 18.762 14.7391 17.5973 14.5313 17.241C14.3236 16.8855 14.5088 16.6928 14.6873 16.515C14.8471 16.3553 15.0428 16.0995 15.2213 15.8917C15.3991 15.684 15.4583 15.5355 15.5768 15.2985C15.6953 15.0608 15.6361 14.853 15.5468 14.6752C15.4591 14.4967 14.7676 12.7372 14.4511 12.0337Z"
                    fill="white"
                  />
                </svg>
              </span>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
