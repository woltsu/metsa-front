import React from 'react'
import Map from '../Map'
import Page from '../Page'
import OldInfoContainer from '../OldInfoContainer'
import CommunityPost from '../CommunityPost'
import styled from 'styled-components'


const CommunityHeader = styled.div`
  font-size: 1.5em;
  padding: 0.5em 0.5em 0.5em 0.5em; 
  margin: 0em 0em 0em 0em;
`

const CommunityView = ({ navigation }) => {
  const points = [{lat: 60.278168, lng: 24.596941, icon:'location.svg', text: 'Muinaisluola'}, {lat: 60.275972, lng:24.597269, icon:'cave.png',text: 'Hieno kivi'}, {lat:60.277539, lng:24.602004, icon:'location.svg', text:'Hieno kuusi'}]
  const posts = [
    {title: 'Pre-historical cave', location: 'Nuuksio, 5km', text:'Hidden and historically important cave.', poster: {img: 'https://source.unsplash.com/512x512/?face,'+Math.random(), name: 'Joe C.'}},
    {title: 'Big rock', location: 'Nuuksio, 5km', text:'A big rock.', poster: {img: 'https://source.unsplash.com/512x512/?face,'+Math.random(), name: 'Laura W.'}},
    {title: 'Small cave', location: 'Nuuksio, 5km', text:'Small cave capable of fitting a couple of people.', poster: {img: 'https://source.unsplash.com/512x512/?face,'+Math.random(), name: 'Katri M.'}}]
  return (
    <Page>
      <Map points={points}/>
      <OldInfoContainer minHeight={300}>
        <CommunityHeader>Near you</CommunityHeader>
        <div style={{overflowY: 'auto'}}>
          {posts.map((post) => {
            return (<CommunityPost key={post.title} post={post}/>)
          })}
        </div>
      </OldInfoContainer>
    </Page>
  )
}

export default CommunityView
