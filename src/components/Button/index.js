import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  all: unset;
  height: 35px;
  width: 160px;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  padding: 0 2px;
`

const ButtonIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 6px;
`

const Button = ({ content, icon }) => {
  return (
    <ButtonContainer>
      { content }
      { icon && <ButtonIcon src={icon} /> }
    </ButtonContainer>
  )
}

export default Button