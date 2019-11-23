import React from 'react'
import styled from 'styled-components'

const AvatarContainer = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  background-color: pink;
  z-index: 100;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #969faa;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
`

const Avatar = ({ onClick }) => {
  return (
    <AvatarContainer onClick={onClick}>
      <img style={{ width: '60px' }} src="otto.jpg" />
    </AvatarContainer>
  )
}

export default Avatar
