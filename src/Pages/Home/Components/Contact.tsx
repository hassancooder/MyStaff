import React from "react";
import {Link} from "react-router-dom";

const Contact: React.FC = () => {
  const impacts = [
    {
      id: 1,
      description:
        "AI automated updates for all company relevant regulation & policies documentation",
    },
    {
      id: 2,
      description: "60%+ reduction in unmanaged legacy documents",
    },
    {
      id: 3,
      description: "Seamless integration with internal and external sources",
    },
    {
      id: 4,
      description: "Significant time savings on audits & reviews",
    },
    {
      id: 5,
      description: "Fully traceable, real time compliance dashboards",
    },
    {
      id: 6,
      description: "90%+ staff uptake on live deployments",
    },
  ];

  return (
    <section className="bg-white overflow-hidden mt-10">
      <div className="w-full flex flex-col-reverse lg:flex-row items-stretch justify-between min-h-[80vh]">
        <div className="w-full lg:w-[70vw] flex flex-col justify-between">
          <div className="flex flex-col xl:py-20 xl:px-20 lg:ml-2 xl:ml-0 container mx-auto sm:px-6 lg:px-10 2xl:px-16 3xl:ml-7">
            <h2
              className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 leading-snug mt-4 p-2 lg:p-0"
              data-aos="fade-down"
            >
              Real Impact, <br /> Proven Outcomes
            </h2>
            <div className="text-start mb-6 -ml-4  p-2 lg:p-0">
              <img src="./line.webp" alt="Line" className="w-[120px] h-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 mt-10 px-10">
              {impacts.map((impact) => (
                <div
                  key={impact.id}
                  className="flex items-center gap-3"
                  data-aos="fade-right"
                >
                  <img
                    src={`./impact${impact.id}.webp`}
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
            <div className="container sm:px-8 sm:-ml-24 md:px-12 md:ml-1 lg:px-2 xl:px-9 2xl:px-12">
              <h3 className="text-xl sx:-ml-16 sm:ml-0 sm:text-2xl font-bold text-yellow-400">
                Let’s Talk
              </h3>
              <div className="text-start xs:-ml-20 sm:-ml-3">
                <img src="./line.webp" alt="Line" className="w-[120px] h-auto" />
              </div>
              <p className="mb-4 text-sm sm:text-base xs:-ml-16 sm:ml-0">
                See how MyStaff app can transform governance at your
                organisation.
              </p>
              <Link to="/contact" className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-md hover:bg-yellow-500 transition xs:-ml-16 sm:ml-0">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>

        <div
          className="w-full lg:w-[35vw] flex justify-center items-end mt-10 lg:mt-0"
          data-aos="fade-left"
        >
          <img
            src="./impacts.webp"
            alt="Impact Visual"
            className="w-full max-w-[500px] lg:max-w-[60vw] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
