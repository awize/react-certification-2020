import authReducer from 'reducers/authReducer'
import TYPE from 'reducers/type'

const state = {
  isLogged: false,
  name: undefined,
  id: undefined,
  avatarUrl: undefined
}

describe('authReducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(state)
  })

  it('should handle LOG_IN_SUCCESS', () => {
    expect(
      authReducer(state, {
        type: TYPE.LOG_IN_SUCCESS,
        payload: {
          name: '1',
          id: '1',
          avatarUrl: 'http://1'
        }
      })
    ).toEqual({
      name: '1',
      id: '1',
      avatarUrl: 'http://1',
      isLogged: true
    })
  })

  it('should handle LOG_OUT_SUCCESS', () => {
    expect(
      authReducer(state, {
        type: TYPE.LOG_OUT_SUCCESS
      })
    ).toEqual({
      name: '',
      id: '',
      avatarUrl: '',
      isLogged: false
    })
  })
})
