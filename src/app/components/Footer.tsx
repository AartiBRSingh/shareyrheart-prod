import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const navItems = ["About", "Contact", "Privacy", "Terms", "FAQs"];
  const socialIcons = [
    { Icon: FaFacebookF, link: "#" },
    { Icon: FaTwitter, link: "#" },
    { Icon: FaInstagram, link: "#" },
    { Icon: FaYoutube, link: "#" },
    { Icon: FaLinkedinIn, link: "#" },
  ];

  return (
    <footer className="bg-red-600 text-white py-10 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm">
          ShareYrHeart © 2021-2023 - Aarti Currative
        </div>
        <div className="flex space-x-4">
          {socialIcons.map(({ Icon, link }, index) => (
            <a
              key={index}
              href={link}
              className="hover:text-gray-200 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
