import React from 'react'
import Navbar from '../../components/Navbar'

const EmailSet = () => {
  return (
    <>    <Navbar/>
    <section className="flex justify-center items-center min-h-screen bg-white">
      {/* Main container */}
      <div className="bg-[#F8F9FC] max-w-[613px] w-full px-6 py-8 rounded-lg shadow-md">
        <div className="flex flex-col gap-y-[50px] ">
          <div className="flex flex-col gap-y-4">
            <h1 className="font-[600] text-[32px] leading-[150%] text-[#002A3C]">
              Check your inbox
            </h1>
            <p className="font-[400] text-[16px] leading-[150%] text-[#375E6C]">
              We've sent a password reset link to your email.<br/>
              Follow the instructions in the email to reset your password.
            </p>
          </div>

          <div className="flex flex-col gap-y-4 text-center">
            <p className="font-[400] text-[16px] leading-[150%] text-[#002A3C]">
              Didn't receive an email?
            </p>
            <button className="rounded-full bg-[#132D5E] text-white py-3 px-6 w-full hover:bg-[#1a3c7a]">
              Resend Link
            </button>
          </div>

          <div className='text-center'>
            <p className="font-[400] text-[16px] leading-[150%] text-[#375E6C]">
              Remember your password?{" "}
              <span className="text-blue-400 cursor-pointer font-[500] hover:underline">
                Login now
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>

  )
}

export default EmailSet