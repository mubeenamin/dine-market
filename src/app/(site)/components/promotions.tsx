import Image from "next/image";

export default function Promotions() {
  return (
    <main className=" py-16">
      <div className="text-center mb-4">
        <div className="uppercase font-semibold text-xs text-blue-700">
          Promotions
        </div>
        <h2 className="text-3xl font-bold">Our Promotions Events</h2>
      </div>

      <div className="md:flex md:gap-x-10">
        <div className=" basis-1/2">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col text-center pt-4 md:flex md:flex-row bg-[#d6d6d8] md:items-center md:justify-between px-8">
              <div>
                <h3 className="text-3xl uppercase font-bold">Get up to 60%</h3>
                <p>For the Summer Season</p>
              </div>
              <div className="flex justify-center">
              <Image
                src={"/event1.webp"}
                width={260}
                height={200}
                alt="event1"
              />
              </div>
            </div>
            <div className="flex flex-col bg-[#212121]">
              <div className=" text-white text-center py-12 px-8">
                <h3 className="text-4xl font-extrabold uppercase">
                  get 30% off
                </h3>
                <p className="uppercase mt-2">use promo code</p>
                <button className="uppercase tracking-[0.25rem] bg-[#474747] px-10 py-2 rounded-xl border border-[#da8301]">
                  dineweekendsale
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex flex-col gap-y-4 md:flex md:flex-row md:gap-x-4 md:gap-y-0 ">
          <div className="bg-[#efe1c7] pt-8 text-center">
            <p className="capitalize">flex sweatshirt</p>
            <div className="flex justify-center">
              <p className=" line-through">$100.00</p>
              <p className="font-bold">$75.00</p>
            </div>
            <div className="flex justify-center">
              <Image src={"/event2.webp"} width={280} height={340} alt="event2"/>
              </div>
          </div>
          <div className="bg-[#d6d6d8] pt-8 text-center">
            <p className="capitalize">flex push button bomber</p>
            <div className="flex justify-center">
              <p className=" line-through">$225.00</p>
              <p className="font-bold">$190.00</p>
            </div>
            <div className="flex justify-center">
              <Image src={"/event3.webp"} width={280} height={340} alt="event2"/>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}
