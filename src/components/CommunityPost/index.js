import React, { useState } from 'react'
import styled from 'styled-components'

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px white;
  background-color: #fafafa;
  box-shadow: rgba(0,0,0,0.4) 0 0 10px;
  border-radius: 1em;
  padding: 0em;
  margin: 0.5em 0.5em 1em 0.5em;
`

const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 0em 0em 0em 0em;
`

const PostTitle = styled.span`
  padding: 0em 0.5em 0.2em 0.5em;
  font-size: 1.2em;
  font-style: bold;
`

const PostText = styled.span`
  padding: 0em 0.5em 0.5em 0.7em;
`

const Poster = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  flex-grow: 1;
  padding: 0.5em;
`

const PosterImg = styled.img`
  border-radius: 50%;
  width: 2em;
  height: 2em;
  float: left;
  padding: 0em 1em 0em 0.5em;
`

const LocationDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0em 0em 0.5em 0.5em;
`

const LocationIcon = styled.img`
  width: 1.5em;
  margin-right: 5px;
`



const CommunityPost = ({post}) => {
  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
        <Poster>
          <PosterImg src={post.poster.img}></PosterImg>
          <span>{post.poster.name}</span>
        </Poster>
      </PostHeader>
      <LocationDiv>
        <LocationIcon src='location.svg'></LocationIcon>
        <span>{post.location}</span>
      </LocationDiv>
      <PostText>{post.text}</PostText>
    </PostContainer>
  )
}

export default CommunityPost
