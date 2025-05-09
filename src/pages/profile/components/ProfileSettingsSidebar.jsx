import React from "react";
import { NavLink } from "react-router-dom";
import profileIcon from "./icons/1.png";
import check from "./icons/check.png";
import cave from "./icons/cave.png";
import plan from "./icons/plan.png";
import notification from "./icons/notification.png";

const ProfileSettingsSidebar = () => {
  const baseClass = "font-[400] text-[18px] leading-[150%] whitespace-nowrap";

  const styleLink = ({ isActive }) => ({
    color: isActive ? "#256a9c" : "#002A3C",
  });

  return (
    <div className="overflow-hidden ">
      <ul className="list-none flex lg:flex-col py-6 pl-6 lg:gap-1 gap-8">
        <li>
          <div className="flex items-center gap-2">
            <img
            
              src={profileIcon}
              alt="profilr icon"
              className="w-[16.87px] h-[18.4px]"
            />{" "}
            <NavLink
              to="/profile-settings"
              end
              style={styleLink}
              className={baseClass}
            >
              Account
            </NavLink>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
          <img
              src={check}
              alt="profilr icon"
              className="w-[20.46px] h-[12.94px]"
            />
            <NavLink
              to="/profile-settings/specialties"
              style={styleLink}
              className={baseClass}
            >
              Your Specialties
            </NavLink>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
          <img
              src={cave}
              alt="profilr icon"
              className="w-[13.61px] h-[17.91px]"
            />
            <NavLink
              to="/profile-settings/savedArticles"
              style={styleLink}
              className={baseClass}
            >
              Saved Articles
            </NavLink>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
          <img
              src={plan}
              alt="profilr icon"
              className="w-[19.78px] h-[13.9px]"
            />
            <NavLink
              to="/profile-settings/billing"
              style={styleLink}
              className={baseClass}
            >
              Plan and Billing
            </NavLink>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
          <img
              src={notification}
              alt="profilr icon"
              className="w-[14.53px] h-[18.93px] "
            />
            <NavLink
              to="/profile-settings/notification"
              style={styleLink}
              className={baseClass}
            >
              Notifications
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSettingsSidebar;
