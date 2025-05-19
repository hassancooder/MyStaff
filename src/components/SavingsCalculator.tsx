import React, { useState } from "react";

const SavingsCalculator: React.FC = () => {
  const [operationalSpend, setOperationalSpend] = useState(205000000);

  const calculateSavings = (spend: number) => {
    const tempStaffCosts = spend * 0.05;
    const clinicalErrors = spend * 0.02;
    const qualityIssues = spend * 0.015;
    const adminOverheads = spend * 0.012;
    const hseProcedures = spend * 0.008;

    const totalSavings =
      tempStaffCosts +
      clinicalErrors +
      qualityIssues +
      adminOverheads +
      hseProcedures;

    return {
      totalSavings,
      tempStaffCosts,
      clinicalErrors,
      qualityIssues,
      adminOverheads,
      hseProcedures,
    };
  };

  const savings = calculateSavings(operationalSpend);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(value);

  const formatRange = (min: number, max: number) =>
    `${formatCurrency(min)} - ${formatCurrency(max)}`;

  return (
    <section
      style={{ backgroundImage: "url('./Savings.png')" }}
      className="py-12 md:py-16 bg-center min-h-[110vh] bg-cover text-white relative overflow-hidden"
    >
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 relative  flex md:flex-row h-[100vh] w-full items-center justify-start">
        <div className="w-full lg:w-1/2 md:pl-10">
          <h2
            className="text-2xl sm:text-3xl  font-bold mb-4 sm:mb-6"
            data-aos="fade-down"
          >
            Estimate Savings with MyStaff app
          </h2>

          <div className="text-start mb-2">
            <img
              src="./line.png"
              alt="Line"
              className="w-[100px] sm:w-[150px] h-full self-start ml-[-10px] sm:ml-[-20px]"
            />
          </div>

          <p
            className="mb-4 sm:mb-6 text-sm sm:text-base"
            data-aos="fade-right"
          >
            Use the slider to input your organisation's
            <br className="hidden sm:block" />
            operational spend and see estimated savings.
          </p>

          <div className="mb-6 sm:mb-8">
            <p className="mb-2 text-sm sm:text-base" data-aos="fade-right">
              Operational Spend (£0 - £400M)
            </p>
            <div className="flex items-center">
              <p
                className="text-lg sm:text-2xl font-bold"
                data-aos="fade-right"
              >
                {formatCurrency(operationalSpend)}
              </p>
            </div>
            <input
              type="range"
              aria-label="Operational Spend Slider"
              min="0"
              max="400000000"
              step="5000000"
              value={operationalSpend}
              onChange={(e) => setOperationalSpend(Number(e.target.value))}
              className="w-full h-[3px] bg-white rounded-lg appearance-none cursor-pointer mt-3 accent-yellow-400"
            />
          </div>

          <div
            data-aos="zoom-in"
            className="bg-white text-blue-900 rounded-lg p-4 sm:p-6 shadow-lg transition-transform hover:scale-[1.01] max-w-full sm:max-w-xl text-sm sm:text-base"
          >
            <p className="font-bold text-base sm:text-lg mb-4">
              Total Estimated Annual Savings:{" "}
              {formatRange(
                savings.totalSavings * 0.9,
                savings.totalSavings * 1.1
              )}
            </p>

            <p className="font-semibold mb-2">Category Breakdown:</p>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li className="flex justify-between">
                <span>Temporary Staff Costs:</span>
                <span>
                  {formatRange(
                    savings.tempStaffCosts * 0.85,
                    savings.tempStaffCosts * 1.05
                  )}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Clinical Errors:</span>
                <span>
                  {formatRange(
                    savings.clinicalErrors * 0.9,
                    savings.clinicalErrors * 1.1
                  )}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Quality Issues:</span>
                <span>
                  {formatRange(
                    savings.qualityIssues * 0.9,
                    savings.qualityIssues * 1.1
                  )}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Admin / Governance Overheads:</span>
                <span>
                  {formatRange(
                    savings.adminOverheads * 0.95,
                    savings.adminOverheads * 1.15
                  )}
                </span>
              </li>
              <li className="flex justify-between">
                <span>H&S/HSE Compliance:</span>
                <span>
                  {formatRange(
                    savings.hseProcedures * 0.9,
                    savings.hseProcedures * 1.1
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
