import React from 'react'
import styled from 'styled-components'
import Carousel, { PagingDots } from 'nuka-carousel'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  height: ${Math.floor(0.3 * window.screen.height)}px;
  width: 80%;
  margin: auto;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.25;
  background-color: #00b265;
  font-size: 18px;
  font-weight: bold;
  color: white;
`

const CardContent = styled.div`
  flex: 0.75;
`

const Card = ({ option: { title }, finish }) => {
  return (
    <CardContainer>
      <CardHeader>{title}</CardHeader>
      <CardContent>
        <button onClick={finish}>select</button>
      </CardContent>
    </CardContainer>
  )
}

const CustomCarousel = ({ finish, selectedRoute, setSelectedRoute, options }) => {
  const afterSlide = i => setSelectedRoute(i)

  return (
    <Carousel
      slideIndex={selectedRoute}
      afterSlide={afterSlide}
      renderCenterRightControls={() => null}
      renderCenterLeftControls={() => null}
      renderBottomCenterControls={() => null}
      renderTopCenterControls={props => (
        <div style={{ marginTop: '15px' }}>{true ? null : <PagingDots {...props} />}</div>
      )}
      style={{
        height: '30%',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%)',
        width: '100%'
      }}
    >
      {options.map((option, i) => {
        return <Card finish={finish} key={i} option={option} />
      })}
    </Carousel>
  )
}

export default CustomCarousel
