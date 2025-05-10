import React from "react";
import aboutBackground from "../assets/aboutimages/aboutBackground.png";
import about from "../assets/aboutimages/patient.jpg";

// --- DownImage Component ---
const DownImage = () => {
  return (
    <section className="xl:max-w-[1127px]  mt-5 justify-center bg-[#ffffff] mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-8">
      {/* Text Part */}
      <div className="flex flex-col mt-6  max-w-[500px]">
        <h1 className="font-semibold lg-[201px] text-[32px]  leading-[130%] text-[#002A3C]">
          Why We Exist
        </h1>
        <p className="font-normal h-[135px] w-[345px] text-[18px] mt-[12px] leading-[150%] text-[#375E6C]">
          At Ygeian Focus, we simplify how medical professionals consume news.
          By aggregating the latest articles and personalizing them to your
          specialty, we save you time and keep you informed.
        </p>
      </div>

      {/* Image Part */}
      <div className="mt-3">
        <img
          src={about}
          alt="Patient and Doctor"
          className="w-[345px] h-[252px] object-cover  lg:w-[552px] lg:h-[463px] rounded-[16px]"
        />
      </div>
    </section>
  );
};

// --- AboutHero Component ---
const AboutHero = () => {
  return (
    <>
      <section className="relative">
        {/* Background Image */}
        <div className="flex justify-center">
          <img
            src={aboutBackground}
            alt="Doctor checking image"
            className="w-full sm:max-w-[80%] lg:max-w-full h-[416px] lg:h-[700px] object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute top-[15%] left-[10%] sm:left-[15%] lg:left-[13%] lg:top-[27%] text-white w-[80%] max-w-[320px] sm:max-w-[400px] lg:max-w-[600px]">
          {/* Heading */}
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[130%] mb-4">
            Redefining Medical News{" "}
            <span className="block sm:inline">for a Smarter Tomorrow.</span>
          </h1>

          {/* Paragraph */}
          <p className="text-[18px] sm:text-[20px] font-medium leading-[150%] text-[#EDF1F3] mb-6">
            Discover a personalized way to stay informed, powered by AI and
            tailored to your expertise.
          </p>

          {/* Button */}
          <button className="w-full max-w-[290px] lg:w-[180px] h-[48px] flex justify-center items-center rounded-full bg-[#43B3E5] text-white hover:bg-[#3aa3d1] transition-colors">
            Get Started Today
          </button>
        </div>

        {/* Down Image Section */}
      </section>
      <DownImage />
    </>
  );
};

export default AboutHero;
