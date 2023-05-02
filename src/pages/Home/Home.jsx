import React from 'react'
import './Home.css'
import Slide from '../../components/Slide/Slide'
import HomeAgenda from '../Agenda/HomeAgenda/HomeAgenda'


const Home = () => {
  return (
    <div className='home__container'>
      <Slide/>
      <HomeAgenda/>
    </div>
  )
}

export default Home