import React, { useState, useEffect, useRef } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './DropDownMenu.css';

const DropDownMenu = (Props) => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(i18next.language);
  const [languageExpanded, setLanguageExpanded] = useState(false);

  const handleLanguageExpanded = () => {
    setLanguageExpanded(!languageExpanded);
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setOpen(false);
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

  return (
    <div className="menu__container" ref={menuRef}>
      <div className={`dropdown-menu`}>
        <button
          onClick={handleLanguageExpanded}
          className={Props.navOpen ? 'dropdown__icon spin' : 'dropdown__icon'}
        >
          <span onClick={handleLanguageExpanded}>
            {language === 'EN' ? 'DE' : 'EN'}
            <i className="bx bx-chevron-down"></i>
            <AnimatePresence>
              {languageExpanded && (
                <motion.div
                  initial={{ y: -15, opacity: 0 }}
                  animate={{ y: 3, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  className="language__dropdown"
                >
                  <button className="language__dropdown-link" onClick={handleGermanClick}>
                    <span className="language__text">- {language === 'EN' ? 'DE' : 'EN'}</span>
                    <div className="germany-flag">
                      <div className="germany-flag-stripe germany-flag-stripe--black"></div>
                      <div className="germany-flag-stripe germany-flag-stripe--red"></div>
                      <div className="germany-flag-stripe germany-flag-stripe--yellow"></div>
                    </div>
                  </button>
                  <button className="language__dropdown-link" onClick={handleFrenchClick}>
                    <span className="language__text">- {language === 'EN' ? 'FR' : 'EN'}</span>
                    <div className="france-flag">
                      <div className="france-flag-stripe france-flag-stripe--blue"></div>
                      <div className="france-flag-stripe france-flag-stripe--white"></div>
                      <div className="france-flag-stripe france-flag-stripe--red"></div>
                    </div>
                  </button>
                  <button className="language__dropdown-link" onClick={handleSpanishClick}>
                    <span className="language__text">- {language === 'EN' ? 'SP' : 'EN'}</span>
                    <div className="spain-flag">
                      <div className="spain-flag-stripe spain-flag-stripe--red"></div>
                      <div className="spain-flag-stripe spain-flag-stripe--yellow"></div>
                      <div className="spain-flag-stripe spain-flag-stripe--red"></div>
                    </div>
                  </button>
                  <button className="language__dropdown-link" onClick={handleLanguageChange}>
                    <span className="language__text">- {language === 'EN' ? 'AR' : 'EN'}</span>
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
