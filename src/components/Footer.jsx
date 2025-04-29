import React from 'react';
import logo from "../assets/logo.jpg";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='bg-red-300'>
        {/* Top Footer Section */}
        <section className="bg-[#132D5E] w-full">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center m-auto w-full max-w-[1127px] py-2 px-4">
            
            {/* Logo */}
            <div className="bg-[#132D5E] flex justify-center">
              <img src={logo} alt="Logo" className="w-[150px] h-[30px] object-contain" />
            </div>

            {/* Footer Links */}
            <div className="flex flex-col lg:flex-row items-center text-white gap-2 lg:gap-4">
              <Link to="/about">About</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-use">Terms of Use</Link>
              <Link to="/contact">Contact</Link> 
            </div>

          </div>
        </section>

        {/* Bottom Footer Section */}
        <section className='bg-[#002A3C]'>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center m-auto w-full max-w-[1127px] px-4 text-[#ffffff] py-2">
            <p>Powered by Ygeian</p>
            <div className='flex gap-5'>
              <FaFacebookF />
              <FaYoutube />
              <FaLinkedin />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
