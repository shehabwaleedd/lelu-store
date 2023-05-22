import React, { useState } from 'react';
import './App.css';
import { createContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import Footer from './pages/footer/Footer';
import MainRoutes from './routes/routes/MainRoutes';
import AnimatedNav from './navItems/animatedNav/AnimatedNav';
import ScrollUp from './components/scrollup/ScrollUp';
import './index.css';

export const ThemeContext = createContext(null);


function App() {

  const [theme, setTheme] = useState('dark');
  const [navOpen, setNavOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="App" id={theme}>
            <AnimatedNav navOpen={navOpen} setNavOpen={setNavOpen} toggleTheme={toggleTheme}/>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
              <AnimatePresence>
                <MainRoutes />
              </AnimatePresence>
              <ScrollUp />
              <Footer />
            </ThemeContext.Provider>
      </div>
  );
}

export default App;
