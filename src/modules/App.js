import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import VideoDetail from 'pages/VideoDetail'
import { ThemeProvider, DefaultTheme } from 'ui/Theme'
import Nav from 'modules/Nav'
import { SearcherProvider } from 'providers'

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <SearcherProvider>
        <Router>
          <>
            <Nav />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/video/:videoId">
                <VideoDetail />
              </Route>
              <Route exact path="/home">
                <div>home</div>
              </Route>
            </Switch>
          </>
        </Router>
      </SearcherProvider>
    </ThemeProvider>
  )
}

export default App
