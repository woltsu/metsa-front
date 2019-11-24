import React from 'react'
import styled from 'styled-components'
import Carousel, { PagingDots } from 'nuka-carousel'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  height: ${Math.floor(0.5 * window.screen.height)}px;
  width: 90%;
  margin: auto;
  margin-top: ${Math.floor(0.05 * window.screen.height)}px;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.6;
  background-color: #00b265;
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 24px 5px 0 5px;
`

const CardContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 0.75;
  margin-top: 10px;
`

const CardInfoIcon = styled.img`
  margin-left: 2px;
  width: 22px;
`

const CardInfoContainer = styled.div`
  height: 35px;
  width: 80px;
  border-radius: 20px;
  background-color: #00b265;
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: bold;
  padding: 0 8px;
`

const CardInfoTitle = styled.span`
  font-weight: bold;
  color: #969faa;
  font-size: 12px;
`

const CardDescription = styled.div`
  padding: 1em 1em;
  border-bottom: 1px solid #969faa;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: bold;
  color: #969faa;
  text-align: center;
`

const CardInfo = ({ icon, children, title }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <CardInfoContainer>
        <div style={{ flex: 0.5 }}>
          <CardInfoIcon src={icon} />
        </div>
        <span style={{ flex: 0.5 }}>{children}</span>
      </CardInfoContainer>
      <CardInfoTitle>{title}</CardInfoTitle>
    </div>
  )
}

const GoBtn = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 100%;
  position: absolute;
  z-index: 100;
  background-color: #fafafa;
  left: 50%;
  transform: translate(-50%);
  bottom: ${Math.floor(0.5 * window.screen.height) - 60}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`

const Card = ({ option: { name, distance, elevation, locations, description, adventure: { res } }, finish }) => {
  return (
    <CardContainer>
      <CardHeader>{name}</CardHeader>
      <CardDescription>{description}</CardDescription>
      <CardContent>
        <CardInfo title="Distance" icon="mittari.svg">
          {distance}km
        </CardInfo>
        <CardInfo title="Elevation" icon="vuori.svg">
          {elevation}m
        </CardInfo>
        <CardInfo title="Locations" icon="location3.png">
          {res.length}
        </CardInfo>
      </CardContent>
    </CardContainer>
  )
}

const CircleBtnContainer = styled.div`
  height: 40px;
  width: 40px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`

const CircleBtn = ({ left, right, onClick }) => {
  return (
    <CircleBtnContainer onClick={onClick}>
      {left && <img style={{ width: '30px', height: '30px', transform: 'scaleX(-1)' }} src="arrow.svg" />}
      {right && <img style={{ width: '30px', height: '30px' }} src="arrow.svg" />}
    </CircleBtnContainer>
  )
}

const CustomCarousel = ({ finish, selectedRoute, setSelectedRoute, options }) => {
  const afterSlide = i => setSelectedRoute(i)

  return (
    <div>
      <GoBtn onClick={finish}>GO</GoBtn>
      <Carousel
        slideIndex={selectedRoute}
        afterSlide={afterSlide}
        renderCenterRightControls={({ nextSlide }) =>
          selectedRoute < options.length - 1 && <CircleBtn onClick={nextSlide} right />
        }
        renderCenterLeftControls={({ previousSlide }) =>
          selectedRoute > 0 && <CircleBtn onClick={previousSlide} left />
        }
        renderBottomCenterControls={() => null}
        renderTopCenterControls={props => (
          <div style={{ marginTop: '15px' }}>{true ? null : <PagingDots {...props} />}</div>
        )}
        style={{
          height: '50%',
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
    </div>
  )
}

export default CustomCarousel
