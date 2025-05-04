import React from "react";
import Bbutton from "./Bbutton";

const HomeBottom = () => {
  return (
    <section className="flex justify-center items-center flex-col my-16 md:my-24 lg:my-32 px-4">
      <div className="flex flex-col justify-center items-center gap-6 md:gap-8 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-[40px] font-semibold text-[#002A3C] leading-tight md:leading-tight lg:leading-tight">
          Want personalized updates{" "}
          <br className="hidden md:inline lg:hidden" />
          for your specialty?
        </h1>
        
        <p className="text-[#375E6C] text-lg md:text-xl leading-relaxed md:max-w-[480px] lg:max-w-[600px] mb-8 md:mb-12">
          Sign Up to customize your feed.
        </p>
        
        <div className="w-full md:w-auto">
          <Bbutton 
          to='/singup'
            BgColor="bg-[#132D5E] hover:bg-[#1a3f7a] transition-colors duration-200"
            text="Sign Up for Free"
            textColor="text-white"
            className="w-full md:w-auto py-3 px-8 md:py-4 md:px-12 text-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBottom;