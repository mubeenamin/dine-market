import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <main className="md:flex mt-6 gap-x-16">
      <div className="basis-1/2 pt-10">
        <div className="w-24 h-10 bg-cyan-200/50 p-2  rounded-lg text-center text-blue-600 font-bold mb-8">
          Sale 70%
        </div>
        <div className=" text-6xl font-extrabold">An Industrial Take on Streetwear</div>
        <div className="md:w-64 my-8">
        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </div>
        <div>
          <Button className="text-xl w-40 h-20 rounded-none">
            <ShoppingCart className="w-12 pr-4"/> Start Shopping
          </Button>
        </div>
        <div className="flex flex-wrap gap-x-6 mt-8">
          <Image src={"/Featured1.webp"} width={120} height={100} alt="featured1"/>
          <Image src={"/Featured2.webp"} width={120} height={100} alt="featured1"/>
          <Image src={"/Featured3.webp"} width={120} height={100} alt="featured1"/>
          <Image src={"/Featured4.webp"} width={120} height={100} alt="featured1"/>
        </div>
      </div>

      <div className="basis-1/2 hidden md:block">
        <div className="bg-[#ffece3] rounded-full mt-8 ">
        <Image src={"/header.webp"} width={1080} height={1260} alt="header" className="-mt-10"/>
        </div>  
      </div>
    </main>
  );
}
