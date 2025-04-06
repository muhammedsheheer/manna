import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 pt-12 md:px-0 md:pt-16">
      <div className="flex flex-col gap-6 md:gap-0">
        <div className="flex flex-col items-center justify-center gap-6 px-4 md:flex-row md:justify-between md:px-12">
          <h1 className="font-italiana text-4xl font-[400] uppercase text-[#000] md:text-9xl">
            Connect
          </h1>

          <Link
            className="rounded-none bg-transparent font-italiana text-2xl font-[400] uppercase text-[#323232] md:w-[700px] md:text-5xl md:tracking-[5px]"
            href={""}
            target="_blank"
          >
            @manna.food.corner
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-2">
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/1.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/2.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/3.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/4.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </div>
          <div className="w-full md:w-[20%]">
            <Image
              src={"/images/home/follow/5.png"}
              width={281}
              height={74}
              alt="frame"
              className="h-[350px] w-full md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
