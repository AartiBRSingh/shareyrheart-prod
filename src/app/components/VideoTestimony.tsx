"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Client A",
    testimony:
      "This service transformed our workflow completely. The team is reliable and the product quality is amazing.",
    videoListId: "PLnaPjVv1wEfnmipSVcdke9HAI_af-4hsH",
  },
  {
    name: "Client B",
    testimony:
      "I can't believe how seamless the experience was. Excellent customer service and great attention to detail!",
    videoListId: "PLnaPjVv1wEfnmipSVcdke9HAI_af-4hsH",
  },
  {
    name: "Client C",
    testimony:
      "From start to finish, the process was smooth. The product exceeded my expectations and delivered real value.",
    videoListId: "PLnaPjVv1wEfnmipSVcdke9HAI_af-4hsH",
  },
];

const VideoTestimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl font-bold text-center mb-12">
          Video Testimonials
        </h1>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                <span className="text-3xl text-pink-300 font-serif">
                  &quot;
                </span>
                {testimonials[currentIndex].testimony}
                <span className="text-3xl text-pink-300 font-serif">
                  &quot;
                </span>
              </p>
            </blockquote>
            <figcaption className="mt-4">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900 text-xl">
                  {testimonials[currentIndex].name}
                </div>
              </div>
            </figcaption>
          </figure>
          <div className="mt-10 aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/videoseries?list=${testimonials[currentIndex].videoListId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === currentIndex ? "bg-red-500" : "bg-red-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimony;
