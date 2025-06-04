import React from "react";
import { LucideCheckCircle } from "lucide-react";

const featuresList = [
  "Document creation, approval & author reminders",
  "Automated version control & document history",
  "Auto-categorization & tagging (AI based)",
  "Searchable PDF rendering with mobile optimization",
  "Staff alerts for new/updated documents",
  "Mobile-friendly policy guidelines with tests",
  "Audit-ready access logs & compliance tracking",
  "Offline access to critical compliance documents",
];

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1
            className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4"
            data-aos="fade-up"
          >
            Document Management & Compliance features of MyStaff app
          </h1>
          <div className="flex justify-center mb-4">
            <img
              src="./line.png"
              alt="Line"
              className="w-[150px] sm:w-[180px]"
            />
          </div>
          <p
            className="text-blue-600 font-semibold text-base sm:text-lg"
            data-aos="fade-right"
          >
            MyStaff app stands out with dedicated features from document
            lifecycle control, regulatory compliance and ease of access in both
            field and office environments, critical to highly regulated
            industries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white border border-blue-200 rounded-2xl shadow-sm p-4"
              data-aos="fade-up"
            >
              <LucideCheckCircle className="text-[#2dc043] min-w-[24px] mt-1" />
              <p className="text-blue-800 text-sm sm:text-base font-medium">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
