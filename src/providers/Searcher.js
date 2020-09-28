import React, { useReducer, useContext } from 'react'
import PropTypes from 'prop-types'
import searcherReducer, { initialState } from 'reducers/searcherReducer'

const SearcherContext = React.createContext()

const SearcherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searcherReducer, initialState)

  return (
    <SearcherContext.Provider value={{ state, dispatch }}>
      {children}
    </SearcherContext.Provider>
  )
}

SearcherProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useSearcher = () => {
  const context = useContext(SearcherContext)

  if (!context) {
    throw new Error('SearcherContext.Provider not found')
  }

  const { dispatch, state } = context

  return { ...state, dispatch }
}

export default SearcherProvider
