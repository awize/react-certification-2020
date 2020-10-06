import searcherReducer from 'reducers/searcherReducer'
import TYPE from 'reducers/type'

const state = {
  videos: []
}

describe('searcherReducer', () => {
  it('should return the initial state', () => {
    expect(searcherReducer(undefined, {})).toEqual(state)
  })

  it('should handle SEARCH_VIDEOS_SUCCESS', () => {
    expect(
      searcherReducer(state, {
        type: TYPE.SEARCH_VIDEOS_SUCCESS,
        payload: { videos: [1, 2, 3] }
      })
    ).toEqual({
      videos: [1, 2, 3]
    })
  })
})
