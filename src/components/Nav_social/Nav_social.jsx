
import React from 'react';
import './Nav_social.css'

import youtube from '../../assets/youtube_logo.png'
import instagram from '../../assets/instagram_logo.png'
import podcast from '../../assets/podcasts_logo.png'
import whatsapp from '../../assets/whatsApp_logo.png'

const links = {
    youtube: 'https://www.youtube.com/@ccgenuinacampinas/streams',
    instagram: 'https://www.instagram.com/igrejagenuina/?hl=pt-br',
    podcast: 'https://podcasters.spotify.com/pod/show/sezar-cavalcante-pregacoe'
  }


const NavSocial = () => (
  <div className='container-nav-media'>
    <a href={links.youtube} target='blank'><img src={youtube} alt="Igreja Genuina Youtube"/></a>
    <a href={links.instagram} target='blank'><img src={instagram} alt="Igreja Genuina Instagram"/></a>
    <a href={links.podcast} target='blank'><img src={podcast} alt="Sezar Cavalcante Pregações Podcast"/></a>
    <a ><img src={whatsapp} alt="WhatsApp Secretaria Genuina"/></a> {/*TODO: ir atras de um whatsapp*/}
  </div>
);


export default NavSocial;
