import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
import VideoTestimony from "./components/VideoTestimony";
import Experts from "./components/Experts";
import NewTestimonials from "./components/NewTestimonials";
// import Contact from "./components/Contact";

const BackgroundSVG = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full stroke-red-200 [mask-image:radial-gradient(100%_100%_at_right,white,transparent)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
        width="200"
        height="200"
        x="50%"
        y="-1"
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      strokeWidth="0"
      fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
    />
  </svg>
);

export default function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <Hero />
      <div className="relative overflow-hidden">
        <BackgroundSVG />
        <NewTestimonials />
        <Services />
        <Experts />
        <VideoTestimony />
        {/* <Contact /> */}
        <Footer />
      </div>
    </>
  );
}
