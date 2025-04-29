import React from "react";
import Bbutton from "./Bbutton";

const HomeBottom = () => {
  return (
    <>
    <section className="flex justify-center items-center flex-col my-[120px]">
  <div className="flex flex-col justify-center items-center gap-4">
    <h1 className="w-[334px] lg:w-[504px] lg:h-[104px] leading-[130%] font-[600] text-[#002A3C] text-center text-[40px] ">
      Want
      <br className="lg:hidden" />
      personalized <br className="lg:hidden" />
      updates <br />
      for your <br className="lg:hidden" />
      specialty?
    </h1>
    <p className="w-[272px] text-[#375E6C] text-[18px] leading-[130%] text-center mb-6">
      Sign Up to customize your feed.
    </p>
    <Bbutton 
    BgColor={"bg-[#132D5E]"} 
    text={"Sign Up for Free"}
    textColor={"text-[#ffffff]"}/>
  </div>
</section>

    </>
  );
};

export default HomeBottom;
