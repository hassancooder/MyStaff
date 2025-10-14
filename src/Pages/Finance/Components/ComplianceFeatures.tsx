import React from "react";

const ComplianceFeatures: React.FC = () => {
  const features = [
    {
      title:
        "<span class='font-semibold'>Staff alerts</span> for new/updated<br/> documents",
      image: "./new_sec/cf-05.webp",
    },
    {
      title:
        "<span class='font-semibold'>Automated version control</span><br/> & document history",
      image: "./fcf-02.webp",
    },
    {
      title:
        "<span class='font-semibold'>Auto-characterisation</span><br/> & tagging (AI-based)",
      image: "./new_sec/cf-03.webp",
    },
    {
      title:
        "Searchable PDF rendering<br/> with <span class='font-semibold'>mobile optimization</span>",
      image: "./fcf-04.webp",
    },
    {
      title:
        "Document creation <span class='font-semibold'>approval<br/> & author reminders</span>",
      image: "./without-nt.webp",
    },
    {
      title:
        "<span class='font-semibold'>Mobile-friendly</span> policy &<br/> guideline access",
      image: "./hcf-06.webp",
    },
    {
      title:
        "<span class='font-semibold'>Audit-ready</span> access logs<br/> & compliance tracking",
      image: "./new_sec/cf-07.webp",
    },
    {
      title:
        "<span class='font-semibold'>Offline access</span> to critical<br/> compliance documents",
      image: "./hcf-08.webp",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <h2
          className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2 leading-snug"
          data-aos="fade-up"
        >
          Document Management and compliance features
        </h2>

        <div className="text-start mb-4">
          <img
            src="./line.webp"
            alt="Line"
            className="w-[120px] sm:w-[150px] ml-[-10px] sm:ml-[-20px]"
          />
        </div>

        <p
          className="text-blue-600 max-w-3xl mb-16 leading-relaxed"
          data-aos="fade-right"
        >
          MyStaff app stands out with dedicated features from document lifecycle
          control, regulatory compliance and easy of access in both field and
          office environments, critical to highly regulated industries*
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-[#164989] p-4 pt-16 flex flex-col items-center text-center h-full rounded-[30px] border-[6px] border-[#FAB517] shadow-xl"
            >
              {/* Floating Image */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white border-[#0B2644] border-4 rounded-2xl flex justify-center items-center w-36 h-24">
                <img
                  src={feature.image}
                  alt="feature"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title HTML Rendering */}
              <div
                className="text-white text-md/3 sm:text-lg/6 font-light"
                dangerouslySetInnerHTML={{ __html: feature.title }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceFeatures;
