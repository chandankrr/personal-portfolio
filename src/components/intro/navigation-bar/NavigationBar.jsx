import React, { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import logo from '../../../images/logo.png';
import CallToAction from '../../shared/CallToAction/CallToAction';
import { scrollToSection } from '../../utils/helpers';
import './style.scss';

const NavigationBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItemClickHandler = (section) => {
    setMobileMenu(!mobileMenu);
    scrollToSection(section);
  };

  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <IoMdClose size={24} color="#ffffff" />
        ) : (
          <CgMenuRight size={24} color="#ffffff" />
        )}
      </div>
      <div className={`navigation ${mobileMenu ? 'active' : ''}`}>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler('skills')}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler('portfolio')}
        >
          Portfolio
        </span>
        <CallToAction
          text="Contact me"
          action={() => menuItemClickHandler('contact')}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
