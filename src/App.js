import React from 'react';
import './app.scss';
import Blogs from './components/blogs/Blogs';
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
      <Blogs />
      {/* <Contact />
      <Footer /> */}
    </div>
  );
};

export default App;
