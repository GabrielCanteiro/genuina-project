import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import loading from '../../assets/loading.svg'
import blueDot from '../../assets/blueDot.png'
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
      googleMapsApiKey: "AIzaSyBpXhSjdFquSdSmlgvrqCaRQk1iL6gV"
    })

    const addresses = {
        genuinaSede: { lat: -22.9238506, lng: -47.0568195, name: "Genuina Sede", placeId: "ChIJsbVH9uyPzJQRv7-TeQBevaQ" },
        vilaVitoria:{ lat: -22.978431894589463, lng: -47.17122568113414, name: "Vila Vitória", placeId: "ChIJI-OLX9OAzpQRaRcMkLvY-Fw" },
        saoDomingos:{ lat:-23.042885523205022, lng:-47.10243914640093, name: "São Domingos", placeId: "ChIJf3oUe2yfzJQRCrG5CJSwlZU" },
        jardimFlorence:{ lat:-22.942105302458522, lng:-47.15757082746352, name: "Jardim Florence", placeId: "ChIJh1O4NcOPzJQRNrWN507CQ8s" },
        saoPauloTucuruvi:{ lat:-23.476493308551213, lng:-46.59610527522366, name: "São Paulo Tucuruvi", placeId: "ChIJycklUNtZzpQR1_VsKsWqFq0" },
        saoPauloItaim:{ lat:-23.50252224412523, lng:-46.41283712119876, name: "São Paulo Itaim", placeId: "ChIJNYq3-RQXzpQRK9mAg5r5HyY" },
        hortolandia:{ lat:-22.90806343944457, lng:-47.182519732912965, name: "Hortolândia", placeId: "ChIJIyJ6HdXAxpQRn0jlcxx9RbE" },
        sumare: { lat:-22.816613936026467, lng:-47.24660519058774, name: "Sumaré", placeId: "ChIJtTz-Dx8axpQRy0v7BZJ-bDg" },
        jundiai: { lat:-23.19004932539868, lng:-46.87997180406842, name: "Jundiaí", placeId: "ChIJN0Obw-plypQR-qEz6fUKUjA" },
        indaiatuba: { lat:-23.19507681289126, lng:-46.914758575574226, name: "Indaiatuba", placeId: "ChIJcW2VVCSHzJQRuMI32p_Uv00" }
      
    };
  
    const handleMarkerClick = (location) => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.name)}&destination_place_id=${location.placeId}`
        window.open(url, '_blank')
    }

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
              clickableIcons='true'
            >
              {Object.values(addresses).map(location => {
                  return (
                      <Marker
                          key={location.name}
                          position={{ lat: location.lat, lng: location.lng }}
                          onClick={() => handleMarkerClick(location)}
                      />
                  )
              })}
              
              {location.lat && location.lng && // check if user's location has been obtained
                <Marker
                  position={{ lat: location.lat, lng: location.lng }}
                  icon={{
                    url: blueDot,
                    scaledSize: new window.google.maps.Size(30, 30), // set size of blue dot icon
                  }}
                />
              }
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

