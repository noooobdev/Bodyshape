import Image from "next/image";
import React from "react";
import hero from "../Assets/Hero.png";

const Hero = () => {
  return (
    <>
      <div className="absolute -z-50   inset-0">
        <Image src={hero} alt="Deadlift" objectFit="cover" width="10000" />
      </div>
      <div>
        <h1 className="text-white">Transfrom your body</h1>
      </div>
    </>
  );
};

export default Hero;
