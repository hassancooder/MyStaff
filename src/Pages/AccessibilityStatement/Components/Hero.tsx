import React, { useState, useEffect } from "react";

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
      className={`min-h-[100vh] w-full overflow-hidden bg-cover bg-center flex items-center`}
      style={{
        backgroundImage: `url('./as-hero-bg-${
          isWideScreen ? "desktop" : "mobile"
        }.webp')`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div
            className="flex-1 max-w-2xl text-center md:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-3xl md:text-4xl font-normal mb-2 leading-tight text-white">
              <p className="font-semibold">
                Accessibility <br />
                Statement
              </p>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
