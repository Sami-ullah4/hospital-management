import React from 'react'
import {Link} from 'react-router-dom'
const ResetPassowd = () => {
  return (
    <>
      <section className="flex justify-center items-center min-h-screen bg-white">
        {/* Main container */}
        <div className="bg-[#F8F9FC] max-w-[613px] w-full px-6 py-8 rounded-lg shadow-md">
          <div className="flex flex-col gap-y-6">
            <div>
              <h1 className="font-[600] text-[32px] leading-[150%] text-[#002A3C]">
                Reset your password
              </h1>
              <p className="font-[400] text-[16px] leading-[150%] text-[#375E6C]">
                Enter the email address associated with your account to reset it.
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="email"
                className="font-[400] text-[16px] leading-[150%] text-[#002A3C]"
              >
                Email address
              </label>
              <input
                id="email"
                type="text"
                className="border border-[#D6E0E4] rounded-[12px] bg-white p-3 placeholder:text-[#96A7AD]"
                placeholder="Enter your email address..."
              />
            </div>

            <div>
                <Link to='/sent-email'>
              <button className="rounded-full bg-[#132D5E] text-white py-3 px-6 w-full">
              Send Reset Link
              </button>
              </Link>
            </div>

            <div>
              <p className="font-[400] text-[16px] leading-[150%] text-[#375E6C]">
                Remember your password?{" "}
                <span className="text-blue-400 cursor-pointer">Login now.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResetPassowd
