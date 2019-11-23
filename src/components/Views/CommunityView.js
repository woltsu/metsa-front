import React from 'react'
import Map from '../Map'
import Page from '../Page'
import InfoContainer from '../InfoContainer'
import CommunityPost from '../CommunityPost'
import styled from 'styled-components'


const CommunityHeader = styled.span`
  font-size: 1.5em;
  padding: 1em 0.5em 1em 0.5em; 
`

const CommunityView = ({ navigation }) => {
  const points = [{lat: 60.278168, lng: 24.596941, text: 'Muinaisluola'}, {lat: 60.275972, lng:24.597269, text: 'Hieno kivi'}, {lat:60.277539, lng:24.602004, text:'Hieno kuusi'}]
  const posts = [
    {title: 'Muinaisluola', location: 'Nuuksio, 5km', text:'Piilotettu esihistoriallisesti merkittävä luola.', poster: {img: 'https://source.unsplash.com/512x512/?face', name: 'Otto L.'}},
    {title: 'Lohkare', location: 'Nuuksio, 5km', text:'Järkyttävän kokoinen möhkäle', poster: {img: 'https://source.unsplash.com/512x512/?face', name: 'Olli W.'}},
    {title: 'Pieni luola', location: 'Nuuksio, 5km', text:'Muutaman ihmisen menevä luola.', poster: {img: 'https://source.unsplash.com/512x512/?face', name: 'Juuso K.'}}]
  return (
    <Page>
      <Map points={points}/>
      <InfoContainer minHeight={300}>
        <CommunityHeader>Near you</CommunityHeader>
        <div style={{overflowY: 'auto'}}>
          {posts.map((post) => {
            return (<CommunityPost key={post.title} post={post}/>)
          })}
        </div>
      </InfoContainer>
    </Page>
  )
}

export default CommunityView
