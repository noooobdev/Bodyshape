import React from "react";
import LeftLogo from "../Assets/Logo/LeftLogo";
import RightLogo from "../Assets/Logo/RightLogo";
const Footer = () => {
  return (
    <div className=" bg-[#080808]  py-10">
      <div className="flex justify-between px-32">
        <div className="text-transparent  bg-clip-text bg-gradient-to-r from-orange-400 to-orange-900 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <LeftLogo />
            <div className=" text-center text-xl font-semibold ">Bodyshape</div>
            <RightLogo />
          </div>
          <div className=" text-xs font-semibold">
            Unleash your inner athlete
          </div>
          <h1 className="text-white text-xl">
            Support Your Need To Much Fitness Goal
          </h1>
        </div>

        <div className="text-white">
          <h1>Company</h1>
          <h1>Company</h1>
          <h1>Company</h1>
          <h1>Company</h1>
        </div>
        <div className="text-white">
          <h1>Contact</h1>
          <h1>Company</h1>
          <h1>Company</h1>
          <h1>Company</h1>
        </div>
        <div className="text-white">
          <h1>More</h1>
          <h1>Company</h1>
          <h1>Company</h1>
          <h1>Company</h1>
        </div>
        <div className="text-white">
          <h1>Popular</h1>
          <h1>Company</h1>
          <h1>Company</h1>
          <h1>Company</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
