import React from 'react';
import IntroContent from './intro-content/IntroContent';
import NavigationBar from './navigation-bar/NavigationBar';
import './style.scss';

const Intro = () => {
  return (
    <div className="intro-section">
      <div className="vector-bg" id="parallax"></div>
      <div className="content">
        <NavigationBar />
        <IntroContent />
      </div>
    </div>
  );
};

export default Intro;
