import React, { useState } from "react";
import ProfileCatagories from "./ProfileCatagories";
import FilterButton from "../../filterpage/components/FilterButton";
import { RiArrowDropUpLine } from "react-icons/ri";
import ProfileNav from "../components/ProfileNav";
const specialties = [
  "Allergy",
  "Anesthesiology and Pain Management",
  "Cardiology",
  "Critical Care",
  "Dermatology",
  "Emergency Medicine",
  "Endocrinology",
  "Family Medicine",
  "Gastroenterology",
  "Geriatrics",
  "Gynecology",
  "Hematology",
  "Hepatology",
  "Hospital Medicine",
  "Immunology",
  "Infectious Diseases",
  "Internal Medicine",
  "Neonatology",
  "Nephrology",
  "Neurology",
  "Neurosurgery",
  "Obesity",
  "Obstetric Medicine",
  "Occupational Medicine",
  "Oncology",
  "Ophthalmology",
  "Oral Health",
  "Orthopedics and Sports Medicine",
  "Otolaryngology",
  "Palliative Care",
  "Pathology and Laboratory Medicine",
];

const Specialties = () => {
  const [selected, setSelected] = useState([]);

  const handleClick = (label) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };
  return (
    <>
      <ProfileNav />
      <div className="flex flex-col lg:flex-row m-auto">
        <div>
          <ProfileCatagories />
        </div>
        {/* i have to change this content in every component */}
        <div className=" flex flex-col  gap-7 w-full lg:w-[70%] lg:m-auto p-5">
          {/*  */}
          <div>
            <h1 className="font-[600] text-[32px] leading-[130%] text-[#002A3C]">
              Your Specialties
            </h1>
          </div>
          {/*  */}
          <div className="flex flex-col gap-7 ">
            <h1 className="font-[600] text-[24px] leading-[130%] text-[#002A3C]">
              Selected Specialties
            </h1>
            {/* div fro salected buttons */}
            {/* <div className=""></div> */}
          </div>
          {/*  */}
          <div className="flex flex-col gap-5 ">
            <div>
              <h1 className="text-[14px] font-[600] leading-[150%]">
                Add more
              </h1>
              <div className="flex whitespace-nowrap flex-wrap">
                {specialties.map((spec) => (
                  <FilterButton
                    key={spec}
                    label={spec}
                    isSelected={selected.includes(spec)}
                    onClick={handleClick}
                  />
                ))}
              </div>
              <button className="flex items-center">
                <RiArrowDropUpLine />
                <p className="font-[600] text-[16px] leading-[150%] text-[#43B3E5]">
                  Show more
                </p>
              </button>
            </div>
          </div>
          {/*  */}
          <hr
            className="border-t w-full mb-2"
            style={{ borderColor: "#D6E0E4" }}
          />
          {/*  */}
          <div className="flex flex-col lg:flex-row-reverse justify-between items-center mb-3">
            <div className="flex flex-col items-center justify-center lg:flex-row gap-5">
              <button className="m-auto w-[280px] lg:w-[190px] h-[48px] font-[500] text-[16px] leading-[100%] text-white bg-[#002A3C] rounded-full">
                Save Preferences
              </button>
              <button className="m-auto w-[280px] lg:w-[101px] h-[48px] font-[500] text-[16px] leading-[100%] text-[#43B3E5] border-1 border-[#43B3E5] rounded-full">
                Reset
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button className="text-[#FF3535] font-[600] text-[16px] leading-[150%]">
                Delete all
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialties;
