import React from 'react'
import './Card_agenda.css'
import {AiOutlineCalendar} from "react-icons/ai"

const Card_agenda = ({image, ministerio, title, description, horario}) => {

  return (
    <div className='container__card-agenda'>
      <div className="card__agenda">
        <img src={image} />
          <div className="content__ministerio">
            <div className="card__ministerio_label">
              <button>{ministerio}</button>
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
            <h5><AiOutlineCalendar/> {horario}</h5>
          </div>
      </div>
    </div>
  )
}

export default Card_agenda