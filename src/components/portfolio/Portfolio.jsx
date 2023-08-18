import React from 'react';
import Blog1 from '../../images/blogs/blog-thumb-1.jpg';
import Blog2 from '../../images/blogs/blog-thumb-2.jpg';
import Blog3 from '../../images/blogs/blog-thumb-3.jpg';
import PortfolioCard from '../portfolio/portfolio-card/PortfolioCard';
import Section from '../shared/section/Section';
import './style.scss';

const Portfolio = () => {
  return (
    <Section
      id="portfolio"
      title="Check out My Portfolio Some Major Projects"
      background="dark"
    >
      <div className="blogs-content-wrapper">
        <PortfolioCard
          image={Blog1}
          title="BiteSquare Go – Food delivery mobile application"
          description="Savor Effortless Dining! Experience React Native-powered ease with intuitive food search, real-time tracking, and efficient admin control. Indulge in seamless meals through BiteSquare Go's innovation."
          techstack="Tech Stack: React, CSS, React-Native, Firebase"
          github={'https://github.com/chandankrr/BiteSquare-Go'}
        />
        <PortfolioCard
          image={Blog2}
          title="Step Up – Web application for shoe store"
          description="Elevate Your Shopping Experience! Discover seamless navigation, advanced filtering, and secure cart management. Strapi CMS and Stripe integration ensure a stylish, hassle-free journey."
          techstack="Tech Stack: React, Redux, Tailwind CSS, MySQL, Strapi CMS, Stripe Payment"
          github={'https://github.com/chandankrr/step-up-frontend'}
          live={'https://step-up-chandankrr.vercel.app/'}
        />
        <PortfolioCard
          image={Blog3}
          title="Chat App – Web application where you can chat with your loved ones"
          description="Connect with Ease! Enjoy authenticated messaging, dynamic profiles, editing options, and user-friendly blocking. Unite with loved ones effortlessly through this intuitive chat app."
          techstack="Tech Stack: React, Next.js, Tailwind CSS, Firebase"
          github={'https://github.com/chandankrr/firebase-chat-app'}
          live={'https://firebase-chat-app-chandankrr.vercel.app/'}
        />
      </div>
    </Section>
  );
};

export default Portfolio;
