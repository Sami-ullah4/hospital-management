import React from "react";
import image1 from "../../assets/homeimage/image1.jpg";
import image2 from "../../assets/homeimage/image2.jpg";
import image3 from "../../assets/homeimage/image3.jpg";
import image4 from "../../assets/homeimage/image4.jpg";
import image5 from "../../assets/homeimage/image5.jpg";
import image6 from "../../assets/homeimage/image6.jpg";
import image7 from "../../assets/homeimage/image7.jpg";
import image8 from "../../assets/homeimage/image8.jpg";
import image9 from "../../assets/homeimage/image9.jpg";
import image10 from "../../assets/homeimage/image10.jpg";
import image11 from "../../assets/homeimage/image11.jpg";
import image12 from "../../assets/homeimage/image12.jpg";
import cardCompuny from "../../assets/homeimage/cardCompuny.png";
import { FiMessageSquare, FiFileText } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { BsSave } from "react-icons/bs";
import { GoShareAndroid } from "react-icons/go";

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
    {
      image: image5,
      downImage: cardCompuny,
      text: "Latest Advances in Parkinson’s Disease Treatment",
      message: <FiMessageSquare />,
      like: <BiLike />,
      save: <BsSave />,
      componyName: "Medscape",
    },
    {
      image: image6,
      downImage: cardCompuny,
      text: "Study Finds Link Between Sleep Disorders and Alzheimer's Disease",
      message: <FiMessageSquare />,
      like: <BiLike />,
      save: <BsSave />,
      componyName: "Medscape",
    },
    {
      image: image7,
      downImage: cardCompuny,
      text: "FDA Approves New Vaccine for Respiratory Illness in Children",
      message: <FiMessageSquare />,
      like: <BiLike />,
      save: <BsSave />,
      componyName: "Medscape",
    },
    {
      image: image8,
      downImage: cardCompuny,
      text: "FDA Approves New Vaccine for Respiratory Illness in Children",
      message: <FiMessageSquare />,
      like: <BiLike />,
      save: <BsSave />,
      componyName: "Medscape",
    },
    {
      image: image9,
      downImage: cardCompuny,
      text: "New Guidelines for Hypertension Treatment in Older Adults",
      message: <FiMessageSquare />,
      like: <BiLike />,
      save: <BsSave />,
      componyName: "Medscape",
    },
    {
      image: image10,
      downImage: cardCompuny,
      text: "How Telemedicine is Shaping the Future of Healthcare",
      message: <FiMessageSquare />,
      like: <BiLike />,
      save: <BsSave />,
      componyName: "Medscape",
    },
    {
      image: image11,
      downImage: cardCompuny,
      text: "The Role of Nutrition in Managing Autoimmune Diseases",
      message: <FiMessageSquare />,
      like: <BiLike />,
      save: <BsSave />,
      componyName: "Medscape",
    },
    {
      image: image12,
      downImage: cardCompuny,
      text: "Recent Findings on the Effectiveness of Statins in Heart Attack Recovery",
      message: <FiMessageSquare />,
      like: <BiLike />,
      save: <BsSave />,
      componyName: "Medscape",
    },
  ];
};

const Hero = () => {
  const data = cardData();
  return (
    <>
     <section className="m-auto max-w-[1200px] px-4 shadowb-b-2xl">
  <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 justify-center">
    {data.map((item, index) => (
      <div
        key={index}
        className="flex-col shadow w-full  max-w-[359px] min-h-[444px] bg-[#ffffff] border-[1px] rounded-[16px] border-[#DBE5E9] mx-auto"
      >
        {/* inner div new */}
        <div className="m-2">
          <div className="flex justify-center items-center">
            <img
              src={item.image}
              alt="Card"
              className="w-full h-[200px] object-cover rounded-[4px]"
            />
          </div>
          {/* 2inner div */}
          <div className="p-4">
            <div className="flex gap-3 items-center">
              <div>
                <img
                  src={item.downImage}
                  alt="company logo"
                  className="w-[21px] h-[21px] my-2"
                />
              </div>
              <div className="text-[#375E6C] font-[400] leading-[130%]">
                {item.componyName}
              </div>
            </div>
            <div className="font-[600] w-full min-h-[90px] leading-[130%] text-[24px] mb-[10px] text-[#002A3C]">
              {item.text}
            </div>
            <div className="text-[#375E6C] text-[14px] mb-[25px]">3h ago</div>
            {/* card bottom icons */}
          </div>
            <div className="flex justify-between items-center mx-4 ">
              <div className="flex items-center gap-4">
                <div className="flex items-center text-[#002A3C] gap-[4px] text-[19px]">
                  {item.message} <h5>0</h5>
                </div>
                <div className="flex items-center text-[#002A3C] gap-[4px] text-[19px]">
                  {item.like} <h5>2</h5>
                </div>
              </div>

              <div className=" flex gap-4">
                <div className="flex items-center text-[#002A3C] gap-[4px] text-[19px]">
                  {item.save} 
                </div>
                <div className="flex items-center text-[#002A3C] gap-[4px] text-[19px]">
                  {item.save} 
                </div>
                <div className="flex items-center text-[#002A3C] gap-[4px] text-[19px] mr-[9px]">
                  {item.save} 
                </div>
              </div>
            </div>
        </div>
      </div>
    ))}
  </div>
</section>
    </>
  );
};

export default Hero;
