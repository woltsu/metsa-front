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

const Desc = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  border-bottom: 2px solid #969faa;
  padding: 8px 8px;
`

const PointTitle = styled.span`
  font-size: 16px;
  color: #3b4651;
  font-weight: bold;
`

const PointContent = styled.div``

const PointDescription = ({ point }) => {
  console.log('point', point)
  return (
    <InfoContainer
      topContent={<PointHeader>{point['Kohdenimi,C,100']}</PointHeader>}
      middleContent={
        <PointContent>
          <Desc>
            <PointTitle>Description</PointTitle>
            <div style={{ marginTop: '6px' }}>{point['kuvaus'].slice(0, 150).concat('...')}</div>
          </Desc>
          <img style={{ maxWidth: '100%', borderBottom: '2px solid #969faa' }} src="stories.png" />
          <div style={{ padding: '8px 8px' }}>
            <PointTitle>Photos</PointTitle>
            <img style={{ maxWidth: '70px', float: 'right' }} src='take.png' />
            <div style={{ width: '100%', textAlign: 'center', marginTop: '10px' }}>
              <img style={{ maxWidth: '80%', maxHeight: '240px', borderRadius: '20px' }} src={point.image} />
            </div>
          </div>
          {/* <img style={{ maxWidth: '100%' }} src="lelel.png" /> */}
        </PointContent>
      }
      bottomContent={<p>666</p>}
    />
  )
}

export default PointDescription
