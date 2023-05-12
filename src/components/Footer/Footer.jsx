import React from 'react'
import './Footer.css'
import logo from '../../assets/logo_png.png'
import NavSocial from '../Nav_social/Nav_social'
import { Link } from 'react-router-dom'
import Nav_middle from '../Nav_middle/Nav_middle'
import {MdLocationOn} from 'react-icons/md'

const Footer = () => {
  return (
    <div className='container__footer'>
      <div className="footer__top">
        <img id='logo__footer' src={logo} alt="" />
        <div className="footer__social">  
          <NavSocial/>
        </div>
      </div>
      <div className="footer__middle">
        <div className="footer__routes">
        <Link to={'/'}>Home</Link>
        <Link to={'igreja'}>Igreja</Link>
        <Link to={'ministerios'}>Ministérios</Link>
        <Link to={'aovivo'}>Ao Vivo</Link>
        <Link to={'oferta'}>Dízimos e Ofertas</Link>
        <Link to={'nucleo'}>Núcleos</Link>
        </div>
        <div className="footer__location">
          <i><MdLocationOn/></i>
          <p>Sede - Av. Washington Luiz, 845 - Jardim Leonor, Campinas - SP, 13043-000, Brazil</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

/*

*/