import React from 'react'
import './Home.css'
import Slide from '../../components/Slide/Slide'
import HomeAgenda from '../Agenda/HomeAgenda/HomeAgenda'
import HomeOferta from '../Oferta/HomeOferta/HomeOferta'


const Home = () => {
  return (
    <div className='home__container'>
      <Slide/>
      <HomeAgenda/>
      <HomeOferta/>
    </div>
  )
}

export default Home