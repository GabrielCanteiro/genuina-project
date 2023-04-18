import React from 'react';
import logo from '../../assets/logo_png.png'
import './Nav_bar.css'
import NavMiddle from '../Nav_middle/Nav_middle';
import NavSocial from '../Nav_social/Nav_social';
 
const NavBar = () => (
  <div className='container-nav'>
    <div className="nav_bar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="middle">  
        <NavMiddle/>
      </div>
      <div className="social_media">
        <NavSocial/>
      </div>
    </div>
  </div>
);


export default NavBar;
