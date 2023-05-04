import React from 'react'
import './HomeOferta.css'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const HomeOferta = () => {
  return (
    <div className="container__homeOferta">
      <div className="content__homeOferta">
        <span><BsFillSuitHeartFill/></span>
        <h1>Contribuição</h1>
        <p>
          "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria." - 2 Coríntios 9:7
        </p>

        <Link to={'oferta'}><button>Veja como contribuir</button></Link>
      </div>
    </div>
  )
}

export default HomeOferta