import React from "react";
import logo from "../assets/logo.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Button from "./Button";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
     <nav className="shadow-md bg-white">
  <div className=" h-[48px] lg:h-[71px] mx-auto flex items-center justify-between px-4">
    {/* Logo */}
    <div className="flex justify-center items-center">
      <img
        src={logo}
        alt="Logo"
        className="w-[139px] h-[28px] lg:w-[234px] lg:h-[48px]"
      />
    </div>

    {/* Mobile Menu Icon */}
    <div className="flex items-center justify-center w-[24px] h-[24px] lg:hidden">
      <IoMenu />
    </div>

    {/* Search input - Only on large screens */}
    <div className="hidden lg:flex items-center justify-center relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-[500px] h-[49px] border-2 border-[#D6E0E4] pl-4 pr-12 rounded-[8px] placeholder:text-[#96A7AD]"
      />
      <IoSearchOutline className="absolute right-4 text-[#96A7AD] w-[24px] h-[24px]" />
    </div>

    {/* Signup Buttons - Only on large screens */}
    <div className="hidden lg:flex items-center gap-3">
      <Link to="/login">
      <button className="w-[47px] h-[48px] text-[16px] text-[#002A3C] font-[500] flex justify-center items-center cursor-pointer">Log in
      </button>
      </Link>
      <Button
        bgColor="bg-[#43B3E5]"
        text="Sign up"
        borderColor="border-[#43B3E5]"
        textColor="text-white"
      />
    </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;
