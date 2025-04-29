import React from "react";

const Button = ({ text, bgColor, textColor, borderColor,  }) => {
  return (
    <button
      className={`w-[116px] h-[48px] font-medium rounded-full border-[2px] justify-center items-center ${bgColor} ${textColor} ${borderColor} `}
    >
      {text}
    </button>
  );
};

export default Button;
