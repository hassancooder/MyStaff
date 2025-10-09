import React from "react";

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Instant Access",
      description: (
        <>
          Reduces time-based risk exposure by giving staff{" "}
          <strong>immediate access</strong> to the latest guidance.
        </>
      ),
    },
    {
      id: 2,
      title: "High Uptake",
      description: (
        <>
          Over <strong>90%</strong> of staff use MyStaff app. A risk control
          only works if it's used – and this one is.
        </>
      ),
    },
    {
      id: 3,
      title: "Material Depth",
      description: (
        <>
          Covers the full range of{" "}
          <strong>operational, and regulatory knowledge</strong> across the
          organisation.
        </>
      ),
    },
    {
      id: 4,
      title: "Material Compliance",
      description: (
        <>
          Ensures documents are{" "}
          <strong>accurate, current, and traceable</strong> automating policy
          lifecycle and oversight.
        </>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto p-2 sm:px-6 lg:px-10">
        <h2
          className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 leading-snug"
          data-aos="fade-up"
        >
          A tool for controlling knowledge, engagement,
          <br className="hidden sm:block" />
          and compliance <span className="text-red-600">– in one platform</span>
        </h2>

        <div className="text-start mb-10">
          <img
            src="./line.webp"
            alt="Line"
            className="w-[120px] sm:w-[150px] ml-[-10px] sm:ml-[-20px]"
          />
        </div>

        <div className=" md:max-h-[150vh] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {features.map((feature) => {
            return (
              <div key={feature.id} className=" flex flex-col w-full py-2">
                <div className=" relative w-full flex items-end ">
                  <img src={`./pharmaf${feature.id}.webp`} className="w-full" />
                  <h3 className="absolute text-white bottom-7 left-8 text-2xl lg:text-3xl 3xl:bottom-12 3xl:left-20 3xl:text-4xl">
                    {feature.title}
                  </h3>
                  <img
                    src={`./num${feature.id}.webp`}
                    alt="Number"
                    className="absolute top-0 left-0  w-12 h-12 3xl:w-20 3xl:h-20"
                  />
                </div>
                <p className="pl-3 text-sm text-blue-800 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
