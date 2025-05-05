import React from 'react'
import Navbar from '../../components/Navbar'
import gradient from '../singup/components/gradient.png'
import background from './components/background.jpg'
import Footer from '../../components/Footer'

const SignupSpecialty = () => {
  const specialties = [
    ['Allergy', 'Anesthesiology and Pain Management', 'Cardiology'],
    ['Critical Care', 'Dermatology', 'Emergency Medicine', 'Endocrinology'],
    ['Family Medicine', 'Gastroenterology', 'Geriatrics', 'Gynecology'],
    ['Hematology', 'Hepatology', 'Hospital Medicine', 'Immunology'],
    ['Infectious Diseases', 'Internal Medicine', 'Neonatology', 'Nephrology'],
    ['Neurology', 'Neurosurgery', 'Obesity', 'Obstetric Medicine'],
    ['Occupational Medicine', 'Oncology', 'Ophthalmology', 'Oral Health'],
    ['Orthopedics and Sports Medicine', 'Otolaryngology', 'Palliative Care'],
    ['Pathology and Laboratory Medicine', 'Pediatrics'],
    ['Physical Medicine and Rehabilitation', 'Primary Care', 'Psychiatry'],
    ['Pulmonary Medicine', 'Radiation Oncology', 'Radiology'],
    ['Rheumatology', 'Sleep Medicine', 'Substance Use and Addiction Medicine'],
    ['Surgery', 'Trauma', 'Urology', 'Womens Health']
  ];

  return (
    <>
      <Navbar />
      <section className="flex w-[100%]">
        {/* Content Section */}
        <div className="flex mb-3 flex-col justify-center items-center w-full gap-3 px-4 lg:px-8">
          <h1 className="font-[600] text-center text-[24px] lg:text-[40px] leading-[150%] text-[#002A3C] lg:mb-6">
            Welcome to Ygeian FOCUS
          </h1>
          <p className="font-[400] text-[16px] leading-[150%] text-[#375E6C] text-center max-w-[600px]">
            Choose your specialty to customize your feed. You can adjust your preferences later.
          </p>

          {/* Specialty Grid */}
          <div className="flex flex-col gap-4 w-full max-w-6xl mt-8 mb-8">
            {specialties.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                {row.map((specialty, index) => (
                  <button
                    key={index}
                    className="w-full py-3 px-4 text-left rounded-lg border border-[#D6E0E4] 
                      hover:border-[#43B3E5] hover:bg-[#F8FCFE] transition-all
                      font-[500] text-[#002A3C] text-sm lg:text-base"
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            ))}
          </div>

          <button className="bg-[#132D5E] rounded-full text-white py-3 px-8 
            hover:bg-[#0F2352] transition-colors text-lg font-[500] mt-4 w-full max-w-[200px]">
            Continue
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-[50%] h-[300px] lg:h-[100vh] hidden lg:block">
          <img
            src={background}
            alt="cover image"
            className="w-full h-full object-cover"
          />
          <img
            src={gradient}
            alt="gradient"
            className="absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none"
          />
          <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center 
            font-[600] text-[40px] leading-[130%] z-20 px-4 lg:max-w-[100%] xl:max-w-[50%]">
            "The latest medical news—personalized for you."
          </h1>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SignupSpecialty