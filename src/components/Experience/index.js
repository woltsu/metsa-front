import React from 'react'
import styled from 'styled-components'

const ExperienceContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h3`
  all: unset;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 1em;
`

const XPContainer = styled.div`
  position: relative;
  width: 150%;
`

const XP = styled.div`
  width: ${({ width }) => width}%;
  height: 1em;
  border-radius: 20px;
  background-color: ${({ color }) => color};
  position: absolute;
  z-index: ${({ z }) => z};
`

const XPRange = styled.div`
  margin-top: 10px;
  width: 150%;
`

const Experience = () => {
  return (
    <ExperienceContainer>
      <Title>Experience: 15340</Title>
      <XPContainer>
        <XP width={70} color="#00B265" z={20} />
        <XP width={100} color="#969FAA" z={10} />
      </XPContainer>
      <XPRange>
        <p style={{ float: 'left', fontSize: '12px', fontWeight: 'bold' }}>12000 exp</p>
        <p style={{ float: 'right', fontSize: '12px', fontWeight: 'bold' }}>17000 exp</p>
      </XPRange>
    </ExperienceContainer>
  )
}

export default Experience
