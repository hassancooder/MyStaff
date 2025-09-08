import React from "react";
import { Link } from "react-router-dom";

const PageLinks: React.FC = () => {
  return (
    <section className="relative w-full bg-white px-6 lg:px-20 mt-12">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center rounded-2xl justify-between">
        {/* ===== LEFT SIDE: DESKTOP + MOBILE SHOWCASE ===== */}
        <div className="relative flex-1 flex items-center justify-center">
          <img
            src="./desktop-plus-mobile.png"
            alt="Desktop and Mobile Showcase"
            className="w-full max-w-[620px] object-contain z-10"
          />
        </div>

        {/* ===== RIGHT SIDE: BUTTONS ===== */}
        <div className="w-full max-w-md">
          <div className="bg-white  p-8 flex flex-col gap-6">
            {/* Button 1 - Healthcare */}
            <Link
              to="/healthcare"
              className="relative flex items-center gap-4 p-4 border border-blue-400 hover:bg-blue-600 rounded-full transition group"
            >
              {/* Icon outside button */}
              <div className="absolute -left-8 w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 border border-blue-400">
                <img
                  src="./healthcare.png"
                  alt="Healthcare"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="ml-10 text-lg font-medium text-blue-900 group-hover:text-white">
                Healthcare
              </span>
            </Link>

            {/* Button 2 - Pharmaceutical (Active) */}
             <Link
              to="/pharmaceutical"
              className="relative flex items-center gap-4 p-4 border border-blue-400 hover:bg-blue-600 rounded-full transition group"
            >
              {/* Icon outside button */}
              <div className="absolute -left-8 w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 border border-blue-400">
                <img
                  src="./pharma.png"
                  alt="Manufacturing"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="ml-10 text-lg font-medium text-blue-900 group-hover:text-white">
                Pharmaceutical
              </span>
            </Link>

            {/* Button 3 - Manufacturing */}
            <Link
              to="/manufacturing"
              className="relative flex items-center gap-4 p-4 border border-blue-400 hover:bg-blue-600 rounded-full transition group"
            >
              {/* Icon outside button */}
              <div className="absolute -left-8 w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 border border-blue-400">
                <img
                  src="./manufact.png"
                  alt="Manufacturing"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="ml-10 text-lg font-medium text-blue-900 group-hover:text-white">
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
