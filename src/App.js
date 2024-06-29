import './App.css';
import React from "react";
import AnimatedCursor from "react-animated-cursor"
// import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

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
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000",
        },
      },
      pauseOnOutsideViewport: true,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  if (init) {
    return (
      <div className="App">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        {/* <MouseTrail strokeColor={"#b9e313"} lineDuration={5} lineWidthStart={5} number={1} /> */}
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color='185, 227, 19'
          outerAlpha={5}
          innerScale={5}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />
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








}

export default App;
