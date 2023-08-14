import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './style.scss';

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
      <h4>
        I would be happy to answer any questions. Just fill out the form below,
        and I will revert back as soon as possible.
      </h4>
      <div className="contact-option">
        <FaPhoneAlt />
        <span className="text">+91 8210XXXXXX</span>
      </div>
      <div className="contact-option">
        <MdEmail />
        <span className="text">chandankrr.91@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
