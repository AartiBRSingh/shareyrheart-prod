import React from "react";

interface TestimonialProps {
  name: string;
  imageSrc: string;
  title: string;
  review: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  review,
  imageSrc,
  title,
  rating,
}) => {
  return (
    <div className="lg:w-[500px] md:w-[400px] w-[300px] flex-shrink-0 snap-center bg-white rounded-lg overflow-hidden shadow-lg relative m-2">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            className="w-16 h-16 rounded-full object-cover border-4 border-red-500"
            src={imageSrc}
            alt={name}
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4">{review}</p>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">{name}</p>
          </div>
          {/* <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">
                ★
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;