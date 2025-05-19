import React from "react";

const Impact: React.FC = () => {
  const impacts = [
    {
      id: 1,
      description: "90%+ staff uptake on live deployments",
    },
    {
      id: 2,
      description: "60%+ reduction in unmanaged legacy documents",
    },
    {
      id: 3,
      description: "Significant time savings on audits & reviews",
    },
    {
      id: 4,
      description: "Fully traceable, real time compliance dashboards",
    },
  ];

  return (
    <section className="bg-white overflow-hidden mt-10">
      <div className="w-full flex flex-col-reverse lg:flex-row items-stretch justify-between min-h-[80vh]">
        <div className="w-full lg:w-[70vw] flex flex-col justify-between">
          <div className="flex flex-col xl:py-20 xl:px-10">
            <h2
              className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 leading-snug mt-4 ml-10"
              data-aos="fade-down"
            >
              Real Impact, <br /> Proven Outcomes
            </h2>
            <div className="text-start  mb-6">
              <img
                src="./line.png"
                alt="Line"
                className="w-[120px] h-auto ml-5"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mt-10 px-10">
              {impacts.map((impact) => (
                <div
                  key={impact.id}
                  className="flex items-center gap-3"
                  data-aos="fade-right"
                >
                  <img
                    src={`./impact${impact.id}.png`}
                    alt={`Impact ${impact.id}`}
                    className="w-[80px] h-[80px] object-contain"
                  />
                  <p className="text-blue-600 text-start text-md  font-bold leading-tight">
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="bg-blue-600 text-white px-6 sm:px-10 py-4 mt-10"
            data-aos="fade-up"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3">
              Let’s Talk
            </h3>
            <div className="text-start mb-3">
              <img
                src="./line.png"
                alt="Line"
                className="w-[120px] h-auto ml-[-20px]"
              />
            </div>
            <p className="mb-4 text-sm sm:text-base">
              See how MyStaff app can transform governance at your organisation.
            </p>
            <button className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-md hover:bg-yellow-500 transition">
              Request a Demo
            </button>
          </div>
        </div>

        <div
          className="w-full lg:w-[60vw] flex justify-center items-end mt-10 lg:mt-0"
          data-aos="fade-left"
        >
          <img
            src="./impacts.png"
            alt="Impact Visual"
            className="w-full max-w-[500px] lg:max-w-[60vw] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Impact;
