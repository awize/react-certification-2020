import TYPE from './type'

export const initialState = {
  favoriteVideos:
    JSON.parse(localStorage.getItem('favorites') || '{}').favoriteVideos || []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE.ADD_FAVORITE_VIDEO: {
      const newState = {
        ...state,
        favoriteVideos: [...state.favoriteVideos, payload]
      }
      localStorage.setItem('favorites', JSON.stringify(newState))
      return newState
    }
    case TYPE.REMOVE_FAVORITE_VIDEO: {
      const videoId = payload
      const newState = {
        ...state,
        favoriteVideos: [
          ...state.favoriteVideos.filter((video) => video.videoId !== videoId)
        ]
      }
      localStorage.setItem('favorites', JSON.stringify(newState))
      return newState
    }
    default:
      return state
  }
}
