import React from "react";
import Navbar from '../../components/Navbar'

const Contact = () => {
  return (
    <>
    <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="gap-2 flex flex-col my-9">
          <h2 className="text-3xl font-bold text-[#002A3C]">Contact Us</h2>
          <p className="mt-2 text-lg text-[#375E6C]">
            We'd love to hear from you!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 ">
          {/* Left Card */}
          <div className="bg-[#F8F9FC] p-7 rounded-lg shadow-md w-full lg:w-[360px] md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
            <div className="space-y-4">
              <div>
                <span className="block text-sm font-medium text-[#96A7AD]">
                  Email Address:
                </span>
                <a
                  href="mailto:support@ygeianfocus.com"
                  className="text-[#002A3C]"
                >
                  support@ygeianfocus.com
                </a>
              </div>
              <div>
                <span className="block text-sm font-medium text-[#96A7AD]">
                  Office Hours:
                </span>
                <p className="text-[#002A3C]">
                  Monday to Friday, 9 AM - 5 PM (CET)
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-[#F8F9FC] p-8 rounded-lg shadow-md w-full lg:w-[744px] md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-[#002A3C]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    placeholder="Enter your full name"
                    className="mt-1 block w-full border-[#D6E0E4] rounded-[12px] border-1 bg-white p-3 focus:border-gray-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#002A3C]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="mt-1 block w-full border-[#D6E0E4] rounded-[12px] border-1 bg-white p-3 focus:border-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#002A3C]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter the subject of your message"
                  className="mt-1 block w-full border-[#D6E0E4] rounded-[12px] border-1 bg-white p-3 focus:border-gray-500 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#002A3C]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message"
                  className="mt-1 block w-full border-[#D6E0E4] rounded-[12px] border-1 bg-white p-3 focus:border-gray-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 bg-[#43B3E5] font-medium rounded-full text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
