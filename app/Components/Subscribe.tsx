import React from "react";

const Subscribe = () => {
  return (
    <div className="h-full w-full bg-black py-5">
      <h1 className="text-5xl font-semibold text-white px-16 py-16 mb-20 ">
        Subscribe to <span className="text-[#FF921B]">Plans</span>
      </h1>
      <div className="flex justify-evenly relative gap-72">
        <div className="bg-gradient-to-b from-[#1d1d1d] to-black py-10 px-16  flex flex-col gap-5 justify-center items-center">
          <h1 className="text-white font-semibold text-3xl">Fit </h1>
          <p className=" text-zinc-400 text-left">Plan Exp. 16/11/2024</p>
          <p className="text-white">
            ₹1200 /<span className="text-zinc-400">Month</span>
          </p>
          <p className="text-zinc-400">Streaming</p>
          <button className="flex items-center text-white p-2 px-8 border-2 border-[#FF921B] hover:bg-[#ff921b]">
            Select Plan
          </button>
        </div>

        <div className="absolute bottom-10 bg-gradient-to-b from-[#1d1d1d] to-black py-10 px-16  flex flex-col gap-5 justify-center items-center">
          <h1 className="text-white font-semibold text-3xl">Fit </h1>
          <p className=" text-zinc-400 text-left">Plan Exp. 16/11/2024</p>
          <p className="text-white">
            ₹1000 /<span className="text-zinc-400">Month</span>
          </p>
          <p className="text-zinc-400">Streaming</p>
          <button className="flex items-center text-white p-2 px-8 border-2 border-[#FF921B] hover:bg-[#ff921b]">
            Select Plan
          </button>
        </div>

        <div className="bg-gradient-to-b from-[#1d1d1d] to-black py-10 px-16  flex flex-col gap-5 justify-center items-center">
          <h1 className="text-white font-semibold text-3xl">Fit </h1>
          <p className=" text-zinc-400 text-left">Plan Exp. 16/11/2024</p>
          <p className="text-white">
            ₹1500 /<span className="text-zinc-400">Month</span>
          </p>
          <p className="text-zinc-400">Streaming</p>
          <button className="flex items-center text-white p-2 px-8 border-2 border-[#FF921B] hover:bg-[#ff921b]">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
