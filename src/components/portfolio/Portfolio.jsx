import React from 'react';
import Port1 from '../../images/portfolio/port-thumb-1.jpg';
import Port2 from '../../images/portfolio/port-thumb-2.jpg';
import Port3 from '../../images/portfolio/port-thumb-3.jpg';
import Port4 from '../../images/portfolio/port-thumb-4.jpg';
import Port5 from '../../images/portfolio/port-thumb-5.jpg';
import Port6 from '../../images/portfolio/port-thumb-6.jpg';
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
          image={Port1}
          title="ShopO – Multivendor e-commerce web application"
          description="Experience seamless online shopping with ShopO, a feature-rich web application. From user-friendly authentication to advanced search options, we've crafted a secure platform for both buyers and sellers. With diverse payment methods, post-purchase interactions, and a seller-friendly admin panel, ShopO ensures a convenient and engaging e-commerce experience for all. 🛍️✨"
          techstack="Tech Stack: React, Tailwind CSS, Redux, Socket IO, NodeJS, MongoDB, Stripe Payment Gateway"
          github={'https://github.com/chandankrr/shopo-frontend'}
          live={'https://shopo-frontend.vercel.app/'}
        />
        <PortfolioCard
          image={Port2}
          title="BiteSquare Go – Food delivery mobile application"
          description="Savor Effortless Dining! Experience React Native-powered ease with intuitive food search, real-time tracking, and efficient admin control. Indulge in seamless meals through BiteSquare Go's innovation."
          techstack="Tech Stack: React, CSS, React-Native, Firebase"
          github={'https://github.com/chandankrr/BiteSquare-Go'}
        />
        <PortfolioCard
          image={Port3}
          title="Step Up – Web application for shoe store"
          description="Elevate Your Shopping Experience! Discover seamless navigation, advanced filtering, and secure cart management. Strapi CMS and Stripe integration ensure a stylish, hassle-free journey."
          techstack="Tech Stack: React, Redux, Tailwind CSS, MySQL, Strapi CMS, Stripe Payment"
          github={'https://github.com/chandankrr/step-up-frontend'}
          live={'https://step-up-chandankrr.vercel.app/'}
        />
      </div>
      <div className="blogs-content-wrapper">
        <PortfolioCard
          image={Port4}
          title="Chat App – Web application where you can chat with your loved ones"
          description="Connect with Ease! Enjoy authenticated messaging, dynamic profiles, editing options, and user-friendly blocking. Unite with loved ones effortlessly through this intuitive chat app."
          techstack="Tech Stack: React, Next.js, Tailwind CSS, Firebase"
          github={'https://github.com/chandankrr/firebase-chat-app'}
          live={'https://firebase-chat-app-chandankrr.vercel.app/'}
        />
        <PortfolioCard
          image={Port5}
          title="Box Office – Web application where you can search for movies, shows and actors details"
          description="Discover the magic of cinema and television with Box Office, a sleek and intuitive web application crafted using cutting-edge technologies like React, Styled Components, CSS, and powerful APIs. Box Office is your one-stop destination for all things entertainment, offering a seamless and immersive experience for movie enthusiasts and TV show aficionados."
          techstack="Tech Stack: React, Styled Components, API"
          github={'https://github.com/chandankrr/box-office'}
          live={'https://chandankrr.github.io/box-office/#/'}
        />
        <PortfolioCard
          image={Port6}
          title="Tic Tac Toe – A multiple players game"
          description="A game in which two players alternately place crosses and zeros in compartments of a figure made by two vertical lines crossing two horizontal lines, trying to achieve a row of three crosses or three zeros before their opponent."
          techstack="Tech Stack: React, SCSS"
          github={'https://github.com/chandankrr/tic-tac-toe'}
          live={'https://chandankrr.github.io/tic-tac-toe/'}
        />
      </div>
    </Section>
  );
};

export default Portfolio;
