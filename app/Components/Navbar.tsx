"use client";
import React, { useState } from "react";
import LeftLogo from "../Assets/Logo/LeftLogo";
import RightLogo from "../Assets/Logo/RightLogo";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const nav = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Services" },
    { id: 4, name: "Contact" },
  ];

  const handleClick = (name: string) => {
    setActive(name);
  };
  return (
    <div className="flex items-center justify-between py-4 px-20 text-white bg-black">
      <div className="text-transparent  bg-clip-text bg-gradient-to-r from-orange-400 to-orange-900">
        <div className="flex items-center gap-2">
          <LeftLogo />
          <div className=" text-center text-xl font-semibold ">Bodyshape</div>
          <RightLogo />
        </div>
        <div className=" text-center  text-xs font-semibold">
          Unleash your inner athlete
        </div>
      </div>
      <div className="flex gap-10 text-lg">
        {nav?.map((e) => (
          <button
            key={e.id}
            onClick={() => handleClick(e.name)}
            className={`px-2 ${
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
