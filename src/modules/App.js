import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from 'pages/Home'
import VideoDetail from 'pages/VideoDetail'
import Favorites from 'pages/Favorites'
import { ThemeProvider, DefaultTheme } from 'ui/Theme'
import Nav from 'modules/Nav'
import { SearcherProvider, AuthProvider, FavoritesProvider } from 'providers'
import PrivateRoute from 'modules/PrivateRoute'

const App = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <AuthProvider>
        <SearcherProvider>
          <FavoritesProvider>
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
                  <Route exact path="/login">
                    <div>Login</div>
                  </Route>
                  <PrivateRoute exact path="/favorites">
                    <Favorites />
                  </PrivateRoute>
                  <Redirect to="/" />
                </Switch>
              </>
            </Router>
          </FavoritesProvider>
        </SearcherProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
