import './App.css'
import NavBar from './components/Nav_bar/Nav_bar'
import Footer from './components/Footer/Footer'

import { Outlet } from 'react-router-dom'
import NavMobile from './components/Nav_bar/NavMobile/NavMobile'
import ScrollTop from './components/ScrollTop/Scrolltop'
function App() {

  return (
    <div>
      <NavBar/>
      <NavMobile/>
      <div className="app__pages">
        <ScrollTop/>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
