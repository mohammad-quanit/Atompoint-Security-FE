import React from 'react';
import logo from '../../assets/logo.png';
import './index.css';

const Header = ({ title }) => {
  return (
    <div>
      <img src={logo} className='app-logo' alt='logo' />
      <div className='site-page-header'>{title}</div>
      <div className='heading-text'>
        <p style={{ fontSize: '1.5rem' }}>
          Security shouldn’t feel like a chore. This is a basic checklist that
          any SaaS CTO (and anyone else) can use to harden their security.
          Select your startup stage and use these rules to improve your
          security. This list is far from exhaustive, incomplete by nature since
          the security you need depends on your assets.
        </p>
      </div>
    </div>
  );
};

export default Header;
