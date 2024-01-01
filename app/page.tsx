import Image from "next/image";
import Navbar from "./Components/Navbar";
import top from "./Assets/top-mountain.png";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div>
        <Image src={top} alt="Mountain" layout="screen" objectFit="cover" />
      </div>
      <Navbar />
    </div>
  );
}
