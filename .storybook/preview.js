import React from 'react'
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons'
import { ThemeProvider, DefaultTheme as theme } from '../src/ui/Theme'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider]
