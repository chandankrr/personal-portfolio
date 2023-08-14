import React from 'react';
import Blog1 from '../../images/blogs/blog-thumb-1.jpg';
import Blog2 from '../../images/blogs/blog-thumb-2.jpg';
import Blog3 from '../../images/blogs/blog-thumb-3.jpg';
import PortfolioCard from '../portfolio/portfolio-card/PortfolioCard';
import Section from '../shared/section/Section';
import './style.scss';

const Portfolio = () => {
  return (
    <Section id="blogs" title="Checkout My Portfolio" background="dark">
      <div className="blogs-content-wrapper">
        <PortfolioCard
          user="Chandan Kumar"
          date="mar 3 2023"
          image={Blog1}
          title="1914 translation by H. Rackham"
          description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"
        />
        <PortfolioCard
          user="Chandan Kumar"
          date="mar 3 2023"
          image={Blog2}
          title="1914 translation by H. Rackham"
          description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"
        />
        <PortfolioCard
          user="Chandan Kumar"
          date="mar 3 2023"
          image={Blog3}
          title="1914 translation by H. Rackham"
          description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"
        />
      </div>
    </Section>
  );
};

export default Portfolio;
