import React from 'react'
import NavBar from '../../components/Nav_bar/Nav_bar'
import './Home.css'
import Map from '../../components/Map/Map'

const Home = () => {
  return (
    <div className='container'>
        <NavBar/>
        <Map/>
    </div>
  )
}

export default Home