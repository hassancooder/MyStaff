import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

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
      className={`min-h-screen w-full overflow-hidden bg-cover bg-top flex items-center`}
      style={{
        backgroundImage: "url('./pharma-hero-bg.webp')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div
            className="flex-1 max-w-2xl text-center md:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-2 leading-tight text-white">
              A critical tool to support {isWideScreen ? <br /> : " "}
              <span className="font-semibold">frontline governance</span>
            </h2>
            <p className="text-base sm:text-md text-white font-medium mb-8 lg:max-w-[56%]">
              An award-winning AI driven platform redefining the way documents
              are managed and distributed for frontline workers.
            </p>

            <div className="flex md:justify-start justify-center">
              <Link to="/contact" className="bg-blue-700 text-white text-medium max-w-[275px] text-[15px] font-medium px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
                Try MyStaff app - See How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
