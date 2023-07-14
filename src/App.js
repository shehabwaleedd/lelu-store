import React, { useState } from 'react';
import './App.css';
import { createContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import Footer from './pages/footer/Footer';
import AnimatedNav from './navItems/animatedNav/AnimatedNav';
import ScrollUp from './components/supplements/socials/scrollup/ScrollUp';
import './index.css';
import i18next from 'i18next';
import Cursor from './components/cursor/Cursor';
import { Route, Routes, useLocation } from 'react-router-dom';
import { BlogHome } from './routes/siteHome/BlogHome';
import Collection from './pages/collection/Collection';
import Contact from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
import DetailsPage from './pages/shop/products/detailsPage/DetailsPage';
import Blog from './pages/awareness/blog/Blog';
import Terms from './pages/footer/terms/Terms';
import Faqs from './pages/footer/faqs/Faqs';
import Policy from './pages/footer/policy/Policy';
import Shippment from './pages/footer/shippment/Shippment';
import Returns from './pages/footer/returns/Returns';
import Swipe from './pages/main/swipe/Swipe';
import Login from './Account/login/Login';
import PasswordReset from './Account/passwordReset/PasswordReset';
import SignUp from './Account/signUp/SignUp';
import About from './pages/about/About';
import Account from './pages/account/Account';
import Products from './pages/shop/products/Products';

function App() {

  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(i18next.language);
  const [languageExpanded, setLanguageExpanded] = useState(false);

  const [theme, setTheme] = useState('dark');
  const [navOpen, setNavOpen] = React.useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const  location = useLocation();

  return (
    <div className="App" id={theme}>
      <Cursor navOpen={navOpen} setNavOpen={setNavOpen} />
      <AnimatedNav navOpen={navOpen} setNavOpen={setNavOpen} toggleTheme={toggleTheme} open={open} setOpen={setOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<BlogHome open={open} setOpen={setOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded} />} />
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
          <Route path="/account" element={<Account />} />
          <Route path='/products' element={<Products />}/>
        </Routes>              
        </AnimatePresence>
      <ScrollUp />
      <Footer />
    </div>
  );
}

export default App;
