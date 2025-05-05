import React from 'react';
import ProfileNav from './ProfileNav';
import ProfileCatagories from './ProfileCatagories';
import profileIcon from './icons/profileIcon.png';

const ProfileAccount = () => {
  return (
    <>
      <ProfileNav />
      <div className="flex flex-col lg:flex-row m-auto">
        <div>
          <ProfileCatagories />
        </div>

        <div className="flex flex-col  gap-7 w-full lg:w-[70%] lg:m-auto p-5 my-1">
          {/* Profile Info */}
          <div>
            <img src={profileIcon} alt="profile icon" className="w-[90px] h-[90px]" />
            <h1 className="font-semibold text-[32px] leading-[130%] text-[#002A3C] mt-2">
              Marija Kitanovska
            </h1>
            <p className="text-[18px] leading-[150%] text-[#375E6C]">
              kitanovskamaryam@gmail.com
            </p>
          </div>

          {/* Personal Details */}
          <div className="max-w-md">
            <h2 className="text-[#002A3C] text-lg font-semibold mb-6">Personal details</h2>

            {/* Name */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <label className="text-sm text-[#002A3C] font-medium">Name</label>
                <button className="text-[#43B3E5] text-sm font-medium">Edit</button>
              </div>
              <p className="text-sm text-[#4A4A4A] mt-1">Marija Kitanovska</p>
              <hr className="mt-2 border-[#D6E0E4]" />
            </div>

            {/* Email */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <label className="text-sm text-[#002A3C] font-medium">Email address</label>
                <button className="text-[#43B3E5] text-sm font-medium">Edit</button>
              </div>
              <p className="text-sm text-[#4A4A4A] mt-1">kitanovskamaryam@gmail.com</p>
              <hr className="mt-2 border-[#D6E0E4]" />
            </div>

            {/* Password */}
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <label className="text-sm text-[#002A3C] font-medium">Password</label>
                <button className="text-[#43B3E5] text-sm font-medium">Edit</button>
              </div>
              <p className="text-sm text-[#4A4A4A] mt-1">•••••••••••••</p>
              <hr className="mt-2 border-[#D6E0E4]" />
            </div>
          </div>

          {/* Manage Account Section */}
          <div className="max-w-md">
            <h2 className="text-[#002A3C] text-lg font-semibold mb-4">Manage account</h2>

            <div className="mb-6">
              <div className="flex justify-between items-center">
                <label className="text-sm text-[#002A3C] font-medium">Delete account</label>
                <button className="text-[#FF3535] text-sm font-medium">Delete</button>
              </div>
              <p className="text-sm text-[#4A4A4A] mt-1">
                Permanently delete your Ygeian Focus account.
              </p>
            </div>
          <hr className="mt-2 border-[#D6E0E4]" />
          </div>

        </div>
      </div>
    </>
  );
};

export default ProfileAccount;
