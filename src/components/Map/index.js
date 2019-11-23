import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const getMapOptions = () => {
  return {
    streetViewControl: false,
    scaleControl: true,
    fullscreenControl: false,
    gestureHandling: 'greedy',
    disableDoubleClickZoom: true,
    minZoom: 11,
    maxZoom: 18,
    mapTypeId: 'satellite',
    clickableIcons: false,
    zoomControl: false
  }
}

const SimpleMap = () => {
  const center = {
    lat: 60.22474105,
    lng: 25.14025011
  }
  const zoom = 16
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions()}
      >
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap
