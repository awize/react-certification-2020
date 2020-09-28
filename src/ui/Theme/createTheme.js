import createMixins from './createMixins'
import createPalette from './createPalette'

const createTheme = (custom = {}) => {
  return {
    flexColumns: 24,
    mixins: { ...createMixins(custom) },
    palette: { ...createPalette(custom) }
  }
}

export default createTheme
