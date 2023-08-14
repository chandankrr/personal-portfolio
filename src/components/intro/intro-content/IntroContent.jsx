import React from 'react';
import { FaJava, FaReact } from 'react-icons/fa';
import girl from '../../../images/girl.svg';
import hand from '../../../images/hand.png';
import CallToAction from '../../shared/CallToAction/CallToAction';
import { scrollToSection } from '../../utils/helpers';
import './style.scss';

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} alt="hand-icon" />
              </span>
              <span className="text">, I Am</span>
            </span>
            <span className="big-text">Chandan Kumar</span>
          </h1>
          <p>
            Final-year Computer Science student with a passion for innovative
            software solutions and a drive to excel in the dynamic tech realm.
          </p>
          <CallToAction
            text="Contact me"
            action={() => scrollToSection('contact')}
          />
        </div>
        <div className="right-col">
          <img src={girl} alt="" />
          <div className="highlights horizontal">
            <div className="icon">
              <FaJava />
            </div>
            <div className="text">Programming Language</div>
          </div>
          <div className="highlights vertical">
            <div className="icon">
              <FaReact />
            </div>
            <div className="text">
              <span>React.js</span>
              Web Development
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
