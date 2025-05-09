import React from "react";
import { NavLink } from "react-router-dom";

const PrivacySidbar = () => {
  const baseClass =
    "font-[400] text-[18px] leading-[150%] text-[#002A3C] whitespace-nowrap";

  // const styleLink = ({ isActive }) => ({
  //   color: isActive ? "text-[#007A3C]" : "text-[#002A3C]",
  // });
  return (
    <div className="overflow-hidden pl-6 pt-6">
      <ul className="list-none flex lg:flex-col gap-4 lg:gap-0">
        <li>
          <NavLink
            to="/privacy-settings"
            className={({ isActive }) =>
             
              `${baseClass} ${isActive ? "text-[#007A3C]" : "text-[#002A3C]"}`
            }
            end
          >
            Privacy Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/privacy-settings/data-settings"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? "text-[#007A3C]" : "text-[#002A3C]"}`
            }
          >
            <span>Data Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default PrivacySidbar;
