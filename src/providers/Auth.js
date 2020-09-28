import React, { useReducer, useMemo, useContext } from 'react'
import PropTypes from 'prop-types'
import authReducer, { initialState } from 'reducers/authReducer'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('AuthContext.Provider not found')
  }

  return context
}

export default AuthProvider
