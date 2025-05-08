import React from "react";
import { NavLink } from "react-router-dom";

const ProfileSettingsSidebar = () => {
  const baseClass = "font-[400] text-[18px] leading-[150%] whitespace-nowrap";

  const styleLink = ({ isActive }) => ({
    color: isActive ? "#256a9c" : "#002A3C",
  });

  return (
    <div className="overflow-hidden px-5">
      <ul className="list-none flex lg:flex-col gap-4 lg:gap-0">
        <li>
          <NavLink
            to="/profile-settings"
            style={styleLink}
            className={baseClass}
          >
            Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile-settings/specialties"
            style={styleLink}
            className={baseClass}
          >
            Your Specialties
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile-settings/savedArticles"
            style={styleLink}
            className={baseClass}
          >
            Saved Articles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile-settings/billing"
            style={styleLink}
            className={baseClass}
          >
            Plan and Billing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile-settings/notification"
            style={styleLink}
            className={baseClass}
          >
            Notifications
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSettingsSidebar;
