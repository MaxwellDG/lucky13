import React from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
 
export const GoogleMaps = () => {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDadapyM0BuRFWydArAuwb9-xyutxDarK8"
  })

  const center = {
    lat: 43.662270,
    lng: -79.425240
  };

  if(loadError) return <p>There was an error</p>
  if(!isLoaded) return <p>"Loading... Please wait."</p>




    return (
          <GoogleMap
            mapContainerClassName="myMap"
            zoom={ 16 }
            center={ center }
            clickableIcons={ false }>


            <Marker position={ center }/>
          </GoogleMap>
      )
  }

