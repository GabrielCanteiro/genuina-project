import './App.css'
import NavBar from './components/Nav_bar/Nav_bar'

import { Outlet } from 'react-router-dom'
function App() {

  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
