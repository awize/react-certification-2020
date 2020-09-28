import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from 'providers'

const PrivateRoute = (props) => {
  const { state } = useAuth()
  return state.isLogged ? <Route {...props} /> : <Redirect to="/" />
}

PrivateRoute.propTypes = {}

export default PrivateRoute
