import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { LuMapPin } from "react-icons/lu";

interface ProductCardProps {
  productIMG: string;
  desc: string;
  title: string;
  userType:string
}

const ProductCard: React.FC<ProductCardProps> = ({
  productIMG,
  desc,
  title,
  userType
}) => {
  return (
    <div className="bg-white flex flex-wrap-reverse justify-center items-center rounded-xl mb-10 max-lg:p-4 lg:w-fit lg:mx-auto lg:px-10 lg:gap-20 md:gap-10 shadow-xl">
      <div className="lg:w-[500px] md:w-[300px] max-md:text-center">
        <h2 className="lg:text-3xl text-2xl font-bold text-wrap lg:mb-4">
          {title}
        </h2>
        <p className="font-medium lg:text-base md:text-sm text-xs text-gray-600 lg:mt-4 lg:mb-6 my-2">
          {desc}
        </p>
        <Link href={`/questionaires?userType=${userType}`}>
          <Button
            label="Attempt Questionaires"
            bgColor="inherit"
            textColor="#EE1C25"
            logo={<LuMapPin className="lg:w-5 lg:h-5" />}
            hoverBgColor="#EE1C25"
            hoverTextColor="inherit"
          />
        </Link>
      </div>
      <Image
        src={productIMG}
        alt={title}
        width={350}
        height={350}
        className="lg:w-[350px] lg:h-[350px] md:w-[275px] md:h-[275px] lg:m-4 md:m-2"
      />
    </div>
  );
};

export default ProductCard;
