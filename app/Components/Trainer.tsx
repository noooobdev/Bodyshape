import React from "react";

const Trainer = () => {
  return (
    <div className="h-full w-full bg-black py-5">
      <h1 className="text-5xl font-semibold text-white px-16 py-16 ">
        Join Out <span className="text-[#FF921B]">Trainer</span>
      </h1>
      <div className=" h-full w-full flex px-32">
        <div className="h-96 w-80 shadow-lg group container bg-white cursor-pointer  max-w-sm flex justify-center items-center  mx-auto content-div">
          <div className="w-full image-cover rounded-t-md"></div>

          <div className="absolute opacity-0 group-hover:opacity-100">
            <span className="text-3xl font-bold text-white tracking-wider leading-relaxed ">
              Amanda Rodriguez
            </span>
            <p className="text-white text-center">Personal Trainer</p>
          </div>
        </div>

        <div className="h-96 w-80 shadow-lg group container bg-white cursor-pointer  max-w-sm flex justify-center items-center  mx-auto content-div1">
          <div className="w-full image-cover rounded-t-md"></div>

          <div className="absolute opacity-0 group-hover:opacity-100">
            <span className="text-3xl font-bold text-white tracking-wider leading-relaxed ">
              Jack Jones
            </span>
            <p className="text-white text-center">Personal Trainer</p>
          </div>
        </div>

        <div className="h-96 w-80 shadow-lg group container bg-white cursor-pointer  max-w-sm flex justify-center items-center  mx-auto content-div2">
          <div className="w-full image-cover rounded-t-md"></div>

          <div className="absolute opacity-0 group-hover:opacity-100">
            <span className="text-3xl font-bold text-white tracking-wider leading-relaxed ">
              Emily Blunt
            </span>
            <p className="text-white text-center">Personal Trainer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
