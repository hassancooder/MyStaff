import React from "react";

interface ModuleCardProps {
  title: string;
  description: string;
  productId: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  productId,
}: ModuleCardProps) => {
  return (
    <div
      className="group relative overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
      data-aos="zoom-out"
    >
      <div
        className="bg-center bg-contain bg-no-repeat p-4 h-full w-full  flex flex-col items-center lg:items-start text-center lg:text-left"
        style={{ backgroundImage: "url('./cardBottom.png')" }}
      >
        <div className="w-full relative flex justify-center lg:justify-start 3xl:justify-center mb-4">
          <img
            src={`./product${productId}.png`}
            alt="MyStaff App"
            className="object-contain w-[100px] sm:w-[140px] md:w-[180px] h-[100px] sm:h-[120px]  3xl:w-[200px] 3xl:h-[200px] lg:w-[150px] lg:h-[150px] 3xl:mb-0 mb-4"
          />
        </div>

        <div className=" px-5 xs:w-[47vw] sm:w-full sm:px-6 md:h-[20vh] mb-10 3xl:px-6 3xl:w-[20vw]   3xl:p-5  text-center">
          <h3 className="text-sm md:text-lg font-semibold text-white break-words  3xl:text-3xl 3xl:mb-2">
            {title}
          </h3>
          <p className="text-xs md:text-base text-blue-100 break-words 3xl:text-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
