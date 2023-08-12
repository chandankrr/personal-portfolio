import React from 'react';
import './style.scss';

const SocialIcon = ({ icon, color, link }) => {
  return (
    <div
      className="social-icon"
      style={{ backgroundColor: color }}
      onClick={() => {
        window.open(link, '_blank');
      }}
    >
      {icon}
    </div>
  );
};

export default SocialIcon;
