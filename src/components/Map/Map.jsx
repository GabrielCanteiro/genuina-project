import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import loading from '../../assets/loading.svg'
import './Map.css'

const Map = () => {

  const containerStyle = {
    width: '50vw',
    height: '50vh'
  };

  const [location, setLocation] = useState({lat:null, lng:null})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
      setIsLoading(false)
    },
    (error)=>{
      console.error(error)
      setIsLoading(false)
    })
  },[])

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyBpXhSjdFquSdSmlgvrqCaRQk1iL6gV-6I"
    })

    const addresses = {
      genuinaSede: { lat: -22.9238506, lng: -47.0568195 },
      vilaVitoria:{ lat: -22.978431894589463,lng: -47.17122568113414 },
      saoDomingos:{ lat:-23.042885523205022, lng:-47.10243914640093 },
      jardimFlorence:{ lat:-22.942105302458522, lng:-47.15757082746352 },
      saoPauloTucuruvi:{ lat:-23.476493308551213, lng:-46.59610527522366 },
      saoPauloItaim:{ lat:-23.50252224412523, lng:-46.41283712119876 },
      hortolandia:{ lat:-22.90806343944457, lng:-47.182519732912965 },
      sumare: { lat:-22.816613936026467, lng:-47.24660519058774 },
      jundiai: { lat:-23.19004932539868, lng:-46.87997180406842 },
      indaiatuba: { lat:-23.19507681289126, lng:-46.914758575574226 }
    };
  
    return (
      <div className='map-container'>
        {isLoading ?
          <div>
            <img src={loading} alt="" />
          </div>
        :
         null 
         }
        {        
        isLoaded ? 
        (
          <div className=''>          
            <GoogleMap
              mapContainerStyle={containerStyle}
              zoom={10}
              center={location}
            >
              <Marker position={addresses.genuinaSede} la/>
              <Marker position={addresses.vilaVitoria}/>
              <Marker position={addresses.hortolandia}/>
              <Marker position={addresses.indaiatuba}/>
              <Marker position={addresses.jardimFlorence}/>
              <Marker position={addresses.jundiai}/>
              <Marker position={addresses.saoDomingos}/>
              <Marker position={addresses.saoPauloTucuruvi}/>
              <Marker position={addresses.saoPauloItaim}/>
              <Marker position={addresses.sumare}/>
            </GoogleMap>
          </div>

        ) 
        : 
        null
      }
      </div>
    )
}

export default Map