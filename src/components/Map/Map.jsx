import React, { useEffect, useState } from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import loading from '../../assets/loading.svg'
import blueDot from '../../assets/blueDot.png'

import data from '../../pages/Nucleo/Local_card/localData.json'
import './Map.css'
import { Link } from 'react-router-dom';

const Map = () => {

  const containerStyle = {
    width: '90vw',
    height: '90vh'
  };


  const [location, setLocation] = useState({lat:-23.316032, lng:-46.828083})
  const [isLoading, setIsLoading] = useState(true)
  const [selectedLocation, setSelectedLocation] = useState(null)

  const handleMarkerClick = (location) =>{
    setSelectedLocation(location)
    console.log(location.title)
  }

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
  },[])//get user position

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyBpXhSjdFquSdSmlgvrqCaRQk1iL6gV"
    })


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
          isLoaded && !isLoading ?
        (
          <div className='google_map'>          
            <GoogleMap
              mapContainerStyle={containerStyle}
              zoom={9}
              center={location}
              clickableIcons={true}
            >
              {data.igrejas.map((local,key) => <Marker

                key={key}
                position={{lat:local.lat,  lng:local.lng}}
                onClick={()=>{handleMarkerClick(local)}}
              />)}

              {data.congregacoes.map((local,key) => <Marker
                key={key}
                position={{lat:local.lat, lng:local.lng}}
                onClick={()=>{handleMarkerClick(local)}}

              />)}
              
              {location.lat && location.lng && 
                <Marker
                  position={{ lat: location.lat, lng: location.lng }}
                  icon={{
                    url: blueDot,
                    scaledSize: new window.google.maps.Size(30, 30), 
                  }}
                />
              } {/*USER POSITION */}

              {selectedLocation &&(
                <InfoWindow
                position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
                onCloseClick={() => setSelectedLocation(null)}>
                <div className='infoWindow'>
                  <h3>Genuína {selectedLocation.title}</h3>
                  <p>{selectedLocation.address}</p>
                  <Link to={selectedLocation.addressLink} target='blank'>Obter direções</Link>
          
                </div>

                </InfoWindow>
              )}
            </GoogleMap>
          </div>

        ) 
        : 
        <div style={{ display: 'none' }}>
            <GoogleMap />
        </div>
      }
      </div>
    )
}

export default Map

