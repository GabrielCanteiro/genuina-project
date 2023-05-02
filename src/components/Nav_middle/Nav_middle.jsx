import React from 'react';
import './Nav_middle.css'
import { Link } from 'react-router-dom';

function Nav_middle() {


  return (
      <div className="NavMiddle__container">
        <ul>
          <li><Link to={'/igreja'}>Igreja</Link></li>
          <li><Link to={'/ministerios'}>Ministérios</Link></li>
          <li><Link to={'/aovivo'}>Ao Vivo</Link></li>
          <li><Link to={'/agenda'}>Agenda</Link></li>
          <li><Link to={'/oferta'}>Dízimos e Ofertas</Link></li>
          <li><Link to={'/nucleo'}>Núcleos</Link></li>
        </ul>
      </div>
    );
  
}

export default Nav_middle