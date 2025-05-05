import React from "react";
import ProfileNav from "./ProfileNav";
import ProfileCatagories from "./ProfileCatagories";
import tick from "./icons/tick.png";

const Billing = () => {
  return (
    <>
      <ProfileNav />
      <div className="flex flex-col lg:flex-row m-auto">
        {/* Categories sidebar */}
        <div>
          <ProfileCatagories />
        </div>

        {/* Main content */}
        <div className="flex flex-col gap-7 w-full lg:w-[70%] lg:m-auto p-1 my-1">
          <h1 className="font-[600] text-[32px] leading-[130%] text-[#002A3C]">
            Get full access to all features
          </h1>

          <div className="flex gap-4 flex-wrap">
            {/* Free Plan Card */}
            <div className="flex m-auto lg:m-0 flex-col max-w-[360px] p-7 gap-6 rounded-[16px] border border-[#D6E0E4]">
              <div className="gap-1 flex flex-col">
                <div className="flex justify-between items-center">
                  <h1 className="font-[600] text-[24px] leading-[130%] text-[#002A3C]">
                    Starter plan
                  </h1>
                  <span className="inline-block px-2 py-[2px] text-[#43B3E5] bg-[#E7F6FD] rounded-full text-[10px] font-[400]">
                    Current plan
                  </span>
                </div>
                <p className="font-[400] text-[16px] leading-[130%] text-[#375E6C]">
                  Stay informed, stay updated.
                </p>
              </div>
              
              <h1 className="font-[600] text-[32px] leading-[130%] text-[#002A3C]">
                Free
              </h1>
              
              <button className="bg-[#71C0E4] font-[500] text-[18px] leading-[100%] text-white rounded-full p-3 w-full flex justify-center">
                Selected plan
              </button>

              <div>
                <p className="mb-3 font-[600] text-[12px] leading-[130%] text-[#96A7AD]">
                  WHAT YOU GET
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "Access to Latest Medical News",
                    "Bookmark Articles",
                    "Limited Article Summaries",
                    "Basic Search Functionality"
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <img src={tick} alt="✓" className="w-[16px] h-[16px]" />
                      <p className="font-[400] text-[16px] leading-[130%] text-[#002A3C]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Plan Card */}
            <div className="flex flex-col max-w-[360px] p-7 gap-6 rounded-[16px] border-1 m-auto lg:m-0 border-[#D6E0E4] bg-[#ffffff]">
              <div className="gap-1 flex flex-col">
                <div className="flex justify-between items-center">
                  <h1 className="font-[600] text-[24px] leading-[130%] text-[#002A3C]">
                    Premium plan
                  </h1>
                  
                </div>
                <p className="font-[400] text-[16px] leading-[130%] text-[#375E6C]">
                  Unlock full potential.
                </p>
              </div>
              
              <div className="flex gap-4">
                <h1 className="font-[600] text-[32px] leading-[130%] text-[#002A3C]">
                  $8
                </h1>
                <p className="text-[#375E6C] font-[400] text-[12px] leading-[130%] mt-1">per month,<br /> billed yearly</p>
              </div>

              <button className="bg-[#43B3E5] font-[500] text-[18px] leading-[100%] text-white rounded-full p-3 w-full flex justify-center hover:bg-[#3699C3] transition">
                Upgrade Now
              </button>

              <div>
                <p className="mb-3 font-[600] text-[12px] leading-[130%] text-[#96A7AD]">
                  WHAT YOU GET
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "All Free Plan Features",
                    "Unlimited Article Summaries",
                    "In-depth Article Explanations",
                    "AI-Generated Insights",
                    "Advanced Search Filters",
                    "Ad-Free Experience"
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <img src={tick} alt="✓" className="w-[16px] h-[16px]" />
                      <p className="font-[400] text-[16px] leading-[130%] text-[#002A3C]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;