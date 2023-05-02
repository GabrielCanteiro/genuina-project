import React from 'react'
import './HomeAgenda.css'
import Card_agenda from '../../../components/Card_agenda/Card_agenda'

const HomeAgenda = () => {
  return (
    <div className='container__home_agenda'>
      <div className="header__home_agenda">
        <h1>Agenda CCGC</h1>
        <span></span>
      </div>

      <div className="cards__home_agenda">
        <Card_agenda/>
      </div>
    </div>
  )
}

export default HomeAgenda