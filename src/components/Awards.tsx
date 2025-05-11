import React from "react";

const Awards: React.FC = () => {
  const awards = [1, 2, 3, 4];

  return (
    <section className="py-16 bg-blue-800 text-white">
      <div className="container flex items-center justify-between mx-auto px-10">
        <h2 className="text-3xl font-bold mb-8 text-start">
          OUR
          <br />
          AWARDS
        </h2>

        <div className="flex flex-wrap justify-center gap-8 items-center">
          {awards.map((award, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url('./award${award}.png')` }}
              className="bg-white rounded-full w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-2 transform transition-transform hover:scale-110 bg-center bg-cover"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
