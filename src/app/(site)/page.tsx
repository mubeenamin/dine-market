import Image from "next/image";
import HeroSection from "./components/heroSection";
import Promotions from "./components/promotions";
import BottumSection from "./components/bottumSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Promotions />
      <BottumSection/>
      
    </div>
  );
}
