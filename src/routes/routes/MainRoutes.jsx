import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Collection from '../../pages/collection/Collection';
import { BlogHome } from '../siteHome/BlogHome';
import Contact from '../../pages/contact/Contact';
import Shop from '../../pages/shop/Shop';
import DetailsPage from '../../pages/shop/products/detailsPage/DetailsPage';
import Login from '../../Account/login/Login';
import PasswordReset from '../../Account/passwordReset/PasswordReset';
import SignUp from '../../Account/signUp/SignUp';

const MainRoutes = (Props) => {

  const location = useLocation();




  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<BlogHome />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/collection/:id" element={<Collection />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/passwordreset" element={<PasswordReset />} />
      <Route path="/signup" element={<SignUp />} />


    </Routes>
  )
}

export default MainRoutes