import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const MapContainer = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
    margin: '1.5rem 0',
  }

  const defaultCenter = {
    lat: 51.4925419,
    lng: -0.2287984,
  }

  const markerLocation = {
    name: 'location',
    location: {
      lat: 51.4925419,
      lng: -0.2287984,
    },
  }

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_SECRET}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      />
      <Marker key={markerLocation.name} position={markerLocation} />
    </LoadScript>
  )
}

export default MapContainer
