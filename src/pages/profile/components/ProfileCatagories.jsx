import React from "react";
import { Link } from "react-router-dom";

const ProfileCategories = () => {
  return (
    <div className="overflow-hidden px-5">
      <ul className="list-none flex lg:flex-col gap-4 lg:gap-0">
        <li>
          <Link
            to="/profileAccount"
            className="font-[400] text-[18px] leading-[150%] text-[#002A3C]"
          >
            Account
          </Link>
        </li>
        <li>
          <Link
            to="/specialties"
            className="font-[400] text-[18px] leading-[150%] text-[#002A3C] whitespace-nowrap"
          >
           <span> Your Specialties</span>
          </Link>
        </li>
        <li>
          <Link
            to="/savedArticles"
            className="font-[400] text-[18px] leading-[150%] text-[#002A3C] whitespace-nowrap"
          >
            Saved Articles
          </Link>
        </li>
        <li>
          <Link
            to="/billing"
            className="font-[400] text-[18px] leading-[150%] text-[#002A3C] whitespace-nowrap"
          >
            Plan and Billing
          </Link>
        </li>
        <li>
          <Link
            to="/notification"
            className="font-[400] text-[18px] leading-[150%] text-[#002A3C]"
          >
            Notifications
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCategories;
