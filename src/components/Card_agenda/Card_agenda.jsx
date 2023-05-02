import React from 'react'
import './Card_agenda.css'

const Card_agenda = () => {

  fetch('../../pages/Agenda/Agenda_bd.json').then((response)=>{
    response.json().then((users)=> {
      console.log(users)
    })
  })


  return (
    <div
    className='container__card-agenda'>
      <div className="card__agenda">

      </div>
    </div>
  )
}

export default Card_agenda