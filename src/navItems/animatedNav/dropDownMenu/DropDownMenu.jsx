import React, { useState, useEffect, useRef } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './DropDownMenu.css';
import uk from "../../../assets/uk.svg"

const DropDownMenu = (Props) => {

  const handleLanguageExpanded = () => {
    Props.setLanguageExpanded(!Props.languageExpanded);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        Props.setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  useEffect(() => {
    i18next.changeLanguage(Props.language);
  }, [Props.language]);

  const handleLanguageChange = (newLanguage) => {
    Props.setLanguage(newLanguage);
    Props.setOpen(false);
  };

  const handleEnglishClick = () => {
    handleLanguageChange('EN');
  };
  const handleGermanClick = () => {
    handleLanguageChange('DE');
  };

  const handleFrenchClick = () => {
    handleLanguageChange('FR');
  };

  const handleSpanishClick = () => {
    handleLanguageChange('ES');
  };

  const handleArabicClick = () => {
    handleLanguageChange('AR');
  }

  return (
    <div className="menu__container" ref={menuRef}>
      <div className={`dropdown-menu`}>
        <button
          onClick={handleLanguageExpanded}
          className={Props.navOpen ? 'dropdown__icon spin' : 'dropdown__icon'}
        >
          <span onClick={handleLanguageExpanded}>
            {Props.language}
            <i className="bx bx-chevron-down"></i>
            <AnimatePresence>
              {Props.languageExpanded && (
                <motion.div
                  initial={{ y: -15, opacity: 0 }}
                  animate={{ y: 3, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  className="language__dropdown"
                >
                  <button className="language__dropdown-link" onClick={handleEnglishClick}>
                    <span className="language__text">- EN</span>
                    <div className="uk-flag">
                        <img src={uk} alt="" />
                    </div>
                  </button>
                  <button className="language__dropdown-link" onClick={handleGermanClick}>
                    <span className="language__text">- DE</span>
                    <div className="germany-flag">
                      <div className="germany-flag-stripe germany-flag-stripe--black"></div>
                      <div className="germany-flag-stripe germany-flag-stripe--red"></div>
                      <div className="germany-flag-stripe germany-flag-stripe--yellow"></div>
                    </div>
                  </button>
                  <button className="language__dropdown-link" onClick={handleFrenchClick}>
                    <span className="language__text">- FR</span>
                    <div className="france-flag">
                      <div className="france-flag-stripe france-flag-stripe--blue"></div>
                      <div className="france-flag-stripe france-flag-stripe--white"></div>
                      <div className="france-flag-stripe france-flag-stripe--red"></div>
                    </div>
                  </button>
                  <button className="language__dropdown-link" onClick={handleSpanishClick}>
                    <span className="language__text">- ES</span>
                    <div className="spain-flag">
                      <div className="spain-flag-stripe spain-flag-stripe--red"></div>
                      <div className="spain-flag-stripe spain-flag-stripe--yellow"></div>
                      <div className="spain-flag-stripe spain-flag-stripe--red"></div>
                    </div>
                  </button>
                  <button className="language__dropdown-link" onClick={handleArabicClick}>
                    <span className="language__text">- AR</span>
                    <div className="egypt-flag">
                      <div className="egypt-flag-stripe egypt-flag-stripe--red"></div>
                      <div className="egypt-flag-stripe egypt-flag-stripe--white"></div>
                      <div className="egypt-flag-stripe egypt-flag-stripe--black"></div>
                    </div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </span>
          <div className={Props.navOpen ? 'language__dash spin' : 'language__dash'}></div>
        </button>
      </div>
    </div>
  );
};

export default DropDownMenu;
