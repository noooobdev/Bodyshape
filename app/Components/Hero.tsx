import Image from "next/image";
import React from "react";
import hero from "../Assets/Hero.png";
import PlayLogo from "../Assets/PlayLogo";

const Hero = () => {
  return (
    <>
      <div className="absolute -z-50   inset-0">
        <Image src={hero} alt="Deadlift" objectFit="cover" width="10000" />
      </div>
      <div className="p-2 mt-8">
        <div className="bg-gradient-to-b from-[#1d1d1d] to-black py-5 px-10 w-1/3 ">
          <h1 className="text-white font-semibold text-6xl">
            Transform your body
          </h1>
          <p className="pt-12 text-zinc-400">
            We are dedicated to helping you transform your body and mind through
            the power of fitness.
          </p>
          <div className="flex items-center justify-start pt-10 gap-4  ">
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
    </>
  );
};

export default Hero;
