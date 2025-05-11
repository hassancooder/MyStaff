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
}) => {
  return (
    <div className="group relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
      <div
        className="bg-center bg-cover bg-no-repeat p-6 h-[45vh] flex flex-col items-center text-center z-100"
        style={{ backgroundImage: "url('./cardBottom.png')" }}
      >
        <div className="mb-4 h-48 -mt-8">
          <img
            src={`./product${productId}.png`}
            alt="MyStaff App"
            className="object-contain w-full h-full shadow-md z-10 "
          />
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-blue-100 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ModuleCard;
