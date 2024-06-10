import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/pages/static/Navbar';
import Home from './components/pages/dynamic/home/Home';
import About from './components/pages/dynamic/about/About';
import Career from './components/pages/dynamic/career/Career';
import Projects from './components/pages/dynamic/projects/Projects';
import Contact from './components/pages/dynamic/contact/Contact';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <html lang="en" />
          <title>Deepak KV</title>
          <meta name="description" content="Tutorial for React Helmet" />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
