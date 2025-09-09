import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className={`min-h-[70vh] w-full overflow-hidden bg-cover bg-top flex items-center`}
      style={{
        backgroundImage: "url('./contact-hero-bg.webp')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div
            className="flex-1 max-w-2xl text-center md:text-left"
            data-aos="fade-right"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-normal mb-2 leading-tight text-white relative"
              style={{
                textShadow:
                  "0 0 16px rgba(23, 37, 84, 0.9), 0 0 24px rgba(30, 58, 138, 0.8), 0 0 32px rgba(37, 99, 235, 0.7)",
              }}
            >
              <span className="font-semibold">CONTACT</span> US
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
