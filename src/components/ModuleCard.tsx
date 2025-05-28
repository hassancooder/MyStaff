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
      className="group relative transform transition-transform duration-300 hover:-translate-y-2 my-4"
      data-aos="zoom-out"
    >
      <div
        className="bg-center bg-contain bg-no-repeat p-4 h-full w-full flex flex-col items-center lg:items-start text-center lg:text-left"
        style={{ backgroundImage: "url('./cardBottom.png')" }}
      >
        <div className="w-full relative flex justify-center lg:justify-start 3xl:justify-center mb-4 -mt-10 ml-10">
          <img
            src={`./product${productId}.png`}
            alt="MyStaff App"
            className="object-contain w-[100px] sm:w-[140px] md:w-[180px] md:h-[120px] h-[100px] sm:h-[120px] 3xl:w-[200px] 3xl:h-[200px] lg:w-[140px] lg:h-[140px] 3xl:mb-0 -mb-3"
          />
        </div>

        <div className="w-[90%] px-4 sm:px-6 lg:px-0 lg:w-[80%] 3xl:w-[60%] mb-10 text-center mx-auto">
          <h3 className="text-xs md:text-sm font-semibold text-white break-words 3xl:text-3xl 3xl:mb-2">
            {title}
          </h3>
          <p className="text-xs md:text-xs text-blue-100 break-words 3xl:text-2xl">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
