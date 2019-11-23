import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  height: 2em;
  width: 100%;
  background-color: #00B265;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 24px;
`

const Header = () => {
  return (
    <HeaderContainer>
      Lorem Ipsum
    </HeaderContainer>
  )
}

export default Header