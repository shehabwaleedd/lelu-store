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
import About from '../../pages/about/About';
import Faqs from '../../pages/footer/faqs/Faqs';
import Terms from '../../pages/footer/terms/Terms';
import Policy from '../../pages/footer/policy/Policy';
import Shippment from '../../pages/footer/shippment/Shippment';
import Returns from '../../pages/footer/returns/Returns';
import Swipe from '../../pages/main/swipe/Swipe';
import Blog from '../../pages/awareness/blog/Blog';

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
      <Route path="/about" element={<About />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/terms-conditions" element={<Terms />} />
      <Route path="/privacy-policy" element={<Policy />} />
      <Route path="/shipping-policy" element={<Shippment />} />
      <Route path="/returns-exchanges" element={<Returns />} />
      <Route path="/swipe" element={<Swipe />} />
      <Route path="/blog/:id" element={<Blog />} />
    </Routes>
  )
}

export default MainRoutes