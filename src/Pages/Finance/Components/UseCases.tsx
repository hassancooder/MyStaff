import React from "react";

const UseCases: React.FC = () => {
  return (
    <section className="bg-[#D6E4F1] h-auto w-100 rounded-tr-[150px] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <h2
          className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2 leading-snug"
          data-aos="fade-up"
        >
          Impressive use cases
        </h2>
        <div className="h-[3px] w-[90px] sm:w-[110px] bg-blue-800 my-6 rounded-full" />

        {/* Mobile view - cards above and below circle */}
        <div className="md:hidden py-10">
          {/* Top cards - 2 cards in a row */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white border-2 border-[#164989] ring-2 ring-[#06264b] ring-opacity-30 shadow-lg rounded-2xl p-4 w-full sm:max-w-[220px]">
              <div className="flex items-center">
                <div className="flex-1">
                  <h2 className="text-[#164989] font-bold text-lg">
                    Quality Control
                  </h2>
                  <p className="text-[#164989] text-xs">
                    For product quality management regulation
                  </p>
                </div>
                <img
                  src="./new_sec/quality.webp"
                  alt="Quality"
                  className="w-[50px] ml-2"
                />
              </div>
            </div>

            <div className="bg-white border-2 border-[#164989] ring-2 ring-[#06264b] ring-opacity-30 shadow-lg rounded-2xl p-4 w-full sm:max-w-[220px]">
              <div className="flex items-center">
                <div className="flex-1">
                  <h2 className="text-[#164989] font-bold text-lg">
                    Sales & Operation
                  </h2>
                  <p className="text-[#164989] text-xs">
                    For pricing management, tariffs regulations, antitrust laws
                  </p>
                </div>
                <img
                  src="./new_sec/sales.webp"
                  alt="Sales"
                  className="w-[50px] ml-2"
                />
              </div>
            </div>
          </div>

          {/* Center circle */}
          <div className="flex justify-center my-16">
            <div className="relative w-[150px] h-[150px]">
              <img
                src="./new_sec/wheel-main.webp"
                alt="Wheel center"
                className="w-full h-full"
              />
              <img
                src="./new_sec/wheel-border.webp"
                alt="Wheel border"
                className="absolute top-0 left-0 w-full h-full scale-[1.6]"
              />
            </div>
          </div>

          {/* Bottom cards - 3 cards */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white border-2 border-[#164989] ring-2 ring-[#06264b] ring-opacity-30 shadow-lg rounded-2xl p-4 w-full sm:max-w-[220px]">
              <div className="flex items-center">
                <div className="flex-1">
                  <h2 className="text-[#164989] font-bold text-lg">
                    Supply Chain
                  </h2>
                  <p className="text-[#164989] text-xs">
                    Development & equipment, environment, health & safety,
                    customs regulation
                  </p>
                </div>
                <img
                  src="./new_sec/supply.webp"
                  alt="Supply"
                  className="w-[50px] ml-2"
                />
              </div>
            </div>

            <div className="bg-white border-2 border-[#164989] ring-2 ring-[#06264b] ring-opacity-30 shadow-lg rounded-2xl p-4 w-full sm:max-w-[220px]">
              <div className="flex items-center">
                <div className="flex-1">
                  <h2 className="text-[#164989] font-bold text-lg">HR</h2>
                  <p className="text-[#164989] text-xs">
                    For code of conduct, employee security and internal
                    communication
                  </p>
                </div>
                <img
                  src="./new_sec/hr.webp"
                  alt="HR"
                  className="w-[50px] ml-2"
                />
              </div>
            </div>

            <div className="bg-white border-2 border-[#164989] ring-2 ring-[#06264b] ring-opacity-30 shadow-lg rounded-2xl p-4 w-full sm:max-w-[220px]">
              <div className="flex items-center">
                <div className="flex-1">
                  <h2 className="text-[#164989] font-bold text-lg">Legal</h2>
                  <p className="text-[#164989] text-xs">
                    For risk mitigation, operational & economical regulations,
                    reputation & fraud
                  </p>
                </div>
                <img
                  src="./new_sec/legal.webp"
                  alt="Legal"
                  className="w-[50px] ml-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/tablet view - wheel with positioned cards */}
        <div className="hidden md:flex justify-center items-center py-28 lg:py-52 w-100 relative">
          <div className="relative">
            <img
              src="./new_sec/wheel-main.webp"
              alt=""
              className="w-full max-w-[120px] lg:max-w-[170px] h-full max-h-[120px] lg:max-h-[170px]"
            />
            <div>
              <img
                src="./new_sec/wheel-border.webp"
                alt=""
                className="absolute top-0 left-0 scale-[1.60]"
              />
            </div>
            {/* Cards  */}
            {/* card #1  */}
            <div className="absolute top-2 md:-left-[150%] lg:-left-[180%]">
              <div className="bg-white border-2 border-[#164989] ring-2 ring-[#06264b] ring-opacity-30 box-shadow-2xl shadow-[#164989] rounded-2xl pl-4 py-4 lg:py-6 pr-10 lg:pr-12 relative md:max-w-[200px] lg:max-w-[250px] flex justify-center items-center flex-col">
                <img
                  src="./new_sec/quality.webp"
                  alt=""
                  className="w-[50px] lg:w-[70px] absolute left-[90%] top-50 "
                />
                <div className="text-right">
                  <h2 className="text-[#164989] font-bold text-base lg:text-lg">
                    Quality Control
                  </h2>
                  <p className="text-[#164989] text-[10px] lg:text-xs/4 max-w-[175px]">
                    For product quality management regulation
                  </p>
                </div>
              </div>
            </div>
            {/* card #2  */}
            <div className="absolute md:-top-[100%] lg:-top-[110%] md:left-[-26.5%] lg:left-[-26.5%]">
              <div className="bg-white border-2 border-[#164989] ring-2 ring-[#06264b] ring-opacity-30 box-shadow-2xl shadow-[#164989] rounded-2xl p-4 lg:p-6 relative md:w-[200px] lg:w-[260px] flex justify-center items-center flex-col">
                <img
                  src="./new_sec/sales.webp"
                  alt=""
                  className="w-[50px] lg:w-[70px] absolute left-[35%] top-[75%]"
                />
                <div className="text-center">
                  <h2 className="text-[#164989] font-bold text-base lg:text-lg">
                    Sales & Operation
                  </h2>
                  <p className="text-[#164989] text-[10px] lg:text-xs/4 mb-4">
                    For pricing management, tariffs regulations, antitrust laws
                  </p>
                </div>
              </div>
            </div>
            {/* card #3  */}
            <div className="absolute top-2 md:-right-[150%] lg:-right-[183%]">
              <div className="bg-white border-2 border-[#164989] ring-2 ring-[#06264b] ring-opacity-30 box-shadow-2xl shadow-[#164989] rounded-2xl pr-4 py-4 lg:py-6 pl-10 lg:pl-12 relative md:max-w-[200px] lg:max-w-[250px] flex justify-center items-center flex-col">
                <img
                  src="./new_sec/supply.webp"
                  alt=""
                  className="w-[50px] lg:w-[70px] absolute right-[90%] top-50 "
                />
                <div className="text-left">
                  <h2 className="text-[#164989] font-bold text-base lg:text-lg">
                    Supply Chain
                  </h2>
                  <p className="text-[#164989] text-[10px] lg:text-xs/4">
                    Development & equipment, environment, health & safety,
                    customs regulation
                  </p>
                </div>
              </div>
            </div>
            {/* card #4  */}
            <div className="absolute md:top-[110%] lg:top-[125%] md:-right-[110%] lg:-right-[133%]">
              <div className="bg-white border-2 border-[#164989] ring-2 ring-[#06264b] ring-opacity-30 box-shadow-2xl shadow-[#164989] rounded-2xl pr-4 py-4 lg:py-6 pl-10 lg:pl-12 relative md:max-w-[200px] lg:max-w-[250px] flex justify-center items-center flex-col">
                <img
                  src="./new_sec/hr.webp"
                  alt=""
                  className="w-[50px] lg:w-[70px] absolute left-0 top-[-35%]"
                />
                <div className="text-left">
                  <h2 className="text-[#164989] font-bold text-base lg:text-lg">
                    HR
                  </h2>
                  <p className="text-[#164989] text-[10px] lg:text-xs/4">
                    For code of conduct, employee security and internal
                    communication
                  </p>
                </div>
              </div>
            </div>
            {/* card #5  */}
            <div className="absolute md:top-[110%] lg:top-[125%] md:-left-[110%] lg:-left-[133%]">
              <div className="bg-white border-2 border-[#164989] ring-2 ring-[#06264b] ring-opacity-30 box-shadow-2xl shadow-[#164989] rounded-2xl pl-4 py-4 lg:py-6 pr-10 lg:pr-12 relative md:max-w-[200px] lg:max-w-[250px] flex justify-center items-center flex-col">
                <img
                  src="./new_sec/legal.webp"
                  alt=""
                  className="w-[50px] lg:w-[70px] absolute right-0 top-[-35%]"
                />
                <div className="text-right">
                  <h2 className="text-[#164989] font-bold text-base lg:text-lg">
                    Legal
                  </h2>
                  <p className="text-[#164989] text-[10px] lg:text-xs/4">
                    For risk mitigation, operational & economical regulations,
                    reputation & fraud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UseCases;
