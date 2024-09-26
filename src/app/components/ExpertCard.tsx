import React from "react";

interface ExpertCardProps {
  imageURL: string;
  expertise: string;
  name: string;
  desc: string;
}

const ExpertCard: React.FC<ExpertCardProps> = ({
  imageURL,
  expertise,
  name,
  desc,
}) => {
  return (
    <div className="max-w-xs rounded-md shadow-md bg-white">
      <img
        src={imageURL}
        alt={name}
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2 px-2">
        <span className="block text-sm font-medium tracking-widest uppercase text-[#DC2626]">
          {expertise}
        </span>
        <h2 className="text-xl font-semibold tracking-wide text-black">
          {name}
        </h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default ExpertCard;
