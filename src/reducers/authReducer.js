import TYPE from './type'

export const initialState = {
  isLogged: !!JSON.parse(localStorage.getItem('auth') || '{}').name,
  name: JSON.parse(localStorage.getItem('auth') || '{}').name,
  id: JSON.parse(localStorage.getItem('auth') || '{}').id,
  avatarUrl: JSON.parse(localStorage.getItem('auth') || '{}').avatarUrl
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPE.LOG_IN_SUCCESS: {
      const { name, id, avatarUrl } = payload
      localStorage.setItem('auth', JSON.stringify({ name, id, avatarUrl }))
      return { ...state, isLogged: true, name, id, avatarUrl }
    }
    case TYPE.LOG_OUT_SUCCESS: {
      localStorage.clear()
      return { isLogged: false, name: '', id: '', avatarUrl: '' }
    }
    default:
      return state
  }
}
