
import React from 'react';
import './Nav_social.css'

import youtube from '../../assets/youtube_logo.png'
import instagram from '../../assets/instagram_logo.png'
import podcast from '../../assets/podcasts_logo.png'
import whatsapp from '../../assets/whatsApp_logo.png'


const NavSocial = () => (
  <div className='container-nav-media'>
    <img src={youtube} alt=""/>
    <img src={instagram} alt=""/>
    <img src={podcast} alt=""/>
    <img src={whatsapp} alt=""/>
  </div>
);


export default NavSocial;
