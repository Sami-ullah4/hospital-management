import React from 'react';
import ProfileNav from "./ProfileNav"
import ProfileCatagories from "./ProfileCatagories"

const Account = () => {
  return (
    <>
      <ProfileNav/>
      <div className="flex">
        <div className="">
          <ProfileCatagories/>
        </div>
        {/* secound dev */}
      
      </div>
    </>
  );
};

export default Account;