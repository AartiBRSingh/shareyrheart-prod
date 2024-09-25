import React from "react";

import Button from "../components/Button";
import { FaPhone } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <div id="contact">
      <h2 className="mt-20 lg:text-3xl md:text-2xl text-xl text-center font-bold">
        Contact us
      </h2>
      <div className="bg-red-100 flex flex-wrap justify-center items-center rounded-xl m-10 md:mt-6 mt-4 max-lg:p-4 lg:w-fit lg:mx-auto lg:pr-10 lg:gap-20 md:gap-10 shadow-xl">
        <div className="">
          <img
            src="/contact.jpg"
            alt=""
            className="lg:w-[600px] lg:h-[400px] md:w-[350px] md:h-[275px] w-[250px] h-[250px] object-cover rounded-l-xl"
          />
        </div>
        <div className="lg:w-[300px] md:w-[200px] mb-2">
          <h3 className="lg:text-3xl text-2xl font-bold text-wrap my-4">
            Visit us today!
          </h3>
          <p className="font-medium lg:text-base md:text-sm text-xs text-gray-600 lg:mt-4 lg:mb-6 my-4">
            We are available on WhatsApp or just call us at +91-1234567891.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="#">
              <Button
                label="Call us"
                bgColor="#EE1C25"
                textColor="white"
                logo={<FaPhone className="lg:w-5 lg:h-5" />}
                hoverBgColor="inherit"
                hoverTextColor="#EE1C25"
              />
            </Link>
            <Link href="#">
              <Button
                label="Visit Us"
                bgColor="inherit"
                textColor="#EE1C25"
                logo={<LuMapPin className="lg:w-5 lg:h-5" />}
                hoverBgColor="#EE1C25"
                hoverTextColor="inherit"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
