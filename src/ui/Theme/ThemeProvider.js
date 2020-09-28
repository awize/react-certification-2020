import React from 'react'
import { normalize } from 'polished'
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle
} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  ${normalize()}
  * {
    font-family: 'Lato', sans-serif;
  }

`
const ThemeProvider = (props) => {
  return (
    <>
      <GlobalStyle />
      <StyledThemeProvider {...props} />
    </>
  )
}

ThemeProvider.propTypes = {}

export default ThemeProvider
