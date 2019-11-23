import React, { Component } from 'react'
import GoogleMapReact, {Polyline} from 'google-map-react'
import styled from 'styled-components'

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

const LocationIcon = styled.img`
  width: 2em;
`

const shiftCenter = (center) => {
  return { lat: center.lat-0.003, lng: center.lng }
}

const calcCenter = (points) => {
  let latc_ma = -1000;
  let latc_mi = 9000;
  let lngc_ma = -1000;
  let lngc_mi = 9000;
  points.forEach(element => {
    latc_ma = Math.max(latc_ma, element.lat)
    latc_mi = Math.min(latc_mi, element.lat)
    lngc_ma = Math.max(lngc_ma, element.lng)
    lngc_mi = Math.min(lngc_mi, element.lng)
  });
  return shiftCenter({
    lat: (latc_ma+latc_mi)/2,
    lng: (lngc_ma+lngc_mi)/2
  })
}

const SimpleMap = ({points}) => {
  let center = {
    lat: 60.22474105,
    lng: 25.14025011
  }
  let pointMarkers = <div></div>
  let lines = <div></div>
  
  if (points) {
    center = calcCenter(points)
    console.log(center)
    pointMarkers = points.map( (point) => {
      return (
        <LocationIcon
        src='location.svg'
        lat={point.lat}
        lng={point.lng}
        text={point.text}></LocationIcon>
      )
    })
    lines = points.map( (point, i) => {
      if (i === 0) {
        return (<Polyline path={[{ lat: points[i].lat, lng: points[i].lng }, { lat: points[i].lat, lng: points[i].lng }]}/>)
      }
      return (<Polyline path={[{ lat: points[i-1].lat, lng: points[i-1].lng }, { lat: points[i].lat, lng: points[i].lng }]}/>)
    })
  }
  const path=[{ lat: 60.278168, lng: 24.596941 }, { lat: 60.275972, lng:24.597269 }]
  const zoom = 15
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions()}
      >
        {pointMarkers}
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap
