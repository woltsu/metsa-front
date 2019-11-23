import React from 'react'
import styled from 'styled-components'
import InfoContainer from '../InfoContainer'

const PointHeader = styled.div`
  margin-top: 30px;
  width: 100%;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
`

const PointDescription = ({ point }) => {
  console.log('point', point)
  return (
    <InfoContainer
      topContent={
        <PointHeader>
          {point['Kohdenimi,C,100']}
        </PointHeader>
      }
      middleContent={<p>321</p>}
      bottomContent={<p>666</p>}
    />
  )
}

export default PointDescription