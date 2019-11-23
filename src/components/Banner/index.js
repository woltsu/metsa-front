import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const BannerContainer = styled.div`
  height: 12em;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
`

const BannerBackground = styled.div`
  position: absolute;
  background-image: url('forest.jpg');
  background-size: cover;
  height: 12em;
  width: 100%;
  filter: brightness(50%);
  z-index: -1;
`

const BannerTitle = styled.h2`
  margin: 0;
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 90px;
`

const BannerSubTitle = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 6em;
  @media (max-width: 372px) {
    margin-top: 1em;
    margin-bottom: 3em;
  }
`

const ButtonContainer = styled.div`
  margin-left: 20px;
  margin-bottom: 20px;
`

const Banner = () => {
  return (
    <BannerContainer>
      <BannerBackground />
      <BannerTitle>Choose your adventure</BannerTitle>
      <BannerSubTitle>Nuuksio forest - 5km from your location</BannerSubTitle>
      <ButtonContainer>
        <Button icon="locate.svg" content="Change location" />
      </ButtonContainer>
    </BannerContainer>
  )
}

export default Banner
