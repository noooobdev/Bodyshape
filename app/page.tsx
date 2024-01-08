import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Plans from "./Components/Plans";

export default function Home() {
  return (
    <div className="h-full w-full bg-transparent bg-black">
      <Navbar />
      <Hero />
      <Plans />
    </div>
  );
}
