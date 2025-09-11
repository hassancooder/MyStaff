import React from "react";
import { Link } from "react-router-dom";

const PageLinks: React.FC = () => {
  return (
    <section className="relative w-full px-6 lg:px-20 mt-12 z-10">
      <div className="container w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center rounded-2xl justify-between lg:-mt-44">
        {/* ===== LEFT SIDE: DESKTOP + MOBILE SHOWCASE ===== */}
        <div className="relative flex-1 flex items-center justify-center">
          <img
            src="./desktop-plus-mobile.png"
            alt="Desktop and Mobile Showcase"
            className="w-full min-w-[300px] mt-12 mb-10 pb-12 lg:mb-0 lg:pb-0 object-contain z-10 absolute px-4 lg:px-0"
          />
        </div>

        {/* ===== RIGHT SIDE: BUTTONS ===== */}
        <div className="w-full max-w-md mt-11 lg:mt-0">
          <div className="bg-white rounded-2xl lg:shadow-xl p-6 lg:px-12 flex flex-col ml-6 lg:ml-0 gap-4 lg:gap-6">
            {/* Button 1 - Healthcare */}
            <Link
              to="/healthcare"
              className="relative flex items-center gap-4 p-1.5 lg:p-4 border ring-1 ring-blue-600 hover:bg-blue-600 hover:ring-transparent rounded-full transition group"
            >
              {/* Icon outside button */}
              <div className="absolute -left-8 w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center rounded-full ring-1 ring-blue-600 bg-white">
                <img
                  src="./healthcare.png"
                  alt="Healthcare"
                  className="w-7 lg:w-8 h-7 lg:h-8 object-contain"
                />
              </div>
              <span className="ml-10 text-md lg:text-lg font-medium text-blue-900 group-hover:text-white">
                Healthcare
              </span>
            </Link>

            {/* Button 2 - Pharmaceutical (Active) */}
            <Link
              to="/pharmaceutical"
              className="relative flex items-center gap-4 p-1.5 lg:p-4 ring-1 ring-blue-600 hover:bg-blue-600 hover:ring-transparent rounded-full transition group"
            >
              {/* Icon outside button */}
              <div className="absolute -left-8 w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center rounded-full ring-1 ring-blue-600 bg-white">
                <img
                  src="./pharma.png"
                  alt="Manufacturing"
                  className="w-7 lg:w-8 h-7 lg:h-8 object-contain"
                />
              </div>
              <span className="ml-10 text-md lg:text-lg font-medium text-blue-900 group-hover:text-white">
                Pharmaceutical
              </span>
            </Link>

            {/* Button 3 - Manufacturing */}
            <Link
              to="/manufacturing"
              className="relative flex items-center gap-4 p-1.5 lg:p-4 ring-1 ring-blue-600 hover:bg-blue-600 hover:ring-transparent rounded-full transition group"
            >
              {/* Icon outside button */}
              <div className="absolute -left-8 w-12 lg:w-16 h-12 lg:h-16 flex items-center justify-center rounded-full  ring-1 ring-blue-600 bg-white">
                <img
                  src="./manufact.png"
                  alt="Manufacturing"
                  className="w-7 lg:w-8 h-7 lg:h-8 object-contain"
                />
              </div>
              <span className="ml-10 text-md lg:text-lg font-medium text-blue-900 group-hover:text-white">
                Manufacturing
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageLinks;
