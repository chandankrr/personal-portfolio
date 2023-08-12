import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaYoutube,
} from 'react-icons/fa';
import Logo from '../../images/logo.png';
import Section from '../shared/section/Section';
import { scrollToSection } from '../utils/helpers';
import SocialIcon from './social-icon/SocialIcon';
import './style.scss';

const Footer = () => {
  return (
    <Section background="dark" className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection('portfolio')}
          >
            Portfolio
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection('blogs')}
          >
            Blog & Articles
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection('contact')}
          >
            Contact me
          </li>
        </ul>
        <div className="social-icons">
          <SocialIcon
            color="#ff0000"
            icon={<FaYoutube />}
            link="https://www.youtube.com"
          />
          <SocialIcon color="#0D2636" icon={<FaGithub />} link="" />
          <SocialIcon color="#0a66c2" icon={<FaLinkedin />} link="" />
          <SocialIcon color="#f2740d" icon={<FaStackOverflow />} link="" />
          <SocialIcon color="#E84C88" icon={<FaInstagram />} link="" />
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            Copyright 2022 JS Dev Hindi | All Rights Reserved
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
