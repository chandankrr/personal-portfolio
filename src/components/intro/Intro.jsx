import React from 'react';
import cloudSoft from '../../images/cloud-soft.png';
import cloud from '../../images/cloud.png';

import NavigationBar from './navigation-bar/NavigationBar';
import './style.scss';

const Intro = () => {
  return (
    <div className="intro-section">
      <div className="vector-bg" id="parallax"></div>
      <img src={cloud} alt="cloud" className="cloud" />
      <img src={cloudSoft} alt="cloud-soft" className="cloud-soft" />
      <div className="content">
        <NavigationBar />
      </div>
    </div>
  );
};

export default Intro;
