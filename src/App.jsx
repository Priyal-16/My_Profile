import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Details from './components/Details';

const App = () => {
  const location = useLocation();

  // Create references :
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const detailsRef = useRef(null);

  // Scroll to section on route change
  useEffect(() => {
    const scrollToSection = (sectionRef) => {
      sectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    switch (location.pathname) {
      case '/':
        scrollToSection(homeRef);
        break;
      case '/about':
        scrollToSection(aboutRef);
        break;
      case '/projects':
        scrollToSection(projectsRef);
        break;
      case '/details':
        scrollToSection(detailsRef);
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <div  className="scroll-smooth">

      <section ref={homeRef}><Home /></section>
      <section ref={aboutRef}><About /></section>
      <section ref={projectsRef}><Projects /></section>
      <section ref={detailsRef}><Details /></section>
    </div>
  );
};

export default App;
