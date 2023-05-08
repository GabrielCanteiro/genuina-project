import React from 'react'
import Map from '../../components/Map/Map'
import LocalCard from './Local_card/LocalCard'
import data from './Local_card/localData.json'

import './Nucleo.css'

const Nucleo = () => {
  const igrejas = data.igrejas
  const congregacoes = data.congregacoes

  return (
    <div className='nucleo'>
      <div className="header__home_agenda">
        <h1>Igrejas</h1>
        <span></span>
      </div>
        <div className="container__nucleo">
        {
        igrejas.map((local) => <LocalCard 
        title={local.title}
        time_1={local.time_1}
        time_2={local.time_2}
        time_3={local.time_3}
        addressLink={local.addressLink}
        />)
        }
        </div>

        <div className="header__home_agenda">
        <h1>Congregações</h1>
        <span></span>
        </div>

        <div className="container__nucleo">
        {
        congregacoes.map((local) => <LocalCard
      title={local.title}
       time_1={local.time_1}
       time_2={local.time_2}
       time_3={local.time_3}
       addressLink={local.addressLink}
        />)
      }
        </div>
        
        <div className="header__home_agenda">
        <h1>Encontre a Genuína mais próxima</h1>
        <span></span>
        </div>  
      <Map/>

    </div>
  )
}

export default Nucleo