import React from "react";
import ModuleCard from "./ModuleCard";

const ProductModules: React.FC = () => {
  const modules = [
    {
      id: 1,
      title: "Policies & Procedures",
      description:
        "Intelligent access, version control, and compliance tracking",
    },
    {
      id: 2,
      title: "Document Creation",
      description: "End-to-end workflow with full audit trails",
    },
    {
      id: 3,
      title: "Customer Information",
      description:
        "Manage & distribute customer-facing materials (leaflets, posters)",
    },
    {
      id: 1,
      title: "App",
      description: "Mobile & web access with alerts, favorites & offline mode",
    },
    {
      id: 5,
      title: "Analytics",
      description: "Real-time compliance dashboards & engagement reporting",
    },
    {
      id: 6,
      title: "Notifications",
      description: "Automated alerts for new docs, updates & compliance issues",
    },
    {
      id: 7,
      title: "QR Code-Based Access",
      description:
        "Instant, contactless access via QR codes—ideal for single-use & frontline use",
    },
  ];

  return (
    <section id="modules" className="py-16 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Core Product Modules
        </h2>

        <div className="text-start mb-10">
          <img
            src="./line.png"
            alt="Line"
            className="w-[150px] h-full self-start -ml-5"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              productId={module.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductModules;
