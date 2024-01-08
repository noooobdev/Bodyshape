import Image from "next/image";
import React from "react";
import PlayLogo from "../Assets/PlayLogo";

const Hero = () => {
  return (
    <div className="h-[900px] bg-cover custom-image ">
      <div className="p-2 ">
        <div className="bg-gradient-to-b from-[#1d1d1d] to-black py-5 px-10 w-1/3 flex flex-col gap-5">
          <h1 className="text-white font-semibold text-6xl">
            Transform your body
          </h1>
          <p className=" text-zinc-400 text-left">
            We are dedicated to helping you transform your body and mind through
            the power of fitness.
          </p>
          <div className="flex items-center justify-start pt-16 gap-4  ">
            <button className="bg-gradient-to-r from-orange-600 to-amber-500 p-2 px-4 text-white">
              Get Started
            </button>
            <div className=" bg-gradient-to-r p-0.5 from-orange-400 to-orange-900 text-white">
              <button className="flex items-center p-2 bg-black">
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
