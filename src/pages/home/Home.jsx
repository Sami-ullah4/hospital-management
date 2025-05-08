import React from 'react'
import Hero from '../../components/Hero'
import Cards from '../../components/Cards'
import HomeBottom from '../../components/HomeBottom'
import {cardData} from '../../components/dummyData'
 
const Home = () => {
  return (
    <>
    <div className='bg-[#F8F9FC] '>
    <Hero/>
    <Cards data={cardData}/>
    <HomeBottom/>
    </div>
    </>
  )
}

export default Home 