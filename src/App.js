import './App.css';
import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/pages/static/Navbar';
import Home from './components/pages/dynamic/home/Home';
import About from './components/pages/dynamic/about/About';
import Career from './components/pages/dynamic/career/Career';
import Projects from './components/pages/dynamic/projects/Projects';
import Contact from './components/pages/dynamic/contact/Contact';
import SkillAssure from './components/pages/dynamic/projects/mainp/Skillassure';
import Nadaar from './components/pages/dynamic/projects/mainp/Nadaar';
import Padippi from './components/pages/dynamic/projects/mainp/Padippi';
import Brain from './components/pages/dynamic/projects/minip/Brain';
import Campus from './components/pages/dynamic/projects/minip/Campus';
import Petzi from './components/pages/dynamic/projects/minip/Petzi';
import Lib from './components/pages/dynamic/projects/minip/Lib';



function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <html lang="en" />
          <title>Deepak KV</title>
          <meta name="description" content="Deepak Portfolio" />
          <meta name="theme-color" content="#E6E6FA" />
        </Helmet>
      </HelmetProvider>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/career' element={<Career />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/skillassure' element={<SkillAssure />} />
            <Route path='/nadaar' element={<Nadaar />} />
            <Route path='/padippi' element={<Padippi />} />
            <Route path='/brain' element={<Brain />} />
            <Route path='/lib' element={<Lib />} />
            <Route path='/petzi' element={<Petzi />} />
            <Route path='/campus' element={<Campus />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;