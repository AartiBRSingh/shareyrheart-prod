"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  productIMG: string;
  title: string;
  desc: string;
}

const Services: React.FC = () => {
  const products: { [key: string]: Product } = {
    employee: {
      productIMG: "/employee.jpg",
      title: "Employees' Well-Being",
      desc: "Foster a healthier and happier workplace. Our platform offers tools and resources to enhance employees' mental and physical well-being, ensuring increased productivity and job satisfaction.",
    },
    student: {
      productIMG: "/student.jpg",
      title: "Students' Well-Being",
      desc: "Support students in their academic and personal journeys. Our well-being solutions provide guidance, stress-relief practices, and mental health resources to help students thrive both inside and outside the classroom.",
    },
    self: {
      productIMG: "/self.jpg",
      title: "Self-Understanding",
      desc: "Embark on a journey of self-discovery and personal growth. Our program helps individuals gain deeper insights into their emotions, strengths, and areas for improvement, leading to a more fulfilling life.",
    },
  };

  type Category = "employee" | "student" | "self";

  const [selectedCategory, setSelectedCategory] =
    useState<Category>("employee");

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">Our Services</h1>
      <div className="flex justify-center space-x-8 mb-12">
        <button
          className={`text-lg font-semibold px-6 py-2 transition-colors duration-300 ${
            selectedCategory === "employee"
              ? "border-b-4 border-[#EE1C25] text-[#EE1C25]"
              : "text-gray-600 hover:text-[#EE1C25]"
          }`}
          onClick={() => handleCategoryChange("employee")}
        >
          Employee
        </button>
        <button
          className={`text-lg font-semibold px-6 py-2 transition-colors duration-300 ${
            selectedCategory === "student"
              ? "border-b-4 border-[#EE1C25] text-[#EE1C25]"
              : "text-gray-600 hover:text-[#EE1C25]"
          }`}
          onClick={() => handleCategoryChange("student")}
        >
          Student
        </button>
        <button
          className={`text-lg font-semibold px-6 py-2 transition-colors duration-300 ${
            selectedCategory === "self"
              ? "border-b-4 border-[#EE1C25] text-[#EE1C25]"
              : "text-gray-600 hover:text-[#EE1C25]"
          }`}
          onClick={() => handleCategoryChange("self")}
        >
          Self
        </button>
      </div>

      <div className="flex justify-center">
        <ProductCard
          productIMG={products[selectedCategory].productIMG}
          title={products[selectedCategory].title}
          desc={products[selectedCategory].desc}
        />
      </div>
    </div>
  );
};

export default Services;
