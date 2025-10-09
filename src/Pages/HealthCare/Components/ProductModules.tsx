import React from "react";
import ModuleCard from "./ModuleCard";

const ProductModules: React.FC = () => {
  const modules = [
    {
      id: 1,
      title: "Policies & Procedures",
      description:
        "Intelligent access, version control, and compliance tracking",
      img: "./product1.webp",
    },
    {
      id: 2,
      title: "Document Creation",
      description: "End-to-end workflow with full audit trails",
      img: "./product2.webp",
    },
    {
      id: 3,
      title: "Customer Information",
      description:
        "Manage & distribute customer-facing materials (leaflets, posters)",
        img: "./product3.webp",
    },
    {
      id: 4,
      title: "App",
      description: "Mobile & web access with alerts, favorites & offline mode",
      img: "./product4.webp",
    },
    {
      id: 5,
      title: "Analytics",
      description: "Real-time compliance dashboards & engagement reporting",
      img: "./product5.webp",
    },
    {
      id: 6,
      title: "Notifications",
      description: "Automated alerts for new docs, updates & compliance issues",
      img: "./product6.webp",
    },
    {
      id: 7,
      title: "QR Code-Based Access",
      description:
        "Instant, contactless access via QR codes—ideal for single-use & frontline use",
      img: "./healthcare-product7.webp",
    },
  ];

  return (
    <section id="modules" className="py-16 bg-white overflow-hidden">
      <div className="relative container mx-auto p-2 sm:px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Core Product Modules
        </h2>

        <div className="text-start mb-10">
          <img
            src="./line.webp"
            alt="Line"
            className="w-[150px] h-full self-start -ml-5"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              img={module.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModules;
