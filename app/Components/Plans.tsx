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
  const plan = [
    {
      title: "Weight Loss",
      desc: "Weight loss can have causes that aren't due to underlying disease. Examples include dieting, exercise, malnutrition or lack of access to food.",
    },
    {
      title: "Body Building",
      desc: "Weight loss can have causes that aren't due to underlying disease. Examples include dieting, exercise, malnutrition or lack of access to food.",
    },
    {
      title: "Classic Yoga",
      desc: "Weight loss can have causes that aren't due to underlying disease. Examples include dieting, exercise, malnutrition or lack of access to food.",
    },
    {
      title: "Masculation",
      desc: "Weight loss can have causes that aren't due to underlying disease. Examples include dieting, exercise, malnutrition or lack of access to food.",
    },
    {
      title: "Cycling",
      desc: "Weight loss can have causes that aren't due to underlying disease. Examples include dieting, exercise, malnutrition or lack of access to food.",
    },
    {
      title: "Fitness Running",
      desc: "Weight loss can have causes that aren't due to underlying disease. Examples include dieting, exercise, malnutrition or lack of access to food.",
    },
  ];
  return (
    <div className="h-[1000px] bg-cover custom-image-plan ">
      <h1 className="text-5xl font-semibold text-white px-16 py-16">
        Fitness Plans & <span className="text-[#FF921B]">Nutritions</span>
      </h1>
      <div className="flex justify-center">
        <div className="text-white grid grid-rows-2  grid-flow-col  px-10">
          {/* {plan.map((e) => ( */}
          <div className="flex flex-col justify-center py-10 gap-10 border-b-2 border-r-2 border-white">
            <div className="flex justify-center text-7xl">
              <GiWeightLiftingUp />
            </div>
            <h1 className="text-center text-xl font-semibold">Weight Loss</h1>
            <p className="text-center ">
              Weight loss can have causes that aren't due to underlying disease.
              Examples include dieting, exercise, malnutrition or lack of access
              to food.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-10 border-white border-r-2">
            <div className="flex justify-center text-7xl">
              <GiBiceps />
            </div>
            <h1 className="text-center ">Body Building</h1>
            <p className="text-center ">
              Weight loss can have causes that aren't due to underlying disease.
              Examples include dieting, exercise, malnutrition or lack of access
              to food.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-10 border-b-2 border-white">
            <div className="flex justify-center text-7xl">
              <GrYoga />
            </div>
            <h1 className="text-center ">Classic Yoga</h1>
            <p className="text-center ">
              Weight loss can have causes that aren't due to underlying disease.
              Examples include dieting, exercise, malnutrition or lack of access
              to food.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-10  border-white">
            <div className="flex justify-center text-7xl">
              <BiDumbbell />
            </div>
            <h1 className="text-center ">Musculation</h1>
            <p className="text-center ">
              Weight loss can have causes that aren't due to underlying disease.
              Examples include dieting, exercise, malnutrition or lack of access
              to food.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-10 border-b-2 border-l-2 border-white">
            <div className="flex justify-center text-7xl">
              <BiCycling />
            </div>
            <h1 className="text-center ">Cycling</h1>
            <p className="text-center ">
              Weight loss can have causes that aren't due to underlying disease.
              Examples include dieting, exercise, malnutrition or lack of access
              to food.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-10 border-l-2 border-white">
            <div className="flex justify-center text-7xl">
              <LiaRunningSolid />
            </div>
            <h1 className="text-center ">Fitness Running</h1>
            <p className="text-center ">
              Weight loss can have causes that aren't due to underlying disease.
              Examples include dieting, exercise, malnutrition or lack of access
              to food.
            </p>
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Plans;
