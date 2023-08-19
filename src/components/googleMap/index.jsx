import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'

import './index.css'

const GoogleMapContainer = ({lat, lng}) => {
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
  const mapStyles = {
    height: '100%',
    width: '100%',
    borderRadius: '32px',
  };

  const defaultCenter = {
    lat: lat,
    lng: lng,
  };
  return (
    <div className="google-map-container">
      <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default GoogleMapContainer