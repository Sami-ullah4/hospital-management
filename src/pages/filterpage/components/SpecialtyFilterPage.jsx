// src/pages/SpecialtyFilterPage.jsx
import React, { useState } from "react";
import FilterButton from "./FilterButton";
import { MdOutlineCancel } from "react-icons/md";
import { RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
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

const SpecialtyFilterPage = () => {
  const [selected, setSelected] = useState([]);

  const handleClick = (label) => {
    // setSelected((prev) => prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label] );
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      <section className="bg-[#7A8387] h-full flex items-center justify-center">
        <div className="px-6 pb-6 max-w-screen-xl bg-white w-[80%] rounded-[16px] border-[1px] border-[#D6E0E4]">
          <div className="flex items-center h-9">
            <Link to="/">
              {" "}
              <MdOutlineCancel className="ml-2 text-xl cursor-pointer" />
            </Link>
            <h2 className="text-[#002A3C] w-[90%] font-[600] text-[16px] leading-[150%] text-center">
              Filter
            </h2>
          </div>

          <hr className="bg-[#D6E0E4]" />
          <div className="flex flex-col gap-5 p-5">
            <div>
              <h1 className="font-[600] text-[32px] leading-[130%] text-[#002A3C]">
                Customize Your Feed
              </h1>
              <p className="font-[400] text-[18px] leading-[125%] text-[#002A3C]">
                We’ll show you more feed based on what you select.
              </p>
            </div>
            <div>
              <h1 className="text-[14px] font-[600] leading-[150%]">
                Select Specialties:
              </h1>
              <div className="flex flex-wrap">
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
            <div className="">
              <p className="font-[600] text-[14px] leading-[150%] text-[#96A7AD]">
                Select news sources:
              </p>
              {/* Selected buttons */}
              <div className="flex flex-wrap gap-2">
                {selected.map((spec) => (
                  <FilterButton
                    key={spec}
                    label={spec}
                    isSelected={true}
                    onClick={handleClick}
                  />
                ))}
              </div>
            </div>
          </div>
          <hr className=" sm:hidden" />
          <div className=" flex sm:hidden justify-between  my-4">
            <div className="text-[#43B3E5] font-[500] text-[16px] leading-[100%]">
              Reset
            </div>
            <button className="font-[500] text-[16px] leading-[100%] bg-[#002A3C] rounded-full text-white  p-3">
              Save Preferences
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialtyFilterPage;
