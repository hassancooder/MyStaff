import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 700);
    };

    handleResize(); // check on first load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      className="relative h-full lg:min-h-[120vh] w-full lg:overflow-hidden bg-cover bg-bottom-center bg-top flex items-center"
      style={{
        backgroundImage: `url('./${
          isWideScreen
            ? "healthcare-hero-bg.png"
            : "healthcare-hero-mobile-bg.png"
        }')`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900 md:bg-transparent bg-opacity-50 z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 pt-44 pb-24 mt-8 z-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div
            className="flex-1 max-w-2xl text-center md:text-left"
            data-aos="fade-right"
          >
            <div className="max-w-[500px]">
              <img
                src="./desktop-plus-mobile.png"
                className="hidden lg:block w-full h-full object-cover"
                alt=""
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-2 leading-tight text-white">
              A critical tool to support {isWideScreen ? <br /> : " "}
              <span className="font-semibold">frontline governance</span>
            </h2>
            <p className="text-base sm:text-md text-white font-medium mb-4 lg:max-w-[56%]">
              An award-winning AI driven platform redefining the way documents
              are managed and distributed for frontline workers.
            </p>

            <div className="flex md:justify-start justify-center mb-10">
              <Link
                to="/contact"
                className="bg-blue-700 text-white text-medium max-w-[275px] text-[15px] font-medium px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Try MyStaff app - See How It Works
              </Link>
            </div>
            <div className="absolute -bottom-[115px] left-1/2 transform -translate-x-1/2 w-full max-w-[350px] lg:max-w-[600px]">
              <img
                src="./desktop-plus-mobile.png"
                className="lg:hidden w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
