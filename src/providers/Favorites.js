import React, { useReducer, useContext } from 'react'
import PropTypes from 'prop-types'
import favoritesReducer, { initialState } from 'reducers/favoritesReducer'

const FavoritesContext = React.createContext()

const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState)

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  )
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error('FavoritesContext.Provider not found')
  }

  const { dispatch, state } = context

  return { state, dispatch }
}

export default FavoritesProvider
