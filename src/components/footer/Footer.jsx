import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
            onClick={() => scrollToSection('contact')}
          >
            Contact me
          </li>
        </ul>
        <div className="social-icons">
          <SocialIcon
            color="#0A66C2"
            icon={<FaLinkedin />}
            link="https://www.linkedin.com/in/chandan-krr"
          />
          <SocialIcon
            color="#0D2636"
            icon={<FaGithub />}
            link="https://github.com/chandankrr"
          />
          <SocialIcon
            color="#E84C88"
            icon={<FaInstagram />}
            link="https://www.instagram.com/_chandankrr"
          />
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            Made with &nbsp; <AiOutlineHeart size={18} color="#ff000082" />
            &nbsp; by Chandan Kumar
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
