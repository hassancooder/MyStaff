import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className={`min-h-[100vh] w-full overflow-hidden bg-cover bg-top flex items-center`}
      style={{
        backgroundImage: "url('./accessibility-statement-hero-bg.webp')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div
            className="flex-1 max-w-2xl text-center md:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-2 leading-tight text-white">
              <p className="font-semibold">Accessibility <br/>Statement</p> 
            </h2>
          </div>
          <div
            className="flex-1 max-w-2xl"
            data-aos="fade-left"
          >
            <img 
              src="./as-hero-fimage.webp" 
              alt="Accessibility Statement Front Image" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
