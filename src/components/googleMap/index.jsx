import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
import React from 'react'

const GoogleMapContainer = ({lat, lng}) => {

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
      <LoadScript googleMapsApiKey="AIzaSyAZQiUfQ8gsxo5a5XVvV69BE02buyVQLKE">
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