import React from "react";
import image2 from "../../assets/aboutimages/image2.jpg";
import Bbutton from "../../components/Bbutton";
import { FaUserCheck } from "react-icons/fa6";

const Main = () => {
  return (
    <>
      <section className=" mt-[40px] max-w-[1127px] m-auto flex flex-col-reverse lg:flex-row  lg:my-[90px] ">
        {/* image first div */}
        <div className="">
          <img
            src={image2}
            alt="DNA image"
            className="w-[345px] pt-2 h-[430px] object-cover lg:w-[456px] lg:h-[606px] rounded-[16px] m-auto"
          />
        </div>
        {/* 2end */}
        <div className="hidden lg:block w-[1px] h-[600px] m-auto relative left-[5%]">
          <hr className="w-full h-full border-none bg-[#43B3E5] shadow-[0_0_10px_#43B3E5]" />
        </div>

        {/* 3rd section */}
        <div className="w-[345px] pt-2 h-[430px] m-auto mb-[100px]">
          <h1 className=" w-[275px] h-[84px] lg:w-[367px]  lg:h-[42px] font-[600] text-[32px] leading-[130%] text-[#002A3C]">
            How Ygeian Focus Works
          </h1>
          {/*  */}
          <div className="w-[286px] h-[71px] my-4 ">
            <FaUserCheck className="w-[32px] my-2 text-[#43B3E5] h-[32px]" />
            <p className="font-[400] text-[18px] leading-[150%] text-[#375E6C]">
              Sign up and select your specialty.
            </p>
          </div>
          <div className="w-[286px] h-[71px] my-4">
            <FaUserCheck className="w-[32px] my-2 text-[#43B3E5] h-[32px]" />
            <p className="font-[400] text-[18px] leading-[150%] text-[#375E6C]">
              Discover a personalized feed of medical news.
            </p>
          </div>
          <div className="w-[286px] h-[71px] my-4">
            <FaUserCheck className="w-[32px] my-2 text-[#43B3E5] h-[32px]" />
            <p className="font-[400] text-[18px] leading-[150%] text-[#375E6C]">
              Use AI to summarize and save articles.
            </p>
          </div>
          <div className="w-[286px] h-[71px] my-4">
            <FaUserCheck className="w-[32px] my-2 text-[#43B3E5] h-[32px]" />
            <p className="font-[400] text-[18px] leading-[150%] text-[#375E6C]">
              Stay informed and share insights with ease.
            </p>
          </div>

          <Bbutton
            BgColor={"bg-[#094B80] my-[40px]"}
            BorderSzie={"rounded-[40px]"}
            text={"Start Tody"}
            textColor={"text-[#ffffff]"}
          />
        </div>
      </section>
      {/* 2nd section */}
      <section className="  bg-[#F8F9FC] py-[80px]">
        <div className="max-w-[1127px] m-auto">
          {/* headding */}
          <h1 className="lg:w-full text-center m-auto leading-[130%] text-[32px] font-[600]">
            Our Impact at a Glance
          </h1>

          {/* down divs */}
          <div className=" flex flex-col items-center gap-5 md:flex md:justify-center md:items-center lg:flex lg:flex-row">
            <div className="py-4">
              <h1 className=" h-[62px] font-[700] text-[48px] leading-[130%] text-[#43B3E5]">
                10,000+
              </h1>
              <p
                className="w-[345px] lg:w-full  pt-2 h-[54px] text-[#375E6C] font-[400] text-[18px] leading-[150%]"
              >
                articles aggregated daily from trusted medical sources.
              </p>
            </div>
            <div className="py-4">
              <h1 className=" h-[62px] font-[700] text-[48px] leading-[130%] text-[#43B3E5]">
              50+
              </h1>
              <p
                className="w-[345px] lg:w-full  pt-2 h-[54px] text-[#375E6C] font-[400] text-[18px] leading-[150%]"
              >
                articles aggregated daily from trusted medical sources.
              </p>
            </div>
            <div className="py-4">
              <h1 className=" h-[62px] font-[700] text-[48px] leading-[130%] text-[#43B3E5]">
              97%
              </h1>
              <p
                className="w-[345px] lg:w-full  pt-2 h-[54px] text-[#375E6C] font-[400] text-[18px] leading-[150%]"
              >
                articles aggregated daily from trusted medical sources.
              </p>
            </div>
            <div className="py-4 ">
              <h1 className=" h-[62px] font-[700] text-[48px] leading-[130%] text-[#43B3E5]">
                10,000+
              </h1>
              <p
                className="w-[345px] lg:w-full pt-2 h-[54px] text-[#375E6C] font-[400] text-[18px] leading-[150%]"
              >
                articles aggregated daily from trusted medical sources.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
