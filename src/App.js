import React from 'react';
import './app.scss';
import Blogs from './components/blogs/Blogs';
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
    </div>
  );
};

export default App;
