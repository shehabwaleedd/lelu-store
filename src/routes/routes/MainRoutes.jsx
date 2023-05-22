import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Collection from '../../pages/collection/Collection';
import { BlogHome } from '../siteHome/BlogHome';

const MainRoutes = (Props) => {

  const location = useLocation();




  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<BlogHome />} />
      <Route path="/collection" element={<Collection />} />
    </Routes>
  )
}

export default MainRoutes