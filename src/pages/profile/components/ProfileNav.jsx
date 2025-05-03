import React from 'react'
import { IoMenu } from "react-icons/io5";
import logo from "../../../assets/logo.jpg"
import { RiArrowDropDownLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";


const ProfileNav = () => {
  return (
<>
<nav className=" bg-white">
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

   {/* profile section */}
   <div className="border-[1px] border-[#D6E0E4] rounded-full flex justify-center items-center gap-3">
<CgProfile className='w-[36px] h-[36px] text-[#D6E0E4]'/>
   <RiArrowDropDownLine className='text-[#D6E0E4] text-3xl'/>
   
   </div>
  </div>
</nav>
</>  )
}

export default ProfileNav