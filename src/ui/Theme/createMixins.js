import { css } from 'styled-components'

const mediaSizes = {
  ipad: 481,
  laptop: 769,
  desktop: 1025,
  tv: 1201
}

export default ({ mixins = [] }) => {
  const mediaQueries = Object.keys(mediaSizes).reduce((media, key) => {
    const mediaFunction = (...args) => css`
      @media (min-width: ${mediaSizes[key] / 16}em) {
        ${css(...args)}
      }
    `
    return {
      ...media,
      [key]: mediaFunction
    }
  }, {})

  const rem = (s) => {
    return s
      .split(' ')
      .map((tk) => `${parseInt(tk, 10) / 16}rem`)
      .join(' ')
  }

  return { rem, mediaQueries, ...mixins }
}
