import TYPE from './type'

export const initialState = {
  videos: [],
  totalPages: 0,
  currentPage: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE.SEARCH_VIDEOS_SUCCESS: {
      const { videos, totalPages } = payload
      return { ...state, videos, totalPages, currentPage: 0 }
    }
    case TYPE.SEARCH_NEXT_PAGE: {
      return { ...initialState }
    }
    default:
      return state
  }
}
