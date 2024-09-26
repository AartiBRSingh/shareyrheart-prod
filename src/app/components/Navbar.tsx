"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const navLinks = [
  { title: "Home", navURL: "/" },
  { title: "Products", navURL: "#products" },
  { title: "Testimonials", navURL: "#testimonials" },
];

const dropdownLinks = [
  { title: "Student's Wellbeing", navURL: "#" },
  { title: "Employees' Wellbeing", navURL: "#" },
  { title: "Self Understanding", navURL: "#" },
];

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center lg:py-2 lg:px-32 md:p-10 p-4 relative">
      <section>
        <Link href="/">
          <img
            src="/shareyrheart.png"
            alt="ShareYrHeart Logo"
            className="lg:w-[200px] md:w-[150px] w-[100px]"
          />
        </Link>
      </section>
      <div className="hidden md:block">
        <ul className="flex justify-center items-center lg:gap-10 gap-2 lg:text-base font-medium text-xs">
          {navLinks.map((item) => (
            <li
              key={item.title}
              className="hover:text-[#EE1C25] hover:border-b hover:border-b-[#EE1C25]"
            >
              <Link href={item.navURL}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col justify-center items-center w-8 h-8"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          />
          <span
            className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          />
        </button>
      </div>
      <div className="hidden md:block relative z-10">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center focus:outline-none"
        >
          <Menu size={24} />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
            {dropdownLinks.map((item) => (
              <Link
                key={item.title}
                href={item.navURL}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="px-4 py-2">
          {navLinks.map((item) => (
            <li key={item.title} className="py-2">
              <Link href={item.navURL} className="block text-gray-700">
                {item.title}
              </Link>
            </li>
          ))}
          {dropdownLinks.map((item) => (
            <li key={item.title} className="py-2">
              <Link href={item.navURL} className="block text-gray-700">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
