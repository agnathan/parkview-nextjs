import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 40.843645,
  lng: -96.711416
}

const MapComponent = () => {
  return (
    <div className='container mx-auto my-8 p-4'>
      <LoadScript googleMapsApiKey='AIzaSyAH1x2uMokjewLNoduZp-fMxtliQu4zOtc'>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          {/* Child components, like markers, info windows, etc. */}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapComponent
