import React from "react";
import { Outlet } from "react-router-dom";
import PrivacySidbar from "./PrivacySidbar";

const privacyIndex = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row m-auto">
        <PrivacySidbar />
        <Outlet />
      </div>
    </>
  );
};

export default privacyIndex;
