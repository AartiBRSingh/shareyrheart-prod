"use client";
import React from "react";
import ExpertCard from "./ExpertCard";
import Button from "./Button";
import Link from "next/link";

const Experts = () => {
  const experts = [
    {
      imageURL: "https://randomuser.me/api/portraits/men/32.jpg",
      expertise: "Web Development",
      name: "John Doe",
      desc: "Expert in building modern web applications.",
    },
    {
      imageURL: "https://randomuser.me/api/portraits/women/32.jpg",
      expertise: "Graphic Design",
      name: "Jane Smith",
      desc: "Specializes in creating stunning visual content.",
    },
    {
      imageURL: "https://randomuser.me/api/portraits/men/45.jpg",
      expertise: "Data Science",
      name: "Robert Brown",
      desc: "Data scientist with a passion for machine learning.",
    },
  ];

  return (
    <div className="mt-20">
      {" "}
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Experts{" "}
      </h1>{" "}
      <div className="flex flex-wrap justify-center gap-4">
        {experts.map((expert, index) => (
          <ExpertCard
            key={index}
            imageURL={expert.imageURL}
            expertise={expert.expertise}
            name={expert.name}
            desc={expert.desc}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href={"https://shareyrheart.com/mental-health-experts-search.php"}
        >
          <Button
            label="View All"
            bgColor="#DC2626"
            textColor="#ffffff"
            hoverBgColor="#ff4040"
            hoverTextColor="#fff"
            logo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 8a1 1 0 112-0 1 1 0 01-2 0zm.25 3a.75.75 0 011.5 0v2a.75.75 0 01-1.5 0v-2z" />
              </svg>
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default Experts;
