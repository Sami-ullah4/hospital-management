import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import cover from './components/cover.png'
import gradient from './components/gradient.png'
import google from './components/google.png'
import link from './components/link.png'
import eye from './components/eye.png'

const Login = () => {
  return (
<>
<section className=''>
<Navbar/>
<section className='flex '>
    {/*  */}
<div className="flex flex-col gap-4 m-auto">
    <h1 className='font-[600] text-[40px] leading-[150%] text-[#002A3C]'>Login to Ygeian FOCUS</h1>
    {/* media buttons */}
    <div className="flex gap-2">
<div className="border-[#D6E0E4] p-3 rounded-full border-[1px] flex justify-center items-center gap-2 ">
    <img src={google} alt="google icon" className='w-[24px] h-[24px]' />
    <h1 className="font-[600] text-[16px] leading-[150%] text-[#002A3C]">Login with Google</h1>
</div>
<div className="border-[#D6E0E4] p-3 rounded-full border-[1px] flex justify-center items-center gap-2 ">
    <img src={link} alt="linkdin icon" className='w-[24px] h-[24px]' />
    <h1 className="font-[600] text-[16px] leading-[150%] text-[#002A3C]">Login with LinkedIn</h1>
</div>
</div>
<p className="font-[400] text-[16px] leading-[150%] text-[#375E6C] m-auto">or with email</p>
<input type="text"
className='border-1 border-[#D6E0E4] p-3 rounded-[12px] placeholder:text-[#375E6C]' 
placeholder='Username or email'/>
<div className="relative w-full max-w-md">
  <input
    type="password"
    className="w-full h-[48px] border border-[#D6E0E4] pr-12 pl-4 rounded-[12px] placeholder:text-[#375E6C] text-[16px]"
    placeholder="Password"
  />
  <img
    src={eye}
    alt="eye icon"
    className="absolute right-4 top-[27px] -translate-y-1/2  cursor-pointer"
  />
  <div className="flex justify-end mt-1">
    <p className="font-[600] text-[14px] leading-[150%] text-[#43B3E5]">
      Forgot your password?
    </p>
  </div>
</div>

<div className="bg-[#132D5E] text-white w-full rounded-full text-center p-3">Login</div>

<p className="font-[400] my-3 text-[16px] leading-[150%] m-auto text-[#375E6C]">New to Ygeian FOCUS? <span className='text-[#43B3E5]'>Register now.</span></p>

</div>
{/*  */}
<div className="relative w-[50vw] h-[100vh] hidden lg:block">
  {/* Background Image */}
  <img src={cover} alt="cover image" className="w-full h-full object-cover" />

  {/* Gradient Overlay */}
  <img
    src={gradient}
    alt="gradient"
    className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
  />

  {/* Text at the bottom */}
  <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center font-[600] text-[40px] leading-[130%] z-20 px-4  lg:max-w-[100%] xl:max-w-[50%]">
  Because every decision starts with the right information.
</h1>
</div>

</section>
<Footer/>
</section>
</>  )
}

export default Login ;