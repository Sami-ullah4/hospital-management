import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Cards from '../../components/Cards'
import HomeBottom from '../../components/HomeBottom'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
    <div className='bg-[#F8F9FC] '>
    <Navbar/>
    <Hero/>
    <Cards/>
    <HomeBottom/>
    <Footer/>
    </div>
    </>
  )
}

export default Home 