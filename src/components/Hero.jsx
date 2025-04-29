import React from "react";
import Bbutton from "./Bbutton";
import { TbFilter } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";

const Hero = () => {
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center m-auto text-center">
          <div className=" py-9">
            <h1 className="max-w-[20ch] sm:max-w-[35ch] md:max-w-none mx-auto font-[600px] text-[40px] leading-[130%] text-[#002A3C]">
              Stay Ahead
              <br className="lg:hidden" />
              in Medicine with
              <br className=" md:block" />
              Personalized News
            </h1>
            <p className="w-[308px] h-[69px] font-[400px] lg:w-[674px] lg:h-[23px] pt-3 text-[18px] leading-[130%] text-[#375E6C] ">
              Get daily updates from your field of <br className=" lg:hidden" />
              expertise, summarized and tailored <br className="lg:hidden" />
              for you.
            </p>
            <div className=" lg:flex lg:gap-6 lg:justify-center">
              <Bbutton
                BgColor={"bg-[#132D5E]"}
                text={"Sign up for Free"}
                margin={"mt-[42px] lg:mt-8"}
                textColor={"text-white"}
              />
              <Bbutton
                BgColor={"bg-[#F8F9FC]"}
                text={"Learn More"}
                BorderSzie={"border-[1px]"}
                BorderColor={"border-[#43B3E5]"}
                margin={"mt-[19px] lg:mt-8"}
                textColor={"text-[#43B3E5]"}
              />
            </div>
          </div>
          <div className="flex justify-between  gap-4 mt-7 lg:mt-9 xl:w-[1127px] lg:w-[980px] w-[361px]">
            <div>
              <button className="w-[168px] h-[48px] border border-[#AFC1C9] rounded-[12px] bg-[#F8F9FC] flex justify-center items-center gap-2">
                <TbFilter /> Filter
              </button>
            </div>
            <div>
              <button className="w-[168px] h-[48px] border border-[#AFC1C9]  rounded-[12px] bg-[#F8F9FC] flex justify-center items-center gap-9 flex-row-reverse lg:w-[231px]">
                <RiArrowDropDownLine className="w-[20px] h-[20px]" />
                <span className="block lg:hidden">Filter</span>
                <span className="hidden lg:block">Sort by: Most Recent</span>
              </button>
            </div>
          </div>
          <hr className="bg-[#DBE5E9] xl:w-[1127px]  h-[1px] my-4 " />
        </div>
      </section>
    </>
  );
};

export default Hero;
