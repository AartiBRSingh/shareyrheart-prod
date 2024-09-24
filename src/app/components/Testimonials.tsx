import React from "react";

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
  return (
    <div id="testimonials" className="bg-white p-8 max-w-6xl mx-auto">
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
            src={stories[0].logo}
            alt={stories[0].companyName}
            className="h-12 w-12 rounded-full mb-6"
          />
          <p className="text-gray-800 mb-6 text-lg">{stories[0].content}</p>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span className="font-semibold">{stories[0].author}</span>
          </div>
          <p className="text-gray-600 text-sm ml-4">{stories[0].role}</p>
        </div>

        {/* Right stacked stories */}
        <div className="md:w-1/2 flex flex-col justify-between">
          {stories.slice(1).map((story, index) => (
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
