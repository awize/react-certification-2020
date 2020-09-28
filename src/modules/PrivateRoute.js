import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
  const isLogged = Date.now() % 2
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />
}

PrivateRoute.propTypes = {}

export default PrivateRoute
