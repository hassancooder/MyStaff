import { ArrowRight } from "lucide-react";
import React from "react";
import { LucideCheckCircle, XCircle } from "lucide-react";

const ComparisonTable: React.FC = () => {
  const features = [
    {
      name: (
        <>
          <b>Document creation</b>, <br />
          approval & author reminders
        </>
      ),
      competitors: {
        mystaff: true,
        fatfinger: false,
        intelex: false,
        formopx: false,
        frontline: false,
      },
    },
    {
      name: (
        <>
          <b>Automated version control</b>, <br />& document history
        </>
      ),
      competitors: {
        mystaff: true,
        fatfinger: false,
        intelex: true,
        formopx: false,
        frontline: false,
      },
    },
    {
      name: (
        <>
          <b>Auto-categorization</b>, <br />& tagging (AI based)
        </>
      ),
      competitors: {
        mystaff: true,
        fatfinger: false,
        intelex: false,
        formopx: false,
        frontline: false,
      },
    },
    {
      name: (
        <>
          <b>Searchable PDF</b>, <br />
          rendering with mobile optimization
        </>
      ),
      competitors: {
        mystaff: true,
        fatfinger: false,
        intelex: false,
        formopx: false,
        frontline: false,
      },
    },
    {
      name: (
        <>
          <b>Staff alerts</b>, <br />
          for new/updated documents
        </>
      ),
      competitors: {
        mystaff: true,
        fatfinger: false,
        intelex: false,
        formopx: false,
        frontline: false,
      },
    },
    {
      name: (
        <>
          <b>Mobile-friendly</b>, <br />
          policy guidelines with tests
        </>
      ),
      competitors: {
        mystaff: true,
        fatfinger: true,
        intelex: false,
        formopx: false,
        frontline: false,
      },
    },
    {
      name: (
        <>
          <b>Audit-ready access logs</b>, <br />& compliance tracking
        </>
      ),
      competitors: {
        mystaff: true,
        fatfinger: false,
        intelex: true,
        formopx: false,
        frontline: false,
      },
    },
    {
      name: (
        <>
          <b>Offline access </b>, <br />
          to critical compliance documents
        </>
      ),
      competitors: {
        mystaff: true,
        fatfinger: false,
        intelex: false,
        formopx: false,
        frontline: false,
      },
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-0 bg-gray-50">
      <div className="container mx-auto sm:px-6 lg:px-10">
        <h1
          className="text-2xl sm:text-3xl font-bold text-blue-800"
          data-aos="fade-up"
        >
          Document Management & Compliance
        </h1>
        <h2
          data-aos="fade-up"
          className="text-2xl sm:text-3xl font-bold text-blue-600"
        >
          - comparison
        </h2>

        <div className="text-start mb-10">
          <img
            src="./line.png"
            alt="Line"
            className="w-[120px] sm:w-[150px] ml-[-10px] sm:ml-[-20px]"
          />
        </div>

        <div className="overflow-x-auto flex flex-col gap-12 lg:gap-4 lg:flex-row">
          <p
            className="text-blue-600 max-w-2xl font-bold text-base lg:text-xs xl:text-base"
            data-aos="fade-right"
          >
            MyStaff app stands out with dedicated features for document
            lifecycle control, regulatory compliance, and ease of access in both
            field and office environments critical to highly regulated
            industries.
          </p>
          <table className="min-w-[800px] w-full border-collapse border border-blue-600 text-sm sm:text-base">
            <thead>
              <tr>
                <th className="w-[240px] text-blue-800 text-left text-sm p-3 bg-amber-400 border-blue-600 border-[2px]">
                  Document Management
                  <br /> & Compliance Feature
                </th>
                <th className="w-[160px] text-blue-800 text-center  bg-amber-400 border-blue-600 border-[2px]">
                  <div className="flex justify-center">
                    <img
                      src="./logo.png"
                      alt="Logo"
                      className="h-[60px] w-[150px]"
                    />
                  </div>
                </th>
                <th className="w-[160px] text-blue-800 text-center text-md p-3 bg-amber-400 border-blue-600 border-[2px]">
                  Fat Finger
                </th>
                <th className="w-[160px] text-blue-800 text-center text-md p-3 bg-amber-400 border-blue-600 border-[2px]">
                  Intelex
                </th>
                <th className="w-[160px] text-blue-800 text-center text-md p-3 bg-amber-400 border-blue-600 border-[2px]">
                  Form OpX
                </th>
                <th className="w-[160px] text-blue-800 text-center text-md p-3 bg-amber-400 border-blue-600 border-[2px]">
                  Frontline Data
                  <br />
                  Solutions
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="w-[240px] p-2 border-blue-600 border-[2px] text-blue-900">
                    <div className="ml-2 text-blue-600 ">
                      <p className="600 text-sm"> {feature.name}</p>
                    </div>
                  </td>
                  {Object.entries(feature.competitors).map(
                    ([key, value], idx) => (
                      <td
                        key={idx}
                        className="w-[160px] p-1 border-blue-600 border-[2px] text-center"
                      >
                        <div className="flex items-center justify-center">
                          {value ? (
                            <LucideCheckCircle className="text-[#2dc043]" />
                          ) : (
                            <XCircle className="text-red-600" />
                          )}
                        </div>
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="inline-block md:hidden w-full text-center mt-5">
          <p className="text-xl font-extrabold text-blue-700 w-full">
            Scroll to right <ArrowRight className="inline-block" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
