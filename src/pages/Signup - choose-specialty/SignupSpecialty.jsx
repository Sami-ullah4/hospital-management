import React from "react";
import Navbar from "../../components/Navbar";
import gradient from "../singup/components/gradient.png";
import background from "./components/background.jpg";
import Footer from "../../components/Footer";
import SpecialtiesComponentes from "../../components/SpecialtiesComponentes";

const SignupSpecialty = () => {
  return (
    <>
      <Navbar />
      <section className="flex w-[100%]">
        {/* first div */}
        <div className="flex  flex-col justify-center m-auto gap-3 ">
          <h1 className="lg:max-w-[549px] font-[600]  text-[24px] lg:text-[40px] leading-[150%] text-[#002A3C] ">
            Welcome to Ygeian FOCUS
          </h1>
          <p className="font-[400] text-[16px] leading-[150%] text-[#375E6C] lg:max-w-[549px]">
            Choose your specialty to customize your feed. You can adjust your
            preferences later.
          </p>

          {/* Main content container */}
  <div className="bg-white flex flex-col w-[300px] md:w-full justify-center gap-3 lg:gap-6 lg:max-w-[549px]">
    <SpecialtiesComponentes />
    <button className="bg-[#132D5E] rounded-full text-white md:w-full w-[300px] p-3">
      Continue
    </button>
  
</div>

        </div>
        {/* 2nd div */}
        <div className="relative w-full lg:w-[50%] h-[300px] lg:h-[100vh] hidden lg:block">
          <img
            src={background}
            alt="cover image"
            className="w-full h-full object-cover"
          />
          <img
            src={gradient}
            alt="gradient"
            className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
          />
          <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center font-[600] text-[40px] leading-[130%] z-20 px-4 lg:max-w-[100%] xl:max-w-[50%]">
            "The latest medical news—personalized for you."
          </h1>
        </div>
      </section>
      {/*  */}
      {/*  */}
      {/*  */}

      <Footer />
    </>
  );
};

export default SignupSpecialty;
