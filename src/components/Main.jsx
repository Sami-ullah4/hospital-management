import React from 'react'

const Main = () => {
  return (
<>
<main className='bg-[#375E6C] overflow-hidden'>
    <div className='flex justify-center'>
    <h1 className='text-[40px] font-[600] text-[#002A3C] leading-[130%]' >Stay Ahead in Medicine with 
    Personalized News</h1>
    <p className='text-[#375E6C]'>Get daily updates from your field of expertise, summarized and tailored for you.</p>
    </div>
    <div>
        {/* two buttons */}
        <div><button className='w-[180px] h-[48px] bg-[#132D5E] absolute top-[20px] left-[20px]'>Sig up fro free</button></div>
        <div><button className='w-[180px] h-[48px] bg-white border-[1px] border-[#375E6C] text-[#375E6C]  absolute top-[20px] left-[20px]'>learn more</button></div>
    </div>
</main>
</>  
)
}

export default Main