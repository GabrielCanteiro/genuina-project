import React from 'react'
import './LocalCard.css'
import { Link } from 'react-router-dom'

const LocalCard = ({title, time_1,time_2,time_3,addressLink}) => {
    
  return (
    
    <div className='localCard'>
        <div className="container__LocalCard">
            <div className="content__localCard">
                <div className="info__localCard">
                    <h2>{title}</h2>
                    <div className="time__localCard">
                        <h3>Horários (Início)</h3>
                        <p>{time_1}</p>
                        <p>{time_2}</p>
                        <p>{time_3}</p>
                    </div>
                    <Link to={addressLink} target='blank'><button>Obter direções</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LocalCard