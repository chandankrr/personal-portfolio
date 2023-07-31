import React from 'react';
import './app.scss';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <div>
      <Intro />
      <Skills />
    </div>
  );
};

export default App;
