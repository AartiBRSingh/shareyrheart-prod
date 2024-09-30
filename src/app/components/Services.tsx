"use client";
import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

interface Product {
  productIMG: string;
  title: string;
  desc: string;
}

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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

  const [selectedCategory, setSelectedCategory] = useState<Category>("employee");

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      id="products"
      ref={servicesRef}
      className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Services
      </h1>

      {/* Uncomment and use this if you want category selection */}
      {/* <div className="flex justify-center space-x-8 mb-12">
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
      </div> */}

      <div className="">
        {Object.keys(products).map((key) => {
          const product = products[key];
          return (
            <ProductCard
              key={key}
              productIMG={product.productIMG}
              title={product.title}
              desc={product.desc}
              userType={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
