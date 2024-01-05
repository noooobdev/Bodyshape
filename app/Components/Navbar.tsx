import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-20 text-white bg-black">
      <h1>MNTN</h1>
      <div className="flex gap-10 text-lg">
        <button className="border-b-2 border-b-[#f66844]">Home</button>
        <button>Services</button>
        <button>About</button>
        <button>Contact</button>
        <button>Join Us</button>
      </div>
    </div>
  );
};

export default Navbar;
