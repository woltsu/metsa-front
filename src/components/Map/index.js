import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
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

const shiftCenter = center => {
  return { lat: center.lat - 0.003, lng: center.lng }
}

const calcCenter = points => {
  let latc_ma = -1000
  let latc_mi = 9000
  let lngc_ma = -1000
  let lngc_mi = 9000
  points.forEach(element => {
    latc_ma = Math.max(latc_ma, element.lat)
    latc_mi = Math.min(latc_mi, element.lat)
    lngc_ma = Math.max(lngc_ma, element.lng)
    lngc_mi = Math.min(lngc_mi, element.lng)
  })
  return shiftCenter({
    lat: (latc_ma + latc_mi) / 2,
    lng: (lngc_ma + lngc_mi) / 2
  })
}

const LinePoint = styled.div`
  border-radius: 100%;
  width: 1em;
  height: 1em;
  background-color: black;
`

const SimpleMap = ({ points, onPointClick }) => {
  let center = {
    lat: 60.22474105,
    lng: 25.14025011
  }
  const [pointMarkers, setPointMarkers] = useState([])
  const [lines, setLines] = useState([])

  useEffect(() => {
    if (points.length) {
      wut()
    }
  }, [points])

  const wut = () => {
    center = calcCenter(points)
    console.log(center)
    const pm = points.map((point, i) => {
      return (
        <LocationIcon
          onClick={() => {
            onPointClick(point.id)
          }}
          key={`${point.lat + point.lng}-${i}`}
          src={point.icon}
          lat={point.lat}
          lng={point.lng}
          text={point.text}
        ></LocationIcon>
      )
    })

    setPointMarkers(pm)

    const points2 = [...points]
    let ll = []
    points.forEach((point, i) => {
      if (i === 0) {
        return <div></div>
      }
      const n = 8
      const dlat = (points2[i].lat - points2[i - 1].lat) / n
      const dlng = (points2[i].lng - points2[i - 1].lng) / n
      for (var j = 1; j < n; j++) {
        ll = ll.concat(
          <LinePoint
            style={{
              width: '6px',
              height: '6px'
            }}
            lat={points2[i - 1].lat + j * dlat}
            lng={points2[i - 1].lng + j * dlng}
            key={`${points2[i - 1].lat + j * dlat + points2[i - 1].lng + j * dlng}-${j}`}
          ></LinePoint>
        )
      }
      setLines(ll)
      return <div></div>
    })
  }

  const zoom = 13
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions()}
      >
        {pointMarkers}
        {lines}
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap
