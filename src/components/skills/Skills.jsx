import React from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import TechIcons from '../../images/tech-icons.png';
import CallToAction from '../shared/CallToAction/CallToAction';
import Section from '../shared/section/Section';
import './style.scss';

const Skills = () => {
  return (
    <Section background="light" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={TechIcons} alt="skills" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            nostrum minima? Reiciendis sequi sint quas nemo itaque! Doloremque
            consectetur nostrum laborum facilis saepe! Earum molestias
            consectetur eligendi unde ipsa esse porro. Deserunt quis excepturi
            ipsum ab aliquam? Perspiciatis, minus at?
          </p>
          <CallToAction
            text="Download Resume"
            action={() => window.open('/resume.pdf', '_blank')}
            icon={<AiOutlineCloudDownload />}
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
