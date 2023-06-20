import Image from "next/image";
import { Button } from "./ui/button";

export default function BottumSection() {
  return (
    <main>
      <div className="flex justify-center md:flex md:justify-end pb-8">
        <div className="md:max-w-[45%]">
          <h1 className="text-4xl  md:text-5xl font-bold">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2">
        <div className="grid grid-cols-2  relative space-y-4">
          <div className="absolute text-6xl sm:text-8xl font-bold text-[#212121]/20">
            Different from others
          </div>
          <div className="w-[70%] z-[2]">
            <h3 className="text-xl font-bold capitalize">
              using good quality materials
            </h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="w-[70%] z-[2]">
            <h3 className="text-xl font-bold capitalize">
              using good quality materials
            </h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="w-[70%] z-[2]">
            <h3 className="text-xl font-bold capitalize">
              using good quality materials
            </h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div className="w-[70%] z-[2]">
            <h3 className="text-xl font-bold capitalize">
              using good quality materials
            </h3>
            <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="md:flex md:gap-x-6 space-y-5 mt-4 md:mt-0">
          <div className="basis-1/2 flex justify-center">
            <Image
              src={"/feature.webp"}
              width={300}
              height={350}
              alt="feature"
            />
          </div>
          <div className="basis-1/2 flex items-center">
            <div className=" space-y-8">
              <p className="text-justify">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <Button className="rounded-none">See All Products</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
