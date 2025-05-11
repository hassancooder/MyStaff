import React from "react";
import { Dot } from "lucide-react";
const DocumentApproach: React.FC = () => {
  const approaches = [
    "Designed around strict document governance – not just forms and checklists.",
    "AI-driven categorization and metadata reduce manual admin and improve searchability.",
    "Document lifecycle management includes author reminders, approval flows, and publishing oversight.",
    "Alerts and notifications ensure staff are always working from the latest version.",
    "Built-in audit trails and access history meet ISO and industry compliance standards.",
    "Offline access enables field compliance in remote locations without signal or Wi-Fi.",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Our Compliance-First Document Approach
        </h2>
        <ul className="space-y-4  max-w-3xl">
          {approaches.map((approach, index) => (
            <li key={index} className="flex items-start text-blue-600">
              <Dot />
              {approach}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DocumentApproach;
