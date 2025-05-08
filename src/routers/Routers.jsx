import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import { Article } from "../pages/articalPage/Article.jsx";
import Filter from "../pages/filterpage/Filter";
import Specialties from "../pages/profile/components/Specialties";
import Billing from "../pages/profile/components/Billing";
import Notification from "../pages/profile/components/Notification";
import ProfileAccount from "../pages/profile/components/ProfileAccount";
import SavedArticle from "../pages/profile/components/SavedArticle.jsx";
import FAQ from "../pages/faq/FAQ";
import Login from "../pages/login/Login";
import Singup from "../pages/singup/Singup";
import Contact from "../pages/contact/Contact";
import Layout from "../components/layout/Layout";
import ProfileSettings from "../pages/profileSettings/ProfileSettings.jsx";
import PrivacyIndex from "../pages/privacy-settings/privacyIndex.jsx";
import PrivacyDataSettings from "../pages/privacy-settings/privactDataSettings.jsx"
import PrivacySettings from '../pages/privacy-settings/PrivacySettings.jsx'
import ResetPassowd from "../pages/reset-pasword/ResetPassowd.jsx";
import EmailSet from "../pages/reset-pasword/EmailSet.jsx";
export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/article/:index", element: <Article /> },
      { path: "/filter", element: <Filter /> },
      { path: "/contact", element: <Contact /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/login", element: <Login /> },
      { path: "/singup", element: <Singup /> },
      {path:'/resetPassword' , element : <ResetPassowd/> },
      {path:'/sent-email' , element: <EmailSet/>},
      {
        path: "/profile-settings",
        element: <ProfileSettings />,
        children: [
          { index: true, element: <ProfileAccount /> },
          { path: "specialties", element: <Specialties /> },
          {
            path: "savedArticles",
            element: <SavedArticle />,
          },
          { path: "billing", element: <Billing /> },
          { path: "notification", element: <Notification /> },
        ],
      },
      {
        path: "/privacy-settings",
        element: <PrivacyIndex />,
        children: [
          { index: true, element: <PrivacySettings /> },
          {
            path: "data-settings",
            element: <PrivacyDataSettings />,
          },
        ],
      },
    ],
  },
]);

