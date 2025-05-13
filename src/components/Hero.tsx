import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="text-white h-[110vh] w-full overflow-hidden bg-cover bg-top flex items-center "
      style={{
        backgroundImage: "url('./Hero.png')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="max-w-2xl flex flex-col">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 leading-relaxed">
            Are your frontline
            <br />
            staff on top of changing
            <br />
            regulations?
          </h2>
          <div className="flex gap-2 items-center justify-start my-8 sm:ml-[-30px]">
            <img
              src="./white-logo.png"
              alt="Logo"
              className="h-[50px] w-[100px] sm:w-40 sm:h-20"
            />
            <p className="text-base sm:text-lg mb-2 text-white font-medium">
              AI-Powered Frontline Governance
            </p>
          </div>

          <button className="bg-blue-700 text-white max-w-[200px] font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
