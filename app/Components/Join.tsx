import React from "react";

const Join = () => {
  return (
    <div className="px-20 py-5">
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col gap-10 w-1/2">
          <h1 className="text-5xl font-semibold text-white  ">
            Why Join With <span className="text-[#FF921B]">Us?</span>
          </h1>
          <div className="pl-20">
            <div className="bg-gradient-to-b from-[#080808] to-black pb-5">
              <ol className="marker:text-[#ff921b] marker:text-xl list-disc p-10">
                <div className="text-white text-xl font-medium">
                  <li>Best Gym</li>
                  <li>Expert Coach</li>
                  <li>Good Workout Facilities</li>
                  <li>Consulation With Experts</li>
                </div>
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
              alt="running"
              className="w-52 h-52 object-cover"
            />
          </div>
          <div className="pl-20">
            <img
              src="https://cdn.shopify.com/s/files/1/1153/7200/files/The_Mental_Benefits_of_Resistance_Training-squashed.jpg?v=1611328895"
              alt="dumbell-lifting"
              className="w-52 h-52 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
