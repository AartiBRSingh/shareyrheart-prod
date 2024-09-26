"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";

interface Story {
  logo: string;
  companyName: string;
  content: string;
  author: string;
  role: string;
}

interface CustomerStoriesProps {
  stories: Story[];
}

const CustomerStories: React.FC<CustomerStoriesProps> = ({ stories }) => {
  const [rotatedStories, setRotatedStories] = useState(stories);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotatedStories((prevStories) => {
        const newStories = [...prevStories];
        const lastStory = newStories.pop();
        if (lastStory) {
          newStories.unshift(lastStory);
        }
        return newStories;
      });
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

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

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        observer.unobserve(testimonialRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      id="testimonials"
      ref={testimonialRef}
      className={`bg-white p-8 max-w-6xl mx-auto mt-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-start mb-8">
        <span className="text-7xl text-pink-300 font-serif leading-none">
          &quot;
        </span>
        <h2 className="text-4xl font-bold ml-2 leading-tight">
          Real Stories from
          <br />
          Real Customers
        </h2>
      </div>
      <p className="text-gray-600 mb-8">Get inspired by these stories.</p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left larger story */}
        <div className="md:w-1/2 bg-red-100 p-8 rounded-xl">
          <img
            src={rotatedStories[0].logo}
            alt={rotatedStories[0].companyName}
            className="h-12 w-12 rounded-full mb-6"
          />
          <p className="text-gray-800 mb-6 text-lg">
            {rotatedStories[0].content}
          </p>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span className="font-semibold">{rotatedStories[0].author}</span>
          </div>
          <p className="text-gray-600 text-sm ml-4">{rotatedStories[0].role}</p>
        </div>

        {/* Right stacked stories */}
        <div className="md:w-1/2 flex flex-col justify-between">
          {rotatedStories.slice(1).map((story, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md mb-6 last:mb-0"
            >
              <img
                src={story.logo}
                alt={story.companyName}
                className="h-8 w-8 rounded-full mb-4"
              />
              <p className="text-gray-800 mb-4">{story.content}</p>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="font-semibold">{story.author}</span>
              </div>
              <p className="text-gray-600 text-sm ml-4">{story.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
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
      </div>
    </div>
  );
};

const Testimonials = () => {
  const stories: Story[] = [
    {
      logo: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyName: "CLI",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem",
      author: "Floyd Miles",
      role: "Vice President, CLI",
    },
    {
      logo: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyName: "JPNL",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttior rhoncus dolor purus non enim praesent elem",
      author: "Jane Cooper",
      role: "CEO, JPNL",
    },
    {
      logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyName: "LemonWares",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
      author: "Kristin Watson",
      role: "Co-Founder, LemonWares",
    },
  ];

  return (
    <div>
      <CustomerStories stories={stories} />
    </div>
  );
};

export default Testimonials;
