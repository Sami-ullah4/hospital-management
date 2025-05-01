import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About'; 
// import MainArticalPage from '../pages/mainpage/MainArticalPage';
import Article from '../pages/articalPage/Article';
import Filter from '../pages/filterpage/Filter';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path='/main' element={<MainArticalPage/>}/> */}
      <Route path='/article' element={<Article/>}/>
      <Route path='/filter' element={<Filter/>} />
    </Routes>
  );
}

export default Routers;
