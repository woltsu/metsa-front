import React from 'react'
import styled from 'styled-components'
import Page from '../Page'
import Header from '../Header'
import Banner from '../Banner'
import Option from '../Option'
import Footer from '../Footer'

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const LandingView = ({ setDifficulty }) => {
  return (
    <Page>
      <Banner />
      <OptionContainer>
        <Option
          description="Adventure which the smaller adventurers will also endure."
          icon="family.png"
          title="Family friendly"
          difficulty={0}
        />
        <Option
          description="First time going into the forest? Choose this."
          icon="smiling-baby.png"
          title="First timer"
          difficulty={1}
        />
        <Option
          description="For the more experienced forest explorers."
          icon="troll.png"
          title="Forest troll"
          difficulty={2}
        />
        <Option
          onClick={() => setDifficulty(3)}
          description="For experienced and challenge seeking forest explorers."
          icon="climbing.png"
          title="Adventurer"
          difficulty={3}
        />
      </OptionContainer>
      <Footer />
    </Page>
  )
}
export default LandingView
