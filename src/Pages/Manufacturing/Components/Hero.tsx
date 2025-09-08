import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 700);
    };

    handleResize(); // check on load
    window.addEventListener("resize", handleResize); // listen for resize

    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  return (
    <section
      className="text-white h-[100vh] w-full overflow-hidden bg-cover bg-top flex items-center"
      style={{
        backgroundImage: "url('./manufacturing-hero-bg.webp')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 mt-52">
        <div className="max-w-2xl flex flex-col" data-aos="fade-right">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 leading-tight">
            Keep your frontline teams aligned {isWideScreen ? <br /> : " "} with
            every compliance update - instantly
          </h2>
          <p className="text-base sm:text-lg text-white font-medium mb-8">
            MyStaff app helps manufacturing leaders deliver the{" "}
            {isWideScreen ? <br /> : " "} right guidance to the right people -
            in real time.
          </p>

          <button className="bg-blue-700 text-white text-medium max-w-[275px] text-[15px] font-medium px-2 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
            Try MyStaff app - See How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;