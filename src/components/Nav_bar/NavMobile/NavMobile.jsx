import React, { useRef, useState } from 'react'
import './NavMobile.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

import logo from '../../../assets/logo_png.png'
import { Link } from 'react-router-dom'
import NavSocial from '../../Nav_social/Nav_social'

const NavMobile = () => {

    const [isOpen, setIsOpen] = useState(false)
    
    function toggleClass(){
      setIsOpen(!isOpen)
    }
  

  return (
    
    <div className="navMobile">
        <div className="navMobile__container">
          <div className={`navMobile__closed`}>
            <Link to={'/'}><img src={logo} alt="" /></Link>
            <i onClick={toggleClass} className={`${isOpen? 'hide': ''}`}><GiHamburgerMenu/></i>
            <i onClick={toggleClass} className={`${isOpen? '': 'hide'}`}><GrClose/></i>
          </div>
        </div>
        <div className={`${isOpen? 'open': 'hide'}`}>
          <div className={`navMobileRoutes`} onClick={toggleClass}>
            <Link to={'/'}>Home</Link>
            <Link to={'igreja'}>Igreja</Link>
            <Link to={'ministerios'}>Ministérios</Link>
            <Link to={'aovivo'}>Ao Vivo</Link>
            <Link to={'agenda'}>Agenda</Link>
            <Link to={'oferta'}>Dízimos e Ofertas</Link>
            <Link to={'nucleo'}>Núcleos</Link>
            <div><NavSocial/></div>
          </div>
        </div>
    </div>

  
  )
}

export default NavMobile