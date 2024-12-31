import { useState } from "react";
import PricingToggle from "./PricingToggle";
import { plans } from "../../constants/index";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  const handleToggle = (isMonthly) => {
    setMonthly(isMonthly);
  };

  return (
    <section>
      <div className="container">
        {/* Header */}
        <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
          <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
            Flexible pricing for teams of all sizes
          </h3>
          <PricingToggle onToggle={handleToggle} />
        </div>

        {/* Plans Section */}
        <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
            >
              {/* Highlight Plan */}
              {index === 1 && (
                <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
              )}

              {/* Logo */}
              <div
                className={`absolute left-0 right-0 z-2 flex items-center justify-center ${
                  index === 1 ? "-top-6" : "-top-6 xl:-top-11"
                }`}
              >
                <img
                  src={plan.logo}
                  alt={plan.title}
                  className={`object-contain drop-shadow-2xl ${
                    index === 1 ? "size-[120px]" : "size-[88px]"
                  }`}
                />
              </div>

              {/* Plan Details */}
              <div className="relative flex flex-col items-center pt-12">
                <div
                  className={`small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase ${
                    index === 1 ? "border-p3 text-p3" : "border-p1 text-p1"
                  }`}
                >
                  {plan.title}
                </div>
                <div className="relative z-2 flex items-center justify-center">
                  <div className="h-num flex items-start text-p4">
                    ${monthly ? plan.priceMonthly : plan.priceYearly}
                  </div>
                  <div className="small-1 relative top-3 ml-1 uppercase">
                    / mo
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="mx-auto space-y-4 xl:px-7">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="relative flex items-center gap-5"
                  >
                    <img
                      src="/images/check.png"
                      alt="check"
                      className="size-10 object-contain"
                    />
                    <p className="flex-1">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Action */}
              <div className="mt-10 flex w-full justify-center">
                <button className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                  Get Started
                </button>
              </div>

              {index === 1 && (
                <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                  Limited time offer
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
