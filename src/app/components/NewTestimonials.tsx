"use client";
import TestimonialCard from "../components/TestimonialCard";
import Button from "./Button";

interface Review {
  name: string;
  review: string;
  title: string;
  image: string | null;
}

const NewTestimonials = () => {
    const reviews: Review[] = [
        {
          image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem",
          name: "Floyd Miles",
          title: "Lorem ipsum dolor",
        },
        {
          image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttior rhoncus dolor purus non enim praesent elem",
          name: "Jane Cooper",
          title: "Lorem ipsum dolor",
        },
        {
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
          name: "Kristin Watson",
          title: "Lorem ipsum dolor",
        },
      ];

  if (reviews.length === 0) {
    return <div>No testimonials available.</div>;
  }

  return (
    <div className=" pt-10">
      <h3 className="text-4xl font-bold text-center mb-12">
        Testimonials
      </h3>
      <div
        className="lg:h-[450px] h-fit"
        
      >
        <div className=" flex lg:justify-center lg:items-center overflow-x-auto snap-x snap-mandatory py-4 px-2 md:px-4 w-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 ">
          <div className="flex gap-4 w-max md:mt-8">
            {reviews.slice(0, 3).map((item, index) => (
              <TestimonialCard
                key={index}
                name={item.name}
                review={item.review}
                title={item.title}
                imageSrc={
                  item.image
                    ? item.image
                    : "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-4 flex justify-center items-center">
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
    </div>
  );
};

export default NewTestimonials;