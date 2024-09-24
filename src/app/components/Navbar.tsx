import Link from "next/link";
import React from "react";
const navLinks = [
  { title: "Home", navURL: "/" },
  { title: "Products", navURL: "#products" },
  { title: "Testimonials", navURL: "#testimonials" },
  { title: "Contact", navURL: "#contact" },
];

const Nav = () => {
  return (
    <nav className="flex justify-between items-center lg:py-2 lg:px-32 md:p-10 p-4">
      <section>
        <Link href="/">
          <img
            src="/shareyrheart.png"
            alt="ShareYrHeart Logo"
            className="lg:w-[200px] md:w-[150px] w-[100px]"
          />
        </Link>
      </section>
      <div>
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
    </nav>
  );
};

export default Nav;
