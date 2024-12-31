/* eslint-disable react/prop-types */
import { useState } from "react";

const PricingToggle = ({ onToggle }) => {
  const [activeOption, setActiveOption] = useState("monthly");

  const handleToggle = (option) => {
    setActiveOption(option);
    onToggle(option === "monthly");
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="relative bg-gray-200 p-1 rounded-full w-64 h-12">
        {/* Slider Background */}
        <div
          className={`g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500 ${
            activeOption === "annually" ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>

        {/* Buttons */}
        <div className="relative z-10 flex justify-between items-center h-full">
          <button
            className={`w-1/2 h-full text-center text-sm font-medium rounded-full transition-colors duration-300 ${
              activeOption === "monthly" ? "text-white" : "text-gray-600"
            }`}
            onClick={() => handleToggle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`w-1/2 h-full text-center text-sm font-medium rounded-full transition-colors duration-300 ${
              activeOption === "annually" ? "text-white" : "text-gray-600"
            }`}
            onClick={() => handleToggle("annually")}
          >
            Annually
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingToggle;
