import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About'; 
import Article from '../pages/articalPage/Article';
import Filter from '../pages/filterpage/Filter';
import Profile from '../pages/profile/Profile';
import Specialties from '../pages/profile/components/Specialties';
import SavedArticle from '../pages/profile/components/SavedArticle';
import Billing from '../pages/profile/components/Billing';
import FAQ from '../pages/faq/FAQ';
import Account from '../pages/profile/components/ProfileCatagories';
import Login from '../pages/login/Login';
import Singup from '../pages/singup/Singup';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/article' element={<Article/>}/>
      <Route path='/filter' element={<Filter/>} />
      <Route path='/account' element={<Account/>} />
      <Route path='/specialties' element={<Specialties/>} />
      <Route path='/saved articles' element={<SavedArticle/>} />
      <Route path='/billing' element={<Billing/>} />
      <Route path='/faq' element={<FAQ/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/singup' element={<Singup/>}/>

    </Routes>
  );
}

export default Routers;
