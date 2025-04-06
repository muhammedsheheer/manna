import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 pb-12 pt-12 md:px-16 md:pb-60 md:pt-32">
      <div className="absolute left-[37%] top-[33%] hidden md:block">
        <Image
          src={"/images/home/reserve/image.png"}
          width={281}
          height={74}
          alt="left"
          className="h-auto w-full md:h-[430px]"
        />
      </div>
      <div className="flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-center">
        <div className="w-full md:w-[65%]">
          <h1 className="font-italiana text-5xl font-[400] uppercase leading-[90%] text-[#000] md:text-[200px]">
            Reserve <br /> TAble
          </h1>
        </div>
        <div className="md:hidden">
          <Image
            src={"/images/home/reserve/image.png"}
            width={281}
            height={74}
            alt="left"
            className="h-auto w-full"
          />
        </div>
        <div className="flex w-full flex-col gap-5 md:w-[35%]">
          <p className="max-w-[400px] font-inter text-sm font-[300] tracking-[0.54px] text-[#000] md:text-base">
            {" "}
            At Manna Food Corner, every meal is a celebration of flavor and
            togetherness. Reserve your table now and let us serve you a
            delicious experience you won’t forget!
          </p>
          <div>
            <Link href={"/table-booking"}>
              <Button
                className={
                  "rounded-none border border-[#000] bg-[#000] px-6 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2px] text-[#fff] hover:bg-[#e2dcdc] hover:text-[#111]"
                }
              >
                reserve
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
