import React, { useEffect, useRef, useState } from "react";
import Bbutton from "./Bbutton";
import { TbFilter } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { cardData } from "./dummyData";
import { BiCog } from "react-icons/bi";

const Hero = ({ resiveData }) => {
  const [cardShow, setCardShow] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const CardRef = useRef(null);
  const buttonRef = useRef(null);

  // //////
  const handleMostRecent = (item) => {
    setActive(item);
    const mostRecent = cardData.filter((card) => card.category.includes(item));
    resiveData(mostRecent);
  };

  //////

  useEffect(() => {
    setCardShow(false);
  }, [location]);

  const handleCard = () => {
    setCardShow((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        CardRef.current &&
        !CardRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setCardShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="bg-[#F8F9FC]">
        <div className="flex flex-col justify-center items-center m-auto w-[85%] text-center">
          <div className=" py-[50px]">
            <h1 className="max-w-[20ch] sm:max-w-[35ch] md:max-w-none mx-auto font-[600px] text-[40px] leading-[130%] text-[#002A3C]">
              Stay Ahead
              <br className="lg:hidden" />
              in Medicine with
              <br className=" md:block" />
              Personalized News
            </h1>
            <p className="lg:pt-5 w-[308px] h-[69px] font-[400px] lg:w-[674px] lg:h-[23px]  text-[18px] leading-[130%] text-[#375E6C] ">
              Get daily updates from your field of <br className=" lg:hidden" />
              expertise, summarized and tailored <br className="lg:hidden" />
              for you.
            </p>
            <div className=" lg:flex lg:gap-6 lg:justify-center mt-5">
              <Bbutton
                to="/singup"
                BgColor={"bg-[#132D5E]"}
                text={"Sign up for Free"}
                margin={"mt-[42px] lg:mt-8"}
                textColor={"text-white"}
              />
              <Bbutton
                to="/article" // 👈 this makes it a link
                BgColor="bg-[#F8F9FC]"
                text="Learn More"
                BorderSzie="border-[1px]"
                BorderColor="border-[#43B3E5]"
                margin="mt-[19px] lg:mt-8"
                textColor="text-[#43B3E5]"
              />
            </div>
          </div>
          <div className="flex justify-between  gap-4 mt-7 lg:mt-9 w-full ">
            <div>
              <Link
                to="/filter"
                className="w-[150px] sm:w-[168px] h-[48px] border border-[#AFC1C9] rounded-[12px] bg-[#F8F9FC] flex justify-center items-center gap-2"
              >
                <TbFilter /> Filter
              </Link>
            </div>
            <div className="relative inline-block">
              <button
                ref={buttonRef}
                onClick={handleCard}
                className="w-[150px] sm:w-[168px] lg:w-[231px] h-[48px] border border-[#AFC1C9] rounded-[12px] bg-[#F8F9FC] flex justify-center items-center gap-9 flex-row-reverse"
              >
                <RiArrowDropDownLine
                  className={`text-[35px] transform transition-transform duration-300 ${
                    cardShow ? "rotate-180" : "rotate-0"
                  }`}
                />
                <span className="block lg:hidden">Sort by:</span>
                <span className="hidden lg:block">Sort by: Most Recent</span>
              </button>
              {cardShow && (
                <div
                  ref={CardRef}
                  className="w-[150px] sm:w-[168px] lg:w-[231px] absolute  top-[90%] left-[0] mt-2 bg-[#F8F9FC] z-10  border border-[#D6E0E4] rounded-md shadow-md"
                >
                  <ul className="flex flex-col gap-3 text-start p-2">
                    {[
                      "Most Recent",
                      "Most Relevant",
                      "Most Popular",
                      "AI-Powered Insights",
                      "By Source",
                      "Saved for Later",
                    ].map((item) => (
                      <li
                        key={item}
                        onClick={() => handleMostRecent(item)}
                        className={`cursor-pointer font-[500] text-[16px] leading-[100%] ${
                          active === item
                            ? "text-blue-600 font-bold"
                            : "text-black"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <hr className="bg-[#DBE5E9] w-full h-[1px] my-4 " />
        </div>
      </section>
    </>
  );
};

export default Hero;
