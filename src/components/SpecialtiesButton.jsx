import React from "react";
const SpecialtiesButton = ({ label, isSelected, onClick, classes }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className={` ${classes} flex items-center px-4 py-2 m-1 rounded-full font-[400] text-[14px]  text leading-[130%]
          transition border
          ${
            isSelected
              ? "bg-[#ffffff] text-[#43B3E5] border-[#43B3E5]"
              : "text-[#43B3E5] bg-[#E5F5FF] border-gray-300 "
          }`}
    >
      {label}
    </button>
  );
};

export default SpecialtiesButton;
