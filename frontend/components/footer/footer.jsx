import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer className='footer'>
        <label className='fa fa-file-text' id='footer-fonta-portfolio'>
          <a href='//brendankanesoftware.com' className='footer-link-portfolio'>Portfolio</a>
        </label>
        <label className='fa fa-github' id='footer-fonta-github'>
          <a href='//github.com/brendanekane' className='footer-link-github'>Github</a>
        </label>
        <label className='fa fa-linkedin' id='footer-fonta-linkedin'>
          <a href='//linkedin.com/in/brendanekane/' className='footer-link-linkedin'>LinkedIn</a>
        </label>
      </footer>
    </div>
  );
};

export default Footer;
