import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Button from "./Button";
import { Link } from "react-router-dom";
import profileIcon from "../assets/profileIcon.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSaveDown2 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const [cardShow, setCardShow] = useState(false);

  const handelProfileCard = () => {
    setCardShow((prev) => !prev);
  };

  return (
    <>
      <nav className="shadow-md bg-white">
        <div className=" h-[48px] lg:h-[71px] mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="w-[139px] h-[28px] lg:w-[234px] lg:h-[48px]"
              />
            </Link>
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
              <button className="w-[47px] h-[48px] text-[16px] text-[#002A3C] font-[500] flex justify-center items-center cursor-pointer">
                Log in
              </button>
            </Link>
            <Button
              bgColor="bg-[#43B3E5]"
              text="Sign up"
              routDirection={"/singup"}
              borderColor="border-[#43B3E5]"
              textColor="text-white"
            />
            <div className="flex gap-3 justify-center items-center">
              <Link to="/notification">
                <IoNotificationsOutline className="text-[33px] text-[#375E6C] cursor-pointer" />
              </Link>
              <div className="" onClick={handelProfileCard}>
                <div className=" border-[1px] border-[#D6E0E4] rounded-full flex justify-center items-center gap-3  p-0.5">
                  {" "}
                  <img
                    src={profileIcon}
                    alt="profilr"
                    className="w-[36px] h-[36px]"
                  />
                  {/* the dropdown icon */}
                  <RiArrowDropDownLine
                    className={`text-[35px] transform transition-transform duration-300 ${
                      cardShow ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* dropdown card */}
            {cardShow && (
              <div className="bg-white absolute top-[12%] left-[81%] w-[248px] border border-[#D6E0E4] rounded-md shadow-md z-50">
                <div className="p-3 flex flex-col gap-4">
                  <div>
                    <h1 className="text-[15px] text-[#002A3C] font-[600] leading-[130%]">
                      Marija Kitanovska
                    </h1>
                    <p className="font-[400] mt-0.5 text-[12px] leading-[130%] text-[#375E6C]">
                      kitanovskamarija@gmail.com
                    </p>
                  </div>

                  <Link to="/profileAccount">
                    <button className="cursor-pointer bg-[#E5F5FF] text-[#002A3C] font-[400] text-[12px] leading-[130%] w-full p-2 rounded-full">
                      My profile
                    </button>
                  </Link>

                  <hr className="bg-[#D6E0E4]" />

                  <div>
                    <Link to="/savedArticles">
                      <div className="flex items-center">
                        <CiSaveDown2 className="text-[#002A3C] text-[20px]" />
                        <h1 className="font-[400] px-2 text-[12px] text-[#002A3C]">
                          Saved Articles
                        </h1>
                      </div>
                    </Link>
                    <Link to="/privacy-settings">
                      <div className="flex mt-2 items-center">
                        <IoSettingsOutline className="text-[#002A3C] text-[20px]" />
                        <h1 className="font-[400] px-2 text-[12px] text-[#002A3C]">
                          Settings
                        </h1>
                      </div>
                    </Link>
                  </div>

                  <hr className="bg-[#D6E0E4]" />

                  <div className="flex items-center">
                    <MdLogout className="text-[#002A3C] text-[20px]" />
                    <h1 className="font-[400] px-2 text-[12px] text-[#002A3C]">
                      Logout
                    </h1>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
