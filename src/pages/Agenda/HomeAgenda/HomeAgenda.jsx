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
      <Card_agenda
        image={'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        ministerio={'jovens'}
        title={'cullto de jovens'}
        description={'Ad reprehenderit enim ipsum adipisicing anim. Est esse Lorem pariatur Lorem incididunt officiaasdasdAd reprehenderit enim ipsum adipisicing anim. Est esse Lorem pariatur Lorem incididunt officiaasdasreprehenderit enim ipsum adipisicing anim. Est esse Lorem pariatur Lorem incididunt officiaasdasreprehenderit enim ipsum adipisicing anim. Est esse Lorem pariatur Lorem incididunt officiaasdasd'}
        horario={'27/05/2023 às 19h'}
        />

      <Card_agenda
        image={'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        ministerio={'Mulheres'}
        title={'Amet voluptate et consectetur'}
        description={'culto sobre assunto tal'}
        horario={'27/05/2023 às 19h'}
        />

<Card_agenda
        image={'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        ministerio={'jovens'}
        title={'cullto de jovens'}
        description={'culto sobre assunto tal'}
        horario={'27/05/2023 às 19h'}
        />
              <Card_agenda
        image={'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        ministerio={'jovens'}
        title={'cullto de jovens'}
        description={'culto sobre assunto tal'}
        horario={'27/05/2023 às 19h'}
        />
              <Card_agenda
        image={'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        ministerio={'jovens'}
        title={'cullto de jovens'}
        description={'culto sobre assunto tal'}
        horario={'27/05/2023 às 19h'}
        />
              <Card_agenda
        image={'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        ministerio={'jovens'}
        title={'cullto de jovens'}
        description={'culto sobre assunto tal'}
        horario={'27/05/2023 às 19h'}
        />
              <Card_agenda
        image={'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
        ministerio={'criancas'}
        title={'cullto de gincanas '}
        description={'teremos bla bla bla bal pra crainas se divertirem'}
        horario={'22/05/2023 às 15h'}
        />

      </div>
    </div>
  )
}

export default HomeAgenda