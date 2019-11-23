import React from 'react'
import styled from 'styled-components'
import Experience from '../Experience'

const UserContainer = styled.div`
  position: absolute;
  height: 90%;
  width: 90%;
  background-color: pink;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fafafa;
  border-radius: 30px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UserHeader = styled.div`
  height: 4em;
  width: 100%;
`

const UserAvatarContainer = styled.div`
  height: 9em;
  width: 9em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
`

const HeaderIcon = styled.img`
  float: ${({ float }) => float};
  height: 3em;
  margin: 20px;
`

const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const UserName = styled.h2`
  all: unset;
  font-size: 24px;
  margin-top: 10px;
  font-weight: bold;
`

const UserTitle = styled.h4`
  all: unset;
  margin-top: 2px;
  font-weight: bold;
  color: gray;
  font-size: 14px;
`

const Stat = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
  align-items: center;
`

const StatIcon = styled.img`
  width: 28px;
`

const StatText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #969faa;
  margin-left: 1em;
`

const User = ({ close }) => {
  return (
    <UserContainer>
      <UserHeader>
        <HeaderIcon float="left" src="cog.svg" />
        <HeaderIcon onClick={close} float="right" src="cross.svg" />
      </UserHeader>
      <UserAvatarContainer>
        <img style={{ width: '10em' }} src="otto.jpg" />
      </UserAvatarContainer>
      <UserContent>
        <UserName>Otto Laitinen</UserName>
        <UserTitle>Master explorer</UserTitle>
        <Experience />
        <div style={{ marginTop: '2em' }}>
          <Stat>
            <StatIcon src="camera.svg" />
            <StatText>Photos added: 25</StatText>
          </Stat>
          <Stat>
            <StatIcon src="book.svg" />
            <StatText>Stories created: 15</StatText>
          </Stat>
          <Stat>
            <StatIcon src="room.svg" />
            <StatText>Locations explored: 32</StatText>
          </Stat>
        </div>
      </UserContent>
    </UserContainer>
  )
}

export default User
