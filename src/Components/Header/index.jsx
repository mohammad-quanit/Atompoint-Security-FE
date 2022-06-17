import React from 'react';
import { PageHeader } from 'antd';

import logo from '../../assets/logo.png';

import './index.css';
const Header = ({ title }) => {
  return (
    <div
      style={{
        // whiteSpace: 'nowrap',
        // display: 'inline',
      }}
    >
      <img src={logo} className='app-logo' alt='logo' />
      {/* <PageHeader
        className='site-page-header'
        title={title}
        // subTitle='This is a subtitle'
      /> */}
      <div className='site-page-header'>{title}</div>
    </div>
  );
};

export default Header;
