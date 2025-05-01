import React from "react";
import FilterButton from "../../filterpage/components/FilterButton";
import { FaFacebookF } from "react-icons/fa";
import image1 from "../../../assets/homeimage/image1.jpg";

const Hero = () => {
  return (
    <>
      <section className="bg-[#F8F9FC] max-w-[1127px] m-auto">
        <div className="">
          {/* first div */}
          <div className="w-[181px] bg-white h-[30px] rounded-full flex justify-between m-auto  items-center my-6">
            <div className="  ">
              <FilterButton label={"Cardiology"} classes={"h-[26px]"} />
            </div>
            <div className="w-[71px] h-[18px] font-[400] text-[14px] leading-[130%] text-[#375E6C]">
              3 min read
            </div>
          </div>
          {/* second div */}
          <div className="w-[345px] m-auto lg:m-0 ">
            {" "}
            <h1 className="font-[600] text-[32px] leading-[130%] h-[135px] text-[#002A3C]">
              New Breakthrough in Cancer Immunotherapy Treatment
            </h1>
          </div>
          <div className="w-[345px] m-auto text-[18px] font-[400] leading-[150%] tex-[#375E6C]">
            Recent immunotherapy breakthroughs harness the immune system,
            offering hope for more effective cancer treatments beyond
            traditional chemotherapy and radiation.
          </div>
          {/* </div>3rd div */}

          <div className="flex justify-center items-center">
            <div className="w-[48px] h-[48px] rounded-[8px] border-[1px] border-[#D6E0E4] items-center flex justify-center gap-[12px]">
              <FaFacebookF className="text-[#96A7AD] w-[9.32px] h-[20px]" />
              <FaFacebookF className="text-[#96A7AD] w-[9.32px] h-[20px]" />
              <FaFacebookF className="text-[#96A7AD] w-[9.32px] h-[20px]" />
            </div>
            <div className="bg-white p-4 flex justify-center items-center">
              <button className="w-[132px] h-[48px] rounded-[8px] border border-[#D6E0E4] text-[14px] leading-[130%] font-medium">
                Copy link
              </button>
            </div>
          </div>
          <div className="">
            <img
              src={image1}
              alt=""
              className="object w-[345px] h-[240px] "
            />
            <button
              className="bg-[#43B3E5] W-[345px] H-[56.18px] text-[500] text-[18px] leading-[100%]"
            >Summarize Now</button>
          </div>

          <div className="">
            <p>Written by</p>
            <p>Dr. Emily Johnson, MD, Oncology Specialist</p>
            <p>Published by</p>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
