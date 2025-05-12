import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="text-white h-[110vh] w-full overflow-hidden bg-cover bg-top flex items-center"
      style={{
        backgroundImage: "url('./Hero.png')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="max-w-2xl flex flex-col gap-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            MyStaff app
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-6 leading-relaxed">
            Do your frontline staff know
            <br className="hidden md:block" />
            the latest regulations?
          </h2>
          <p className="text-base sm:text-lg mb-2 text-blue-200 font-medium">
            AI-Powered Frontline Governance
          </p>
          <p className="text-sm mb-8 text-blue-100">
            an operational compliance solution
          </p>

          <button className="bg-blue-600 text-white max-w-[200px] font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
