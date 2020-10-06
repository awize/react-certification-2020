import React from 'react'
import ReactDOM from 'react-dom'
import App from 'modules/App'

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
})
