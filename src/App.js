import React, { useState } from 'react';
import './App.css';
import { createContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import Footer from './pages/footer/Footer';
import MainRoutes from './routes/routes/MainRoutes';
import AnimatedNav from './navItems/animatedNav/AnimatedNav';
import ScrollUp from './components/supplements/socials/scrollup/ScrollUp';
import './index.css';
import i18next from 'i18next';
import Cursor from './components/cursor/Cursor';

export const ThemeContext = createContext(null);


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

  return (
    <div className="App" id={theme}>
            <Cursor navOpen={navOpen} setNavOpen={setNavOpen} />
            <AnimatedNav navOpen={navOpen} setNavOpen={setNavOpen} toggleTheme={toggleTheme} open={open} setOpen={setOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded}/>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
              <AnimatePresence>
                <MainRoutes open={open} setOpen={setOpen} language={language} setLanguage={setLanguage} languageExpanded={languageExpanded} setLanguageExpanded={setLanguageExpanded}/>
              </AnimatePresence>
              <ScrollUp />
              <Footer />
            </ThemeContext.Provider>
      </div>
  );
}

export default App;
