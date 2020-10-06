import TYPE from './type'

export const initialState = {
  videos: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE.SEARCH_VIDEOS_SUCCESS: {
      const { videos } = payload
      return { ...state, videos }
    }
    default:
      return state
  }
}
