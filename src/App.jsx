import './App.css'
import NavBar from './components/Nav_bar/Nav_bar'
import Footer from './components/Footer/Footer'

import { Outlet } from 'react-router-dom'
import NavMobile from './components/Nav_bar/NavMobile/NavMobile'
function App() {

  return (
    <div>
      <NavBar/>
      <NavMobile/>
      <div className="app__pages">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
