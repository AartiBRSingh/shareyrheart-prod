"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Typewriter from "typewriter-effect";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full flex justify-between items-center lg:py-20 lg:px-32 md:py-10 p-5 flex-wrap lg:gap-28 md:gap-4 gap-28 bg-red-100">
      <div className="lg:w-[600px] md:w-[400px]">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
          We care about
          <div className="flex">
            <span className="text-red-600">
              <Typewriter
                options={{
                  strings: [
                    "Employees Well-Being",
                    "Students Well-Being",
                    "Self understanding ",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <span className="text-red-600">!</span>
          </div>
        </h1>
        <p className="font-medium lg:text-base md:text-sm text-xs text-gray-600 lg:mt-10 lg:mb-6 my-4">
          Our Well-Being Program is designed to enhance mental health and
          overall well-being through personalized support and actionable
          strategies.
        </p>
        <div className="flex items-center gap-2 lg:mt-10 lg:mb-6 my-4">
          <Link href="#">
            <Button
              label="Call us"
              bgColor={"#EE1C25"}
              textColor={"white"}
              logo={<FaPhone className="lg:w-5 lg:h-5" />}
              hoverBgColor={"inherit"}
              hoverTextColor={"#EE1C25"}
            ></Button>
          </Link>
          <Link href="#">
            <Button
              label="Visit Us"
              bgColor={"inherit"}
              textColor={"#EE1C25"}
              logo={<LuMapPin className="lg:w-5 lg:h-5" />}
              hoverBgColor={"#EE1C25"}
              hoverTextColor={"inherit"}
            ></Button>
          </Link>
        </div>
      </div>
      <div className="animate-bounce animate-infinite animate-duration-[2000ms] animate-ease-in">
        <Image
          src="/stetho.png"
          alt=""
          width={350}
          height={350}
          className="lg:w-[350px] lg:h-[350px] md:w-[275px] md:h-[275px]"
        />
      </div>
    </div>
  );
};

export default Hero;
