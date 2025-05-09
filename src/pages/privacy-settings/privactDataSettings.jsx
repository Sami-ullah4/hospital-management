import React from 'react'

const privactDataSettings = () => {
  return (
    <>
    
      <div className="flex flex-col gap-[45px] w-full lg:w-[50%] lg:m-auto pt-6 my-4">
        {/* Privacy Settings Content */}
        <div className="flex flex-col gap-1 ">
          <h1 className="text-[32px] font-[600] leading-[130%] text-[#002A3C]">
          Data Settings
          </h1>
          <p className="text-[18px] font-[400] leading-[150%] text-[#375E6C] ">
          Manage your data preferences.
          </p>
        </div>
        {/* Data Privacy Section */}
        <section className="flex flex-col gap-8">
          <h2 className="text-[24px] font-[600] leading-[130%]">
          Data Export
          </h2>

          <div className="bg-white ">
            
            <div className="flex  justify-between items-center mb-4">
              <div>
                <h3 className="font-[600] text-[18px] leading-[150%] text-[#002A3C]">
                Export Personal Data
                </h3>
                <p className="text-[18px] font-[400] leading-[150%] text-[#375E6C] ">
                Download a copy of your personal data in a readable format.
                </p>
                </div>
              <button
                className="
               text-[#43B3E5] font-[600] text-[16px] leading-[150%] "
              >
              Export Data
              </button>
            </div>
            <hr className="bg-[#D6E0E4]" />
          </div>

         
        </section>

        {/* Security Settings Section */}
        <section className="flex flex-col gap-8">
          <h2 className="text-[24px] font-[600] leading-[130%]">
          Data Usage
          </h2>

          <div className="bg-white ">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-[600] text-[18px] leading-[150%] text-[#002A3C]">
                Usage Analytics
                </h3>
                <p className="text-[18px] font-[400] leading-[150%] text-[#375E6C] ">
                View and manage how your usage data is collected and used.  
                </p>
              </div>
              <button
                className="
               text-[#43B3E5] font-[600] text-[16px] leading-[150%] "
              >
               Manage Usage Analytic
              </button>
            </div>
            <hr className="bg-[#D6E0E4]" />

          </div>

          <div className="bg-white ">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-[600] text-[18px] leading-[150%] text-[#002A3C]">
                Ad Preferences
                </h3>
                <p className="text-[18px] font-[400] leading-[150%] text-[#375E6C] ">
                Control the types of ads you see based on your data.
                </p>
              </div>
              <button className="text-[#43B3E5] font-[600] text-[16px] leading-[150%]">
              Edit Ad Preferences
              </button>
            </div>
            <hr className="bg-[#D6E0E4]" />

          </div>
        </section>
      </div>
  </> )
}

export default privactDataSettings;