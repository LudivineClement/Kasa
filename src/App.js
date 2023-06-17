import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Housings from './pages/Housing';
import Page404 from './pages/Page404';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='*' element={<Page404 />} />
       <Route path="/logement/:id" element={<Housings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
