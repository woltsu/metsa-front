import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Draggable from 'react-draggable'
import styled from 'styled-components'

const MENU_MAX_HEIGHT = 1
const MENU_WIDTH = 1
let MENU_MIN_HEIGHT = 80

const Menu = styled.div`
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  height: 100%;
  width: ${MENU_WIDTH * 100}%;
  background-color: #fafafa;
  bottom: 0;
  border: solid 1px white;
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 10px;
  border-radius: 1em;
  z-index: 100;
  ${({ isDragging }) => (!isDragging ? 'transition: transform .4s;' : '')}
`

const Dragger = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 28px;
  border-top: 5px solid #969faa;
  margin-top: 10px;
`

const TopContentContainer = styled.div`
  width: 100%;
  height: ${MENU_MIN_HEIGHT - 30}px;
  max-height: ${MENU_MIN_HEIGHT - 30}px;
  border-bottom: 2px solid #969faa;
`

const MiddleContentContainer = styled.div`
  width: 100%;
  height: ${window.screen.height - MENU_MIN_HEIGHT + 30}px;
  max-height: ${window.screen.height - MENU_MIN_HEIGHT + 30}px;
  border-bottom: 2px solid #969faa;
  overflow-y: auto;
`

/* const TopContentContainer = styled.div`
  width: 100%;
  height: ${window.screen.height - MENU_MAX_HEIGHT * window.screen.height}px;
  border-bottom: 2px solid #969faa;
`

const MiddleContentContainer = styled.div`
  width: 100%;
  height: ${Math.floor(0.5 * window.screen.height) - (window.screen.height - MENU_MAX_HEIGHT * window.screen.height)}px;
  border-bottom: 2px solid #969faa;
`

const BottomContentContainer = styled.div`
  width: 100%;
  height: ${Math.floor(
    window.screen.height -
      MENU_MIN_HEIGHT -
      (0.5 * window.screen.height - (window.screen.height - MENU_MAX_HEIGHT * window.screen.height))
  )}px;
  border-bottom: 2px solid #969faa;
` */

const InfoContainer = ({ children, minHeight, topContent, middleContent, bottomContent }) => {
  if (minHeight) {
    MENU_MIN_HEIGHT = minHeight
  }
  const levels = {
    0: -1,
    1: 0,
    2: window.screen.height - MENU_MIN_HEIGHT
  }

  const [x, setX] = useState(Math.floor(0.5 * window.screen.width) - Math.floor((MENU_WIDTH / 2) * window.screen.width))
  const [y, setY] = useState(window.screen.height - MENU_MIN_HEIGHT)
  const [isDragging, setIsDragging] = useState(false)
  const history = useHistory()

  const bottom = window.screen.height - MENU_MIN_HEIGHT

  const getNearestLevel = () => {
    let minLevel = 0
    Object.entries(levels).forEach(([level, value]) => {
      if (Math.abs(y - levels[minLevel]) > Math.abs(y - value)) {
        minLevel = level
      }
    })
    if (minLevel === '1') {
      history.push({
        state: {
          hideOtto: true
        }
      })
    } else {
      history.push({
        state: {
          hideOtto: false
        }
      })
    }
    return levels[minLevel]
  }

  const onDrag = (_, position) => {
    setY(position.y)
  }

  const onStart = () => {
    setIsDragging(true)
  }

  const onStop = () => {
    setIsDragging(false)
    setY(getNearestLevel())
  }

  return (
    <Draggable
      onStart={onStart}
      onStop={onStop}
      bounds={{ top: 0, bottom }}
      axis="y"
      onDrag={onDrag}
      position={{ x, y }}
    >
      <Menu isDragging={isDragging}>
        <Dragger />
        <TopContentContainer>{topContent}</TopContentContainer>
        <MiddleContentContainer>{middleContent}</MiddleContentContainer>
      </Menu>
    </Draggable>
  )
}

export default InfoContainer
