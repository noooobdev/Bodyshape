import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-8 px-3">
      <h1>MNTN</h1>
      <div className="flex gap-10">
        <button>Equipment</button>
        <button>About us</button>
        <button>Blog</button>
      </div>
      <button>Account</button>
    </div>
  );
};

export default Navbar;
