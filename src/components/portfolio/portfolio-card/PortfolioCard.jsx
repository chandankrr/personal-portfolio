import React from 'react';
import Arrow from '../../shared/arrow/Arrow';
import './style.scss';

const PortfolioCard = ({
  image,
  title,
  description,
  techstack,
  github,
  live,
}) => {
  return (
    <div className="blog-card">
      <div className="image-section">
        <img src={image} alt={title} />
      </div>
      <div className="content-section">
        <div className="info-bar">
          <div className="user-name">{title}</div>
        </div>
        <p>{description}</p>
        <h3 className="tech">{techstack}</h3>
        <div className="readmore-cta">
          <a className="link1" href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="link2" href={live} target="_blank" rel="noreferrer">
            Live at
          </a>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
