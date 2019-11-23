import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

const OptionContainer = styled.div`
  flex: 1;
  cursor: pointer;
  border-bottom: 1px solid #969faa;
  display: flex;
  align-items: center;
  padding: 0 1em;
  justify-content: space-between;
`

const OptionSubContainer = styled.div`
  display: flex;
`

const OptionIcon = styled.img`
  height: 36px;
  margin-right: 15px;
  margin-top: 5px;
`

const OptionDescriptionContainer = styled.div`
  color: #343f4b;
`

const Title = styled.div`
  font-size: 26px;
`

const Description = styled.div`
  font-size: 14px;
`

const OptionArrow = styled.img`
  height: 36px;
  width: 36px;
`

const Option = ({ icon, title, description }) => {
  const history = useHistory()
  return (
    <OptionContainer onClick={() => history.push({ pathname: '/map', state: { prev: true } })}>
      <OptionSubContainer>
        <OptionIcon src={icon} />
        <OptionDescriptionContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </OptionDescriptionContainer>
      </OptionSubContainer>
      <OptionArrow src='arrow.svg' />
    </OptionContainer>
  )
}

export default Option
