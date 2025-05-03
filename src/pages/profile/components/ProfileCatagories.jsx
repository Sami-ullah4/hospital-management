import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import ProfileNav  from "./ProfileNav"
import ProfileCatagories  from "./ProfileCatagories"
const Account = () => {
  return (
    <>
      <ProfileNav/>
      <div className="flex">
        <div className="">
          <ProfileCatagories/>
        </div>
        
        {/* Second div - Main Content */}
        <div className=""></div>
      </div>
    </>
  );
};

export default Account;