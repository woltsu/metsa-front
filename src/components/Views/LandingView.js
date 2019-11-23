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

const LandingView = () => {
  return (
    <Page>
      <Banner />
      <OptionContainer>
        <Option
          description="Adventure which the smaller adventurers will also endure."
          icon="family.png"
          title="Family friendly"
        />
        <Option
          description="First time going into the forest? Choose this."
          icon="smiling-baby.png"
          title="First timer"
        />
        <Option description="For the more experienced forest explorers." icon="troll.png" title="Forest troll" />
        <Option
          description="For experienced and challenge seeking forest explorers."
          icon="climbing.png"
          title="Adventurer"
        />
      </OptionContainer>
      <Footer />
    </Page>
  )
}
export default LandingView
