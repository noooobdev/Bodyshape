import React from "react";

const Join = () => {
  return (
    <div className="px-20 py-5">
      <div className="flex justify-between gap-60 items-start w-full">
        <div className="flex flex-col gap-10 w-1/2">
          <h1 className="text-5xl font-semibold text-white  ">
            Why Join With <span className="text-[#FF921B]">Us?</span>
          </h1>
          <div className="pl-20">
            <div className="bg-gradient-to-b from-[#1d1d1d] to-black ">
              <ol className="text-[#ff921b]  p-10">
                <li className="text-white">Best Gym</li>
                <li className="text-white">Expert Coach</li>
                <li className="text-white">Good Workout Facilities</li>
                <li className="">Consulation With Experts</li>
              </ol>
            </div>
            <button className="bg-gradient-to-r from-orange-600 to-amber-500 p-2 px-4 text-white">
              See More Benefits
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-evenly">
          <div>
            <img
              src="https://th.bing.com/th/id/OIP.tP1U9qP_z1OwpsJdlaqnEgHaHa?rs=1&pid=ImgDetMain"
              alt="lol"
              className="w-52 h-52"
            />
          </div>
          <div className="pl-20">
            <img
              src="https://th.bing.com/th/id/OIP.tP1U9qP_z1OwpsJdlaqnEgHaHa?rs=1&pid=ImgDetMain"
              alt="lol"
              className="w-52 h-52 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
