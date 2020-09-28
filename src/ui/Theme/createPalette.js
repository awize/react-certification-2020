import { getColorContrast } from '../utils/helpers'
/*
Fg = Foreground
In = inverted
*/
export default ({ colors = {} }) => {
  const allColors = {
    primary: {
      main: '#6c9d7d',
      darker: '#527a60'
    },
    secondary: {
      main: '#6c9d7d',
      darker: '#527a60'
    },
    tertiary: {
      main: '#5f5f00',
      darker: '#343434'
    },
    alert: {
      main: '#830b27',
      darker: '#5e081c'
    },
    ...colors
  }

  Object.keys(allColors).forEach((colorName) => {
    Object.keys(allColors[colorName]).forEach((type) => {
      allColors[colorName][`${type}Contrast`] = getColorContrast(
        allColors[colorName][type]
      )
    })
  })
  return {
    text: {
      primary: '#dfdfdf',
      secondary: '#7a7a7a',
      black: '#000'
    },
    ...allColors
  }
}
