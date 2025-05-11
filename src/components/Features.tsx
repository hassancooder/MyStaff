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
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 leading-snug">
          A tool for controlling knowledge, engagement,
          <br className="hidden sm:block" />
          and compliance <span className="text-red-600">– in one platform</span>
        </h2>

        <div className="text-start mb-10">
          <img
            src="./line.png"
            alt="Line"
            className="w-[120px] sm:w-[150px] ml-[-10px] sm:ml-[-20px]"
          />
        </div>

        <div className="space-y-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col lg:flex-row items-start gap-6 relative"
            >
              <div className="flex items-center w-full sm:w-auto">
                <img
                  src={`./num${feature.id}.png`}
                  alt={`Step ${feature.id}`}
                  className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] mr-[-16px] z-10"
                />
                <button className="font-semibold text-base sm:text-lg bg-blue-800 w-full sm:w-[200px] h-[80px] text-left pl-6 text-white rounded-xl z-5">
                  {feature.title}
                </button>
              </div>

              <div
                className="w-full sm:w-[220px] h-[100px] bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage: `url('./tool${feature.id}.png')`,
                }}
              ></div>

              <div className="w-full lg:flex-1 rounded-lg p-[2px] bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400">
                <div className="relative bg-white rounded-md z-10 flex flex-col p-4 items-center justify-center h-full">
                  <p className="text-base sm:text-lg leading-relaxed text-blue-600 text-center lg:text-left">
                    {feature.description}
                  </p>

                  {feature.id !== 4 && (
                    <img
                      src="./arrow.png"
                      alt="Arrow"
                      className="absolute right-6 bottom-[-30px] w-[40px] sm:w-[60px]"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
