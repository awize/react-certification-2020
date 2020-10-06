import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider, DefaultTheme } from 'ui/Theme'
import { AuthProvider, FavoritesProvider, SearcherProvider } from 'providers'
import { BrowserRouter } from 'react-router-dom'

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={DefaultTheme}>
        <AuthProvider>
          <FavoritesProvider>
            <SearcherProvider>{children}</SearcherProvider>
          </FavoritesProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
