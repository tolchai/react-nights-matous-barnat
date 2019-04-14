import { LOGIN_USER, LOGOUT_USER } from './actions'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      console.log(action.payload)
      return {
        ...state,
        ...action.payload,
      }
    case LOGOUT_USER: {
      return state
    }
    default:
      return state
  }
}

export default reducer
