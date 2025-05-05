import React from "react";
import image1 from "../../../assets/homeimage/image1.jpg";
import image2 from "../../../assets/homeimage/image2.jpg";
import image3 from "../../../assets/homeimage/image3.jpg";
import image4 from "../../../assets/homeimage/image4.jpg";
import cardCompuny from "../../../assets/homeimage/cardCompuny.png";
import { FiMessageSquare, FiFileText } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { BsSave } from "react-icons/bs";
import { GoShareAndroid } from "react-icons/go";
import ProfileNav from "./ProfileNav";
import ProfileCatagories from "./ProfileCatagories";
import FilterButton from "../../filterpage/components/FilterButton";

const cardData = () => {
  return [
    {
      image: image1,
      downImage: cardCompuny,
      text: "New Breakthrough in Cancer Immunotherapy Treatment",
      message: <FiMessageSquare />,
      like: <BiLike />,
      save: <BsSave />,
      componyName: "Medscape",
      share: <GoShareAndroid />,
      file: <FiFileText />,
    },
    {
      image: image2,
      downImage: cardCompuny,
      text: "Understanding the Role of Genetics in Heart Disease",
      message: <FiMessageSquare />,
      like: <BiLike />,
      save: <BsSave />,
      componyName: "Medscape",
    },
    {
      image: image3,
      downImage: cardCompuny,
      text: "Diabetes Medication Linked to Lower Risk of Stroke",
      message: <FiMessageSquare />,
      like: <BiLike />,
      save: <BsSave />,
      componyName: "Medscape",
    },
    {
      image: image4,
      downImage: cardCompuny,
      text: "How AI is Revolutionizing Diagnostics in Radiology",
      message: <FiMessageSquare />,
      like: <BiLike />,
      save: <BsSave />,
      componyName: "Medscape",
    },
  ];
};
const SavedArticle = () => {
  const data = cardData();

  return (
    <>
      <ProfileNav />
      <div className="flex flex-col lg:flex-row m-auto">
        {/* first div */}
        <div>
          <ProfileCatagories />
        </div>
        {/* secound div */}
        <div className="flex flex-col  gap-7 w-full lg:w-[70%] lg:m-auto p-5 my-1">
          <h1 className="front-[600] text-[32px] leading-[130%] text-[#002A3C]">
            Saved Articles
          </h1>
          {/*  */}
          <div className="">
            <div className="flex flex-col gap-5">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex lg:flex-row-reverse flex-col bg-white rounded-[16px] border-[1px]  overflow-hidden  border-[#DBE5E9] lg:max-w-[743px] max-w-[359px] "
                >
                  {/*  */}
                  <div className=" rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt="Card"
                      className="lg:m-4 lg:mx-4 w-full h-full lg:w-[256px] lg:h-[186px] object-cover "
                    />
                  </div>
                  {/*  */}
                  <div className="p-2 space-y-3">
                    {/* Image Container */}

                    {/* Content Section */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.downImage}
                          alt="company logo"
                          className="w-5 h-5 rounded-full"
                        />
                        <span className="text-sm text-[#375E6C] font-medium">
                          {item.componyName}
                        </span>
                      </div>

                      {/* Updated text element with line clamping */}
                      <h2 className="text-xl font-semibold text-[#002A3C] leading-tight line-clamp-2 overflow-hidden">
                        {item.text}
                      </h2>

                      <div className="text-xs text-[#7A929E] font-medium">
                        3h ago
                      </div>

                      <FilterButton
                        label="Psychiatry"
                        className="px-3 py-1 text-sm bg-[#F0F8FB] text-[#006689] rounded-full"
                      />
                    </div>

                    {/* Action Icons */}
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center gap-4 text-[#002A3C]">
                        <div className="flex w-7 h-7 items-center gap-1 hover:text-[#006689] transition-colors">
                          <button className="w-5 h-5 text-[#002A3C]">
                            {" "}
                            {item.message}
                          </button>
                          <span className="text-sm">0</span>
                        </div>
                        <button className="flex items-center gap-1 hover:text-[#006689] transition-colors">
                          {item.like}
                          <span className="text-sm">2</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-3 text-[#002A3C]">
                        <button className="p-1.5 hover:bg-[#F0F8FB] rounded-lg transition-colors">
                          {item.save}
                        </button>
                        <button className="p-1.5 hover:bg-[#F0F8FB] rounded-lg transition-colors">
                          <GoShareAndroid />
                        </button>
                        <button className="p-1.5 hover:bg-[#F0F8FB] rounded-lg transition-colors">
                          {item.file}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedArticle;
