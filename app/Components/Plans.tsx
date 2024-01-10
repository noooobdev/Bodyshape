import Image from "next/image";
import { title } from "process";
import React from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { BiCycling } from "react-icons/bi";
import { GiBiceps } from "react-icons/gi";
import { BiDumbbell } from "react-icons/bi";
import { LiaRunningSolid } from "react-icons/lia";

const Plans = () => {
  return (
    <div className="h-[1000px] bg-cover custom-image-plan ">
      <h1 className="text-5xl font-semibold text-white px-16 py-28">
        Fitness Plans & <span className="text-[#FF921B]">Nutritions</span>
      </h1>
      <div className="flex justify-center">
        <div className="text-white grid grid-rows-2  grid-flow-col  px-10">
          {/* {plan.map((e) => ( */}
          <div className="flex flex-col justify-center py-10 px-10 gap-6 border-b-2 border-r-2 border-[#FF921B]">
            <div className="flex justify-center text-7xl">
              <GiWeightLiftingUp />
            </div>
            <h1 className="text-center text-xl font-semibold">Weight Loss</h1>
            <p className="text-center text-xs px-5 font-semibold text-zinc-500">
              Weight loss can have causes that aren't due to underlying disease.
              Examples include dieting, exercise, malnutrition or lack of access
              to food.
            </p>
          </div>
          <div className="flex flex-col justify-center py-10 px-10 gap-6 border-[#FF921B] border-r-2">
            <div className="flex justify-center text-7xl">
              <GiBiceps />
            </div>
            <h1 className="text-center text-xl font-semibold">Body Building</h1>
            <p className="text-center text-xs px-5 font-semibold text-zinc-500">
              Bodybuilding is the use of progressive resistance exercise to
              control and develop one's muscles by muscle hypertrophy for
              aesthetic purposes.
            </p>
          </div>
          <div className="flex flex-col justify-center py-10 px-10 gap-6 border-b-2 border-[#FF921B]">
            <div className="flex justify-center text-7xl">
              <GrYoga />
            </div>
            <h1 className="text-center text-xl font-semibold">Classic Yoga</h1>
            <p className="text-center text-xs px-5 font-semibold text-zinc-500">
              The term "yoga" in the Western world often denotes a modern form
              of Hatha yoga and a posture-based physical fitness, stress-relief.
            </p>
          </div>
          <div className="flex flex-col justify-center py-10 px-10 gap-6  border-[#FF921B]">
            <div className="flex justify-center text-7xl">
              <BiDumbbell />
            </div>
            <h1 className="text-center text-xl font-semibold">Musculation</h1>
            <p className="text-center text-xs px-5 font-semibold text-zinc-500">
              Weight training is a common type of strength training for
              developing the strength, size of skeletal muscles and maintenance
              of strength.
            </p>
          </div>
          <div className="flex flex-col justify-center py-10 px-10 gap-6 border-b-2 border-l-2 border-[#FF921B]">
            <div className="flex justify-center text-7xl">
              <BiCycling />
            </div>
            <h1 className="text-center text-xl font-semibold">Cycling</h1>
            <p className="text-center text-xs px-5 font-semibold text-zinc-500">
              Cycling, also, when on a two-wheeled bicycle, called bicycling or
              biking, is the use of cycles for transport, recreation, exercise
              or sport.
            </p>
          </div>
          <div className="flex flex-col justify-center py-10 px-10 gap-6 border-l-2 border-[#FF921B]">
            <div className="flex justify-center text-7xl">
              <LiaRunningSolid />
            </div>
            <h1 className="text-center text-xl font-semibold">
              Fitness Running
            </h1>
            <p className="text-center text-xs px-5 font-semibold text-zinc-500">
              Running is a method of terrestrial locomotion allowing humans and
              other animals to move rapidly on foot.
            </p>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Plans;
