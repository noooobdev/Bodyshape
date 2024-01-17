import Image from "next/image";
import React from "react";
import PlayLogo from "../Assets/PlayLogo";

const Hero = () => {
  return (
    <div className="h-[900px] bg-cover custom-image ">
      <div className="py-20 p-2">
        <div className="bg-gradient-to-b from-[#1d1d1d] to-black lg:py-5 md:py-3 sm:py-2 lg:px-12 md:px-5 sm:px-2 lg:w-2/5 md:w-2/5 sm:w-1/3  flex flex-col gap-5">
          <h1 className="text-white font-semibold lg:text-6xl md:text-4xl sm:text-3xl">
            Transform your body
          </h1>
          <p className=" text-zinc-400 text-left lg:text-lg md:text-xs sm:text-[12px]">
            We are dedicated to helping you transform your body and mind through
            the power of fitness.
          </p>
          <div className="flex items-center justify-start lg:pt-16 md:pt-4 gap-4 ">
            <button className="bg-gradient-to-r from-orange-600 to-amber-500 p-2 lg:px-4 md:px-3 lg:text-base md:text-sm sm:text-[12px] text-white">
              Get Started
            </button>
            <div className=" bg-gradient-to-r p-0.5 from-orange-400 to-orange-900 text-white">
              <button className="flex items-center p-2 bg-black lg:text-base md:text-sm sm:text-[12px]">
                <PlayLogo />
                Watch Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
