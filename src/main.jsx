import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Agenda from './pages/Agenda/Agenda'
import AoVivo from './pages/AoVivo/AoVivo'
import Igreja from './pages/Igreja/Igreja'
import Ministerios from './pages/Ministerios/Ministerios'
import Nucleo from './pages/Nucleo/Nucleo'
import Oferta from './pages/Oferta/Oferta'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'agenda',
          element: <Agenda/>
        },
        {
          path: 'aovivo',
          element: <AoVivo/>
        },
        {
          path: 'igreja',
          element: <Igreja/>
        },
        {
          path: 'ministerios',
          element: <Ministerios/>
        },
        {
          path: 'nucleo',
          element: <Nucleo/>
        },
        {
          path: 'oferta',
          element: <Oferta/>
        }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
