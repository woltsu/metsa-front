import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const AvatarContainer = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  background-color: pink;
  z-index: 6;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #969faa;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  ${({ hidden }) => (hidden ? 'visibility: hidden;' : '')}
`

const Avatar = ({ onClick }) => {
  const [hidden, setHidden] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (history.location.state) {
      setHidden(history.location.state.hideOtto)
    }
  }, [history.location.state])

  return (
    <AvatarContainer hidden={hidden} onClick={onClick}>
      <img style={{ width: '60px' }} src="vittu.jpg" />
    </AvatarContainer>
  )
}

export default Avatar
