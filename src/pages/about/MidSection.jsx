import React from "react";
import { FaFileInvoice } from "react-icons/fa6";
const MidSection = () => {
  return (
    <>
      <section className="bg-[#F8F9FC] max-h-[1156px] lg:max-h-[590px]">

        <div className="flext justify-center pt-9">
          <h1 className="lg:w-[335px] max-w-[225px]  lg:h-[42px] leading-[130%] font-[600] text-[32px] m-auto text-center pt-4">
            What Makes Us <br /> Unique
          </h1>
        </div>
        <div className="m-auto flex pt-8 lg:py-[100px] flex-col lg:flex-row gap-6 max-w-[1127px]">
          <div className="w-[345px] lg:w-[264px] lg:h-[268px] pb-3 rounded-[12px] m-auto h-[218px] bg-[#ffffff] flex flex-col text-center">
            <FaFileInvoice className="w-[32.5px] h-[37.5px] text-[#43B3E5] m-auto" />
            <p className="leading-[130%] text-[20px]  font-[600]">
              Specialty-Focused News Feed
            </p>
            <p className="font-[400] text-[16px] leading-[150%]  py-3">
              Stay up-to-date with articles tailored to your field.
            </p>
          </div>
          <div className="w-[345px] lg:w-[264px] lg:h-[268px] pb-3 rounded-[12px] m-auto h-[218px] bg-[#ffffff] flex flex-col text-center">
            <FaFileInvoice className="w-[32.5px] h-[37.5px] text-[#43B3E5] m-auto" />
            <p className="leading-[130%] text-[20px]  font-[600]">
              Specialty-Focused News Feed
            </p>
            <p className="font-[400] text-[16px] leading-[150%]  py-3">
              Stay up-to-date with articles tailored to your field.
            </p>
          </div>
          <div className="w-[345px] lg:w-[264px] lg:h-[268px] pb-3 rounded-[12px] m-auto h-[218px] bg-[#ffffff] flex flex-col text-center">
            <FaFileInvoice className="w-[32.5px] h-[37.5px] text-[#43B3E5] m-auto" />
            <p className="leading-[130%] text-[20px]  font-[600]">
              Specialty-Focused News Feed
            </p>
            <p className="font-[400] text-[16px] leading-[150%]  py-3">
              Stay up-to-date with articles tailored to your field.
            </p>
          </div>
          <div className="w-[345px] mb-[25px] lg:w-[264px] lg:h-[268px] pb-3 rounded-[12px] m-auto h-[218px] bg-[#ffffff] flex flex-col text-center">
            <FaFileInvoice className="w-[32.5px] h-[37.5px] text-[#43B3E5] m-auto" />
            <p className="leading-[130%] text-[20px]  font-[600]">
              Specialty-Focused News Feed
            </p>
            <p className="font-[400] text-[16px]  leading-[150%]  py-3">
              Stay up-to-date with articles tailored to your field.
            </p>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default MidSection;
