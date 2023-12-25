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
            With a dynamic skill set spanning Java, JavaScript, HTML, CSS,
            React, and React Native, I'm adept at crafting interactive and
            visually appealing web and mobile applications. Proficient in
            database management, I utilize MySQL and Firebase to efficiently
            store and retrieve data. My command of Linux empowers me to navigate
            diverse development environments seamlessly. Git proficiency ensures
            collaborative and organized version control. Passionate about
            innovation, I consistently blend creativity and technical prowess to
            produce exceptional user experiences.
          </p>
          <p>
            <u>Skills Summary:</u> Java, JavaScript, HTML, CSS, React,
            React-Native, Spring, MySQL, MongoDB, Linux, Git
          </p>
          <CallToAction
            text="Download Resume"
            action={() => window.open('/Chandan Kumar_resume.pdf', '_blank')}
            icon={<AiOutlineCloudDownload />}
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
