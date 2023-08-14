import React from 'react';
import './app.scss';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
