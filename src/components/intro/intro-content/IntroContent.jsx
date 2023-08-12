import React from 'react';
import { BsAwardFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import girl from '../../../images/girl.png';
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos beatae
            blanditiis voluptates consectetur quasi rem doloribus animi ab rerum
            eligendi?
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
              <BsAwardFill />
            </div>
            <div className="text">Best Design Award</div>
          </div>
          <div className="highlights vertical">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>4k+</span>
              Happy Customers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
