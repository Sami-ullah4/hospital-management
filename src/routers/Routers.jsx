import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About'; 
import Article from '../pages/articalPage/Article';
import Filter from '../pages/filterpage/Filter';
import Specialties from '../pages/profile/components/Specialties';
import SavedArticle from '../pages/profile/components/SavedArticle';
import Billing from '../pages/profile/components/Billing';
import Notification from '../pages/profile/components/Notification';
import ProfileAccount from '../pages/profile/components/ProfileAccount';
import FAQ from '../pages/faq/FAQ';
import Login from '../pages/login/Login';
import Singup from '../pages/singup/Singup';
import SignupSpecialty from '../pages/Signup - choose-specialty/SignupSpecialty';
import Contact from '../pages/contact/Contact';
import PrivacySettings from '../pages/settings/PrivacySettings';
import DataSettings from '../pages/settings/DataSettings';
import ResetPassowd from '../pages/reset-pasword/ResetPassowd';
import EmailSet from '../pages/reset-pasword/EmailSet';
import SingleArticle from '../pages/SingleArticle';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/article' element={<Article/>}/>
      <Route path='/article/:id' element={<SingleArticle/>}/>
      
      <Route path='/filter' element={<Filter/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/profileAccount' element={<ProfileAccount/>} />
      <Route path='/specialties' element={<Specialties/>} />
      <Route path='/savedArticles' element={<SavedArticle/>} />
      <Route path='/billing' element={<Billing/>} />
      <Route path='/notification' element={<Notification/>} />
      <Route path='/faq' element={<FAQ/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/singup' element={<Singup/>}/>
      <Route path='/signupSpecialty' element={<SignupSpecialty/>}/>
      <Route path='/privacy-settings' element={<PrivacySettings/>}/>
      <Route path='/data-settings' element={<DataSettings/>}/>
      <Route path='/resetPassword' element={<ResetPassowd/>}/>
      <Route path='/sent-email' element={<EmailSet/>}/>

    </Routes>
  );
}

export default Routers;
