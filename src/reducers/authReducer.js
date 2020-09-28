import TYPE from './type'

export const initialState = {
  isLogged: false,
  username: '',
  email: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE.LOG_IN_SUCCESS: {
      const { username, email } = payload
      return { ...state, isLogged: true, username, email }
    }
    case TYPE.LOG_OUT_SUCCESS: {
      return { ...initialState }
    }
    default:
      return state
  }
}
