import React from 'react'
import './HomeAgenda.css'
import Card_agenda from '../../../components/Card_agenda/Card_agenda'
import data from '../agendaData.json'

const HomeAgenda = () => {
  const eventsCampinas = data.campinas

  return (
    <div className='container__home_agenda'>
      <div className="header__home_agenda">
        <h1>Eventos</h1>
        <span></span>
      </div>

      <div className="cards__home_agenda">
        {
        eventsCampinas.map((events, key) => <Card_agenda key={key}
        image={events.image}
        ministerio={events.ministerio}
        title={events.title}
        description={events.description}
        horario={events.horario}
        />
)
        }
      </div>
    </div>
  )
}

export default HomeAgenda