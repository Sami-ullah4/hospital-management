import React from "react";

const PrivacySettings = () => {
  return (
    <>
     
        <div className="flex flex-col gap-[45px] w-full lg:w-[50%] lg:m-auto pt-6 my-4">
          {/* Privacy Settings Content */}
          <div className="flex flex-col gap-1 ">
            <h1 className="text-[32px] font-[600] leading-[130%] text-[#002A3C]">
              Privacy Settings
            </h1>
            <p className="text-[18px] font-[400] leading-[150%] text-[#375E6C] ">
              Control how your data is used and shared.
            </p>
          </div>
          {/* Data Privacy Section */}
          <section className="flex flex-col gap-8">
            <h2 className="text-[24px] font-[600] leading-[130%]">
              Data Privacy
            </h2>

            <div className="bg-white ">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-[600] text-[18px] leading-[150%] text-[#002A3C]">
                    Personal Data Management
                  </h3>
                  <p className="text-[18px] font-[400] leading-[150%] text-[#375E6C] ">
                    View and manage the personal data collected by the app.
                  </p>
                </div>
                <button
                  className="
                 text-[#43B3E5] font-[600] text-[16px] leading-[150%] "
                >
                  Manage Personal Data
                </button>
              </div>
              <hr className="bg-[#D6E0E4]" />
            </div>

            <div className="bg-white ">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-[600] text-[18px] leading-[150%] text-[#002A3C]">
                    Data Sharing Preferences
                  </h3>
                  <p className="text-[18px] font-[400] leading-[150%] text-[#375E6C] ">
                    Choose how your data is shared with third parties.
                  </p>
                </div>
                <button
                  className="
                 text-[#43B3E5] font-[600] text-[16px] leading-[150%] "
                >
                  Edit Preferences
                </button>
              </div>
              <hr className="bg-[#D6E0E4]" />

            </div>
          </section>

          {/* Security Settings Section */}
          <section className="flex flex-col gap-8">
            <h2 className="text-[24px] font-[600] leading-[130%]">
              Security Settings
            </h2>

            <div className="bg-white ">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-[600] text-[18px] leading-[150%] text-[#002A3C]">
                    Password Management
                  </h3>
                  <p className="text-[18px] font-[400] leading-[150%] text-[#375E6C] ">
                    Update your password to keep your account secure.
                  </p>
                </div>
                <button
                  className="
                 text-[#43B3E5] font-[600] text-[16px] leading-[150%] "
                >
                  Change Password
                </button>
              </div>
              <hr className="bg-[#D6E0E4]" />

            </div>

            <div className="bg-white ">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-[600] text-[18px] leading-[150%] text-[#002A3C]">
                    Two-Factor Authentication (2FA)
                  </h3>
                  <p className="text-[18px] font-[400] leading-[150%] text-[#375E6C] ">
                    Enable or disable two-factor authentication for added
                    security.
                  </p>
                </div>
                <button className="text-[#43B3E5] font-[600] text-[16px] leading-[150%]">
                  Manage 2FA
                </button>
              </div>
              <hr className="bg-[#D6E0E4]" />

            </div>
          </section>
        </div>
    </>
  );
};

export default PrivacySettings;
