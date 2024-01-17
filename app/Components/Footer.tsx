import React from "react";
import LeftLogo from "../Assets/Logo/LeftLogo";
import RightLogo from "../Assets/Logo/RightLogo";
const Footer = () => {
  return (
    <div className=" bg-[#080808]  pt-10 ">
      <div className="flex justify-between lg:justify-evenly px-2 md:px-10 pb-2 md:pb-5">
        <div className="text-transparent  bg-clip-text bg-gradient-to-r from-orange-400 to-orange-900 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <LeftLogo />
            <div className=" text-center text-[12px] sm:text-sm md:text-lg font-semibold ">
              Bodyshape
            </div>
            <RightLogo />
          </div>
          <div className=" text-[12px] sm:text-sm md:text-xl text-center font-semibold">
            Unleash your inner athlete
          </div>
          <h1 className="text-white text-[12px] sm:text-sm md:text-base w-2/3 text-center py-3">
            Support Your Need To Much Fitness Goal
          </h1>
        </div>

        <div className="text-white flex flex-col items-start gap-1 md:gap-6">
          <h1 className="text-[10px]  md:text-base lg:text-xl">Company</h1>
          <div className="text-zinc-500 text-sm flex flex-col items-start gap-2">
            <button className="hover:text-[#ff921b] text-[10px] md:text-base ">
              About
            </button>
            <button className="hover:text-[#ff921b] text-[10px]  md:text-base ">
              Carrers
            </button>
            <button className="hover:text-[#ff921b] text-[10px]  md:text-base ">
              Blogs
            </button>
          </div>
        </div>
        <div className="text-white flex flex-col gap-1 md:gap-6">
          <h1 className="text-[10px]  md:text-base lg:text-xl">Contact</h1>
          <div className="text-zinc-500 text-sm flex flex-col items-start gap-2">
            <button className="hover:text-[#ff921b] text-[10px]  md:text-base ">
              Help/FAQ
            </button>
            <button className="hover:text-[#ff921b] text-[10px]  md:text-base ">
              Press
            </button>
          </div>
        </div>
        <div className="text-white flex flex-col gap-1 md:gap-6">
          <h1 className="text-[10px]  md:text-base lg:text-xl">More</h1>
          <div className="text-zinc-500 text-sm flex flex-col items-start gap-2">
            <button className="hover:text-[#ff921b] text-[10px]  md:text-base ">
              Program
            </button>
            <button className="hover:text-[#ff921b] text-[10px]  md:text-base ">
              Plan
            </button>
            <button className="hover:text-[#ff921b] text-[10px]  md:text-base">
              Method
            </button>
          </div>
        </div>
        <div className="text-white flex flex-col gap-1 md:gap-6">
          <h1 className="text-[10px]  md:text-base lg:text-xl">Popular</h1>
          <div className="text-white text-[8px] md:text-sm  grid grid-cols-3 gap-2">
            <button className="bg-[#ffffff]/50 p-1 hover:bg-gradient-to-r from-orange-600 to-amber-500">
              Abs
            </button>
            <button className="bg-[#ffffff]/50 p-1 hover:bg-gradient-to-r from-orange-600 to-amber-500">
              Workout
            </button>
            <button className="bg-[#ffffff]/50 p-1 hover:bg-gradient-to-r from-orange-600 to-amber-500">
              Nutrition
            </button>
            <button className="bg-[#ffffff]/50 p-1 hover:bg-gradient-to-r from-orange-600 to-amber-500">
              Boxing
            </button>
            <button className="bg-[#ffffff]/50 p-1 hover:bg-gradient-to-r from-orange-600 to-amber-500">
              Gym
            </button>
            <button className="bg-[#ffffff]/50 p-1 hover:bg-gradient-to-r from-orange-600 to-amber-500">
              Facilities
            </button>
            <button className="bg-[#ffffff]/50 p-1 hover:bg-gradient-to-r from-orange-600 to-amber-500">
              Plans
            </button>
            <button className="bg-[#ffffff]/50 p-1 hover:bg-gradient-to-r from-orange-600 to-amber-500">
              Trainers
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#FF921B] mt-5 p-5 flex justify-center text-white md:text-xl  text-sm">
        <h1>&copy; 2024 All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
