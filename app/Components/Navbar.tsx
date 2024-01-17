"use client";
import React, { useState } from "react";
import LeftLogo from "../Assets/Logo/LeftLogo";
import RightLogo from "../Assets/Logo/RightLogo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [showBurger, setShowBurger] = useState(false);
  const nav = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Services" },
    { id: 4, name: "Contact" },
  ];

  const handleClick = (name: string) => {
    setActive(name);
  };

  const handleBurgerMenu = () => {
    setShowBurger(true);
  };
  return (
    <div className="flex items-center justify-between p-1 md:p-4 lg:px-10 lg:py-10 text-white bg-black">
      <div className="text-transparent  bg-clip-text bg-gradient-to-r from-orange-400 to-orange-900">
        <div className="flex items-center gap-2">
          <LeftLogo />
          <div className=" text-center text-xs md:text-sm  font-semibold ">
            Bodyshape
          </div>
          <RightLogo />
        </div>
        <div className=" text-center  text-xs md:text-sm font-semibold">
          Unleash your inner athlete
        </div>
      </div>
      <button
        className="absolute right-4 top-0"
        onClick={() => handleBurgerMenu()}
      >
        <RxHamburgerMenu className="text-3xl" />
      </button>

      {showBurger && (
        <div className="absolute h-full bg-[#808080] right-0 top-0 w-1/3 flex flex-col duration-1000 ease-in">
          <button
            onClick={() => setShowBurger(false)}
            className="flex justify-end"
          >
            <IoClose className=" text-3xl " />
          </button>
          <div className=" flex flex-col items-center ">
            {nav?.map((e) => (
              <button
                key={e.id}
                onClick={() => handleClick(e.name)}
                className="px-1  text-[#ff921b] text-lg py-5"
              >
                {e.name}
              </button>
            ))}

            <button className="bg-gradient-to-r from-orange-600 to-amber-500 p-2 w-1/2">
              Join Us
            </button>
          </div>
        </div>
      )}
      <div className="sm:flex gap-2 text-sm md:gap-8 md:text-lg hidden ">
        {nav?.map((e) => (
          <button
            key={e.id}
            onClick={() => handleClick(e.name)}
            className={`px-1 ${
              active === e.name ? " border-b-2 border-[#ff921b]" : ""
            }`}
          >
            {e.name}
          </button>
        ))}

        <button className="bg-gradient-to-r from-orange-600 to-amber-500 p-2">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
