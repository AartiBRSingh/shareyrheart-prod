import React from "react";

interface ButtonProps {
  label: string;
  bgColor: string;
  textColor: string;
  logo?: React.ReactNode;
  hoverBgColor: string;
  hoverTextColor: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  bgColor,
  textColor,
  logo,
  hoverBgColor,
  hoverTextColor,
}) => {
  return (
    <button
      style={
        {
          backgroundColor: bgColor,
          color: textColor,
          ":hover": {
            backgroundColor: hoverBgColor,
            color: hoverTextColor,
          },
        } as React.CSSProperties
      }
      className="lg:h-12 h-10 w-fit lg:px-6 md:px-4 px-2 lg:rounded-lg rounded-md text-white lg:text-base text-sm font-semibold border border-red-600 flex justify-center items-center md:gap-2 gap-1"
    >
      {logo}
      {label}
    </button>
  );
};

export default Button;
