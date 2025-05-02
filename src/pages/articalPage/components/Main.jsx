import React from "react";
import FilterButton from "../../filterpage/components/FilterButton";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
import image1 from "../../../assets/homeimage/image1.jpg";
import Lastsection from "./Lastsection";
import star from "../../../assets/stars.png";

const Main = () => {
  return (
    <>
      <section className="w-[85%] m-auto py-[55px]">
        <div className="flex flex-col gap-[15px]">
          <div className="w-[181px] bg-white h-[30px] rounded-full flex justify-between   items-center ">
            <div>
              <FilterButton label={"Cardiology"} classes={"h-[26px]"} />
            </div>
            <div className="w-[71px] h-[18px] font-[400] text-[14px] leading-[130%] text-[#375E6C]">
              3 min read
            </div>
          </div>

          <h1 className="w-[98%]  font-[600] text-[32px] sm:text-[40px] leading-[130%] text-[#002A3C]">
            New Breakthrough in Cancer <br className="hidden sm:block" />
            Immunotherapy Treatment
          </h1>

          <p className="w-[98%]  ">
            Recent immunotherapy breakthroughs harness the immune system,
            offering hope for <br className="hidden sm:block" /> more effective
            cancer treatments beyond traditional chemotherapy and radiation.
          </p>
          <div className=" flex justify-between items-center  lg:hidden ">
            <div className="flex gap-5">
              <div className="w-[40px] h-[40px] bg-white flex justify-center  rounded-[8px] border-[1px] border-[#D6E0E4]  items-center">
                <FaFacebookF className="text-[#96A7AD] w-[20px] h-[20px]" />
              </div>
              <div className="w-[40px] h-[40px] bg-white flex justify-center  rounded-[8px] border-[1px] border-[#D6E0E4]  items-center">
                <FaXTwitter className="text-[#96A7AD] w-[20px] h-[20px]" />
              </div>
              <div className="w-[40px] h-[40px] bg-white flex justify-center  rounded-[8px] border-[1px] border-[#D6E0E4]  items-center">
                <FaLinkedin className="text-[#96A7AD] w-[20px] h-[20px]" />
              </div>
            </div>
            <div className="">
              <button className="w-[100px] md:w-[132px] h-[48px] rounded-[8px] border border-[#D6E0E4] text-[14px] leading-[130%] font-medium flex justify-center items-center gap-2">
                <LuCopy /> Copy link
              </button>
            </div>
          </div>
          <img
            src={image1}
            alt=""
            className="w-[95%] m-auto md:w-[100%] h-[60vh] lg:h-[76vh] object-cover rounded-[16px]"
          />

          <div className="mt-[-30px] bg-white w-[100%] lg:hidden h-[94px] flex justify-center items-center">
            <div className="flex justify-center gap-2 items-center bg-[#43B3E5] text-white w-[95%] md:w-[70%] m-auto rounded-full h-[50.18px]">
              <FaLinkedin />
              <span className=" text-white  md:w-[214px] h-[26px] font-[600] text-[20px] leading-[130%] ">
                AI Content Summarizer
              </span>
            </div>
          </div>
        </div>
        {/* 2nd div */}
        <div className="hidden lg:flex justify-between items-center py-5">
          <div className="flex gap-[60px]">
            <div className="">
              <p className="font-[600] text-[14px] leading-[150%] text-[#96A7AD]">
                Written by
              </p>
              <h1 className="font-[400] text-[16px] leading-[150%] text-[#002A3C]">
                Dr. Emily Johnson, MD, <br />
                Oncology Specialist
              </h1>
            </div>
            <div className="">
              <p className="font-[600] text-[14px] leading-[150%] text-[#96A7AD]">
                Published by
              </p>
              <h1 className="font-[400] text-[16px] leading-[150%] text-[#002A3C]">
                Medscape
              </h1>
            </div>
            <div className="">
              <p className="font-[600] text-[14px] leading-[150%] text-[#96A7AD] ">
                Date of publication
              </p>
              <h1 className="font-[400] text-[16px] leading-[150%] text-[#002A3C]">
                18 Jan 2025
              </h1>
            </div>
          </div>
          <div className=" flex flex-row-reverse justify-center items-center gap-[10px] ">
            <div className="w-[40px] h-[40px] bg-white flex justify-center  rounded-[8px] border-[1px] border-[#D6E0E4]  items-center">
              <FaFacebookF className="text-[#96A7AD] w-[20px] h-[20px]" />
            </div>
            <div className="w-[40px] h-[40px] bg-white flex justify-center  rounded-[8px] border-[1px] border-[#D6E0E4]  items-center">
              <FaXTwitter className="text-[#96A7AD] w-[20px] h-[20px]" />
            </div>
            <div className="w-[40px] h-[40px] bg-white flex justify-center  rounded-[8px] border-[1px] border-[#D6E0E4]  items-center">
              <FaLinkedin className="text-[#96A7AD] w-[20px] h-[20px]" />
            </div>
            <div className="">
              <button className="w-[116px] h-[40px] rounded-[8px] border border-[#D6E0E4] text-[14px] leading-[130%] font-medium flex justify-center items-center gap-2">
                <LuCopy /> Copy link
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-[100%] ">
          <div className="">
            <div className=" m-auto lg:m-0 lg:w-[90%]  my-[30px] text-[27px] leading-[130%] text-[#002A3C] font-[600]">
              <h1>The Role of Immunotherapy in Cancer Treatment</h1>
              <p className=" my-[20px] font-[400] text-[18px] leading-[170%] text-[#375E6C]">
                Immunotherapy works by stimulating the body’s immune system to
                recognize and destroy cancer cells. Unlike chemotherapy, which
                attacks both healthy and cancerous cells, immunotherapy
                specifically targets the cancer cells, reducing damage to
                healthy tissue and minimizing side effects. In the past decade,
                immunotherapy has revolutionized the treatment of several types
                of cancer, including melanoma, lung cancer, and certain blood
                cancers. Drugs such as immune checkpoint inhibitors, CAR T-cell
                therapies, and cancer vaccines have already been making
                significant impacts on survival rates and quality of life for
                many cancer patients.
              </p>
            </div>
            {/*  */}
            <div className="  lg:m-0 lg:w-[90%]  my-[30px] text-[27px] leading-[130%] text-[#002A3C] font-[600]">
              <h1>The Recent Breakthrough</h1>
              <p className="my-[20px] font-[400] text-[18px] leading-[170%] text-[#375E6C]">
                This latest breakthrough focuses on a novel type of immune
                checkpoint inhibitor, which is designed to overcome the
                resistance that some tumors develop to existing immunotherapies.
                Researchers have identified a unique biomarker that could
                predict which patients will respond better to treatment,
                allowing for more personalized and effective treatment plans.
                The new immune checkpoint inhibitor works by blocking a
                different protein from the one targeted by current therapies,
                allowing the immune system to attack tumors more effectively.
                Clinical trials have shown promising results, with patients
                experiencing significant tumor shrinkage and long-term
                remission, even in cases where previous treatments had failed.
              </p>
            </div>
            {/*  */}
            <div className="m-auto  lg:m-0 lg:w-[90%]  my-[30px] text-[27px] leading-[130%] text-[#002A3C] font-[600]">
              <h1>Implications for the Future of Cancer Treatment</h1>
              <p className="   my-[20px] font-[400] text-[18px] leading-[170%] text-[#375E6C]">
                The success of this breakthrough could mark the beginning of a
                new era in cancer treatment. By enhancing the body’s immune
                response to cancer, it could lead to treatments that are not
                only more effective but also less toxic, improving the overall
                quality of life for patients. In addition to offering a
                potential cure for more aggressive cancers, this innovation is
                likely to pave the way for combination therapies, where
                immunotherapy is used alongside other treatments such as
                chemotherapy, radiation, or targeted therapies. This could help
                fight a wider range of cancers and increase the chances of
                remission.
              </p>
            </div>
            {/*  */}
            <div className="  m-auto  lg:m-0 lg:w-[90%]  my-[30px] text-[27px] leading-[130%] text-[#002A3C] font-[600]">
              <h1>What This Means for Patients</h1>
              <p className="  my-[20px]  font-[400] text-[18px] leading-[170%] text-[#375E6C]">
                For patients, this breakthrough represents a beacon of hope.
                While much work remains to be done before it becomes widely
                available, the results of the clinical trials have been
                extremely promising. If the treatment proves successful in
                larger trials, it could become a routine part of cancer care,
                offering new options for patients who previously had limited
                choices. Additionally, the ability to personalize treatment
                based on specific biomarkers could lead to more tailored and
                effective approaches to cancer treatment. This would allow
                doctors to select the best possible therapy based on individual
                patient characteristics, leading to better outcomes and fewer
                side effects.
              </p>
            </div>
            {/*  */}
            <div className=" m-auto lg:m-0 lg:w-[90%]  my-[30px] text-[27px] leading-[130%] text-[#002A3C] font-[600]">
              <h1>Conclusion</h1>
              <p className="my-[20px]  font-[400] text-[18px] leading-[170%] text-[#375E6C]">
                The recent advances in cancer immunotherapy are nothing short of
                groundbreaking. With the potential to significantly improve
                patient outcomes and reduce treatment side effects, this new
                immune checkpoint inhibitor could change the landscape of cancer
                treatment. As research continues to evolve, the hope is that we
                will see even more innovations in immunotherapy, providing
                cancer patients with the best possible chance at long-term
                remission and, ultimately, a cure.
              </p>
            </div>
          </div>

          <div className=" hidden lg:flex  flex-col    w-[320px] h-[562px] border-[1px] rounded-[16px] bg-white border-[#D6E0E4] ">
            <div className="p-6">
              <div className="flex justify-center items-center">
                <img src={star} alt="" />
                <span className=" text-[#002A3C] w-[214px] h-[26px] font-[600] text-[20px] leading-[130%] ">
                  AI Content Summarizer
                </span>
              </div>
              <p className="my-9 m-auto text-[#375E6C] w-[272px] h-[48px] ">
                Summarize articles quickly with AI – for faster reading and key
                insights.
              </p>
              <div className="gap-9 flex-col">
                <div className="">
                  <span className="font-[600] text-[14px] leading-[150%]  text-[#96A7AD] ">
                    Length:
                  </span>
                  <div className="flex gap-9  my-2">
                    <div className="gap-1 flex">
                      <input type="radio" />
                      <strong className="text-[#96A7AD] font-[400] text-[16px] leading-[150%]">
                        Short
                      </strong>
                    </div>
                    <div className="gap-1  flex">
                      <input type="radio" />
                      <strong className="text-[#96A7AD] font-[400] text-[16px] leading-[150%]">
                        Medium
                      </strong>
                    </div>
                    <div className="gap-1  flex">
                      <input type="radio" />
                      <strong className="text-[#96A7AD] font-[400] text-[16px] leading-[150%]">
                        Long
                      </strong>
                    </div>
                  </div>
                </div>
                <div className=" my-4">
                  <span className="font-[600] text-[14px] leading-[150%]  text-[#96A7AD] ">
                    Length:
                  </span>
                  <div className="flex gap-9 my-2">
                    <div className="gap-1 flex">
                      <input type="radio" />
                      <strong className="text-[#96A7AD] font-[400] text-[16px] leading-[150%]">
                        Professional
                      </strong>
                    </div>
                    <div className="gap-1  flex">
                      <input type="radio" />
                      <strong className="text-[#96A7AD] font-[400] text-[16px] leading-[150%]">
                        Informal
                      </strong>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="">
                  <p className="text-[#96A7AD] font-[400] text-[16px] leading-[150%] ">
                    Language:
                  </p>
                  <input
                    type="text"
                    className="w-[100%] h-[46px] border-[1px] bg-white my-2 placeholder:text-[#375E6C] border-[#D6E0E4] placeholder:font-[500] placeholder:text-[16px] placeholder:leading-[100%]"
                    placeholder="Select language"
                  />
                </div>

                {/* i have to workfrom here */}
                <div className="flex justify-center items-center bg-[#43B3E5] rounded-full h-[40px] text-white">
                <img src={star} alt="" className="text-[#5a4343] bg-white" />
                <span className="  w-[214px] h-[26px] font-[600] text-[20px] leading-[130%] text-white">
                  AI Content Summarizer
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Lastsection />
    </>
  );
};

export default Main;
