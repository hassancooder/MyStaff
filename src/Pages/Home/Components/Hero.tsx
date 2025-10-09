import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WatchNow from "./WatchNow";

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
    <section className="relative h-full lg:min-h-screen w-full overflow-hidden flex items-center">
      {/* ===== VIDEO BACKGROUND ===== */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={
          isWideScreen ? "./home-desktop-video.webm" : "./home-mobile-video.mp4"
        }
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ===== DARK OVERLAY ===== */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900 bg-opacity-50 z-10"></div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-20 py-16 z-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* ===== LEFT COLUMN (Original Text) ===== */}
          <div
            className="flex-1 max-w-2xl text-center md:text-left 2xl:-mt-64">
            <h2 className="text-xl mt-4 lg:mt-0 sm:text-3xl md:text-4xl font-normal mb-2 leading-tight text-white px-4 md:px-0">
              A critical tool to support {isWideScreen ? <br /> : " "}
              <span className="font-semibold">frontline governance</span>
            </h2>

            <p className="text-base leading-tight sm:text-md text-white font-medium md:max-w-[56%] mx-auto md:mx-0">
              An award-winning AI driven platform redefining the way documents
              are managed and distributed for frontline workers.
            </p>

            <div className="flex md:justify-start justify-center mt-6 mb-2">
              <Link
                to="/contact"
                className="bg-blue-700 text-white text-sm md:text-medium max-w-[275px] text-[15px] font-medium px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Try MyStaff app - See How It Works
              </Link>
            </div>
          </div>

          {/* ===== WatchNow COLUMN (Newly Added) ===== */}
          <div
            className="absolute -top-[35%] 2xl:-top-[190%] 2xl:right-[2%] right-[1%] max-w-[400px] hidden lg:block"
            // data-aos="fade-left"
          >
            <WatchNow />
          </div>
        </div>

        {/* ===== IMAGE IN BOTTOM RIGHT ===== */}
        <div className="absolute -bottom-20 lg:-bottom-40 right-0 p-6 sm:p-10 hidden lg:block">
          <img
            src="./diligram.webp"
            alt="Bottom Right Decoration"
            className="w-24 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
