import React, { useState } from "react";

const SavingsCalculator: React.FC = () => {
  const [operationalSpend, setOperationalSpend] = useState(200000000);

  const categories = [
    { name: "Agency / Temp Labour Costs", proportion: 0.12, lowRate: 0.05, highRate: 0.10 },
    { name: "Maintenance & Operational Downtime", proportion: 0.30, lowRate: 0.02, highRate: 0.05 },
    { name: "Training & Certification", proportion: 0.10, lowRate: 0.08, highRate: 0.10 },
    { name: "Administrative Overheads", proportion: 0.08, lowRate: 0.05, highRate: 0.10 },
    { name: "Compliance / Safety Risk Costs", proportion: 0.10, lowRate: 0.03, highRate: 0.05 },
    { name: "Quality Control / Rework Costs", proportion: 0.20, lowRate: 0.02, highRate: 0.05 },
  ];

  const calculateSavings = (spend: number) => {
    let totalLow = 0;
    let totalHigh = 0;
    const breakdown: { name: string; low: number; high: number }[] = [];

    categories.forEach((cat) => {
      const catSpend = spend * cat.proportion;
      const low = catSpend * cat.lowRate;
      const high = catSpend * cat.highRate;
      totalLow += low;
      totalHigh += high;
      breakdown.push({ name: cat.name, low, high });
    });

    return { totalLow, totalHigh, breakdown };
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
      <div className="container mx-auto sm:px-6 lg:px-10">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 relative flex md:flex-row h-[100vh] w-full items-center justify-start">
        <div className="w-full lg:w-1/2 md:pl-10">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
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
              step="1000000"
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
              {formatRange(savings.totalLow, savings.totalHigh)}
            </p>

            <p className="font-semibold mb-2">Category Breakdown:</p>
            <ul className="space-y-1 text-xs sm:text-sm">
              {savings.breakdown.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}:</span>
                  <span>{formatRange(item.low, item.high)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;