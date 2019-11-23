import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import LandingView from './Views/LandingView'
import MapView from './Views/MapView'
import CommunityView from './Views/CommunityView'
 
const supportsHistory = 'pushState' in window.history

const Main = () => {
  return (
    <BrowserRouter forceRefresh={!supportsHistory}>
      <Route
        render={({ location }) => {
          const { pathname } = location
          return (
            <TransitionGroup>
              <CSSTransition
                key={pathname}
                classNames="page"
                timeout={{
                  enter: 1000,
                  exit: 1000
                }}
              >
                <Route
                  location={location}
                  render={() => (
                    <Switch>
                      <Route exact path="/" component={LandingView} />
                      <Route path="/map" component={MapView} />
                      <Route path="/community" component={CommunityView} />
                    </Switch>
                  )}
                />
              </CSSTransition>
            </TransitionGroup>
          )
        }}
      />
    </BrowserRouter>
  )
}

export default Main
