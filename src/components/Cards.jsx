import React from "react";
import image1 from "../assets/homeimage/image1.jpg";
import image2 from "../assets/homeimage/image2.jpg";
import image3 from "../assets/homeimage/image3.jpg";
import image4 from "../assets/homeimage/image4.jpg";
import image5 from "../assets/homeimage/image5.jpg";
import image6 from "../assets/homeimage/image6.jpg";
import image7 from "../assets/homeimage/image7.jpg";
import image8 from "../assets/homeimage/image8.jpg";
import image9 from "../assets/homeimage/image9.jpg";
import image10 from "../assets/homeimage/image10.jpg";
import image11 from "../assets/homeimage/image11.jpg";
import image12 from "../assets/homeimage/image12.jpg";
import cardCompuny from "../assets/homeimage/cardCompuny.png";
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

const Cards = () => {
  const data = cardData();
  return (
    <>
      <section className="bg-[#F8F9FC]">
        <div className="w-[85%] m-auto py-[60px flex flex-col gap-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex  flex-col bg-white rounded-[16px] border-[1px]  overflow-hidden  border-[#DBE5E9]"
              >
                <div className="p-2 space-y-3">
                  {/* Image Container */}
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt="Card"
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>

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

                    {/* <FilterButton
                        label="Psychiatry"
                        className="px-3 py-1 text-sm bg-[#F0F8FB] text-[#006689] rounded-full"
                      /> */}
                  </div>

                  {/* Action Icons */}
                  <div className="flex justify-between items-center pt-2">
                    
                    <div className="flex items-center gap-4 text-[#002A3C]">
                      <div className="flex w-7 h-7 items-center gap-1 hover:text-[#006689] transition-colors">
                        <button className="w-5 h-5 text-[#002A3C]">                        {item.message}
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
      </section>
    </>
  );
};

export default Cards;
