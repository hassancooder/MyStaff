import React from "react";
import { LucideCheckCircle } from "lucide-react";

const ComparisonTable: React.FC = () => {
  const features = [
    "Document creation, approval & author reminders",
    "Automated version control & document history",
    "Auto-categorization & tagging (AI based)",
    "Searchable PDF rendering with mobile optimization",
    "Staff alerts for new/updated documents",
    "Mobile-friendly policy guidelines with tests",
    "Audit-ready access logs & compliance tracking",
    "Offline access to critical compliance documents",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10 bg-gray-50">
      <div className="container mx-auto sm:px-6 lg:px-10">
        <h1
          className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4"
          data-aos="fade-up"
        >
          Document Management & Compliance features of MyStaff app
        </h1>

        <div className="text-start mb-6">
          <img
            src="./line.png"
            alt="Line"
            className="w-[120px] sm:w-[150px] ml-[-10px] sm:ml-[-20px]"
          />
        </div>

        <p
          className="text-blue-600 font-bold text-base lg:text-sm xl:text-base max-w-3xl mb-8"
          data-aos="fade-right"
        >
          *MyStaff app stands out with dedicated features from document
          lifecycle control, regulatory compliance and ease of access in both
          field and office environments, critical to highly regulated
          industries.*
        </p>

        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 text-blue-800">
              <LucideCheckCircle className="text-[#2dc043] mt-1" />
              <span className="text-base">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
