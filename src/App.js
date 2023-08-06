import React from 'react';
import './app.scss';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Portfolio />
    </div>
  );
};

export default App;
