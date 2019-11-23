import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Map from '../Map'
import Page from '../Page'
import InfoContainer from '../InfoContainer'
import Carousel from '../Carousel'
import PointDescription from '../PointDescription'
import { getAdventure } from '../../api'

const slides = [
  {
    title: 'Route 1',
    distance: 10.5,
    elevation: 150,
    locations: 5
  },
  {
    title: 'Route 2',
    distance: 10.5,
    elevation: 150,
    locations: 5
  },
  {
    title: 'Route 3',
    distance: 10.5,
    elevation: 150,
    locations: 5
  }
]

const MapView = () => {
  const [selectedRoute, setSelectedRoute] = useState(0)
  const [showPicker, setShowPicker] = useState(true)
  const [init, setInit] = useState(false)
  const [adventures, setAdventures] = useState(null)
  const history = useHistory()

  const fetchAdventure = async d => {
    const data = await getAdventure(d)
    setAdventures(data)
  }

  useEffect(() => {
    if (history.location.state && history.location.state.difficulty) {
      fetchAdventure(history.location.state.difficulty)
    }
  }, [history.location.state])

  if (adventures) {
    console.log(adventures[selectedRoute])
  }

  console.log('selectedRoute', selectedRoute)

  useEffect(() => {
    setTimeout(() => {
      setInit(true)
    }, 100)
  }, [])

  return (
    <Page>
      <Map />
      {init && adventures && (
        <>
          {!showPicker ? (
            <InfoContainer>
              <PointDescription />
            </InfoContainer>
          ) : (
            <Carousel
              finish={() => setShowPicker(false)}
              options={adventures}
              selectedRoute={selectedRoute}
              setSelectedRoute={setSelectedRoute}
            />
          )}
        </>
      )}
    </Page>
  )
}

export default MapView
