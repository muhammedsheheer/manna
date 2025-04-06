import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#101010] pb-12 pt-12 md:pb-0 md:pt-60">
      <div className="absolute left-20 right-20 top-8 hidden md:block">
        <h1 className="overflow-hidden whitespace-nowrap px-2 text-center font-italiana text-6xl font-[400] uppercase leading-[80%] text-[#eee] md:mt-8 md:text-[25vw]">
          MANNA
        </h1>
      </div>
      <div className="absolute left-0 top-[34%] hidden md:block">
        <h1 className="overflow-hidden whitespace-nowrap px-2 text-center font-italiana text-6xl font-[400] uppercase leading-[80%] text-[#eee] md:mt-8 md:text-[10vw]">
          CORNER
        </h1>
      </div>
      <div className="absolute right-0 top-[34%] z-50 hidden md:block">
        <h1 className="overflow-hidden whitespace-nowrap px-2 text-center font-italiana text-6xl font-[400] uppercase leading-[80%] text-[#eee] md:mt-8 md:text-[20vw]">
          Hou
        </h1>
      </div>
      <h1 className="px-2 text-center font-italiana text-6xl font-[400] uppercase leading-[80%] text-[#eee] md:mt-8 md:hidden md:text-9xl">
        MANNA <br /> <span className="text-4xl md:text-8xl">CORNER HOUSE</span>
      </h1>
      <div className="relative z-40 flex flex-col gap-8 md:flex-row">
        <div className="flex w-full flex-col gap-4 md:mb-24 md:mr-8 md:w-[30%] md:items-end md:justify-end">
          <div className="flex flex-col gap-3 pl-8">
            <p className="w-full max-w-[330px] font-inter text-sm font-[300] tracking-[1px] text-[#fff] md:text-right">
              At Manna, it’s not just about food—it’s about bringing people
              together. Whether you're dining in with friends, grabbing a
              takeaway, or ordering for a family gathering, we’re here to make
              your experience feel like home. So come hungry, leave happy, and
              taste the love in every bite.
            </p>
            <div className="flex md:items-end md:justify-end">
              <Link href={"/table-booking"}>
                <Button
                  className={
                    "rounded-none border border-[#fff] bg-transparent px-7 py-5 font-poppins text-xs font-[500] capitalize tracking-[0.96px] text-[#fff] hover:bg-[#222] hover:text-[#fff]"
                  }
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-[40%] md:px-0">
          <Image
            src={"/images/home/about/image1.png"}
            width={281}
            height={74}
            alt="left"
            className="h-auto w-full md:h-[800px]"
          />
        </div>
        <div className="flex w-full flex-col gap-4 md:mb-24 md:w-[30%] md:justify-end">
          <div className="flex flex-col gap-4 pl-8 md:gap-8">
            <p className="w-full max-w-[330px] font-inter text-sm font-[300] tracking-[1px] text-[#fff]">
              Welcome to Manna Food Corner, where the rich, aromatic flavors of
              Kerala meet the heart of Northampton. Since our humble beginnings,
              we've built a loyal community of food lovers who return time and
              time again for the authenticity and warmth that define our
              kitchen.
            </p>
            <p className="w-full max-w-[330px] font-inter text-sm font-[300] tracking-[1px] text-[#fff]">
              Our dishes are a celebration of tradition—spiced to perfection,
              slow-cooked, and served with love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
