"use client";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Button from "./Button"; // Import the custom Button component

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%),
            url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')
          `,
          backgroundPosition: "center",
          opacity: 0.75,
        }}
      ></div>
      <div className="absolute inset-0 "></div>
      <div className="relative z-10">
        <div className="relative mb-[70px]">
          <section className="relative lg:h-[500px] h-[350px] w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white lg:p-8 lg:w-[800px] md:p-8 md:w-[650px] w-[80%]">
                <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
                  We care about
                  <div className="text-center">
                    <span className="text-red-600 text-center">
                      <Typewriter
                        options={{
                          strings: [
                            "Employees Well-Being!",
                            "Students Well-Being!",
                            "Self understanding!",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
                </h1>
                <p className="lg:text-xl md:text-lg text-base text-center text-white shadow-text font-semibold mt-10">
                  Our Well-Being Program is designed to enhance mental health
                  and overall well-being through personalized support and
                  actionable strategies.
                </p>
              </div>
            </div>
          </section>
          <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2">
            <Link href={"https://article.shareyrheart.com/"} target="_blank">
              <div className="bg-[#DC2626] w-[400px] rounded-md py-4 lg:shadow-2xl md:shadow-xl shadow-lg">
                <p className="text-center text-white lg:text-4xl md:text-2xl text-xl">
                  Our News Section
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Help Button in the bottom left corner */}
      <div className="absolute bottom-5 left-5">
        <Button
          label="Help"
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

export default Hero;
