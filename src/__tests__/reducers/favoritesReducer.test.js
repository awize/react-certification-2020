import favoritesReducer from 'reducers/favoritesReducer'
import TYPE from 'reducers/type'

const video = {
  videoId: 1
}

const state = { favoriteVideos: [] }

describe('favoritesReducer', () => {
  it('should return the initial state', () => {
    expect(favoritesReducer(undefined, {})).toEqual(state)
  })

  it('should handle ADD_FAVORITE_VIDEO', () => {
    expect(
      favoritesReducer(state, {
        type: TYPE.ADD_FAVORITE_VIDEO,
        payload: {
          videoId: 1
        }
      })
    ).toEqual({
      favoriteVideos: [video]
    })
  })

  it('should handle REMOVE_FAVORITE_VIDEO', () => {
    expect(
      favoritesReducer(
        { favoriteVideos: [video] },
        {
          type: TYPE.REMOVE_FAVORITE_VIDEO,
          payload: 1
        }
      )
    ).toEqual({
      favoriteVideos: []
    })
  })
})
