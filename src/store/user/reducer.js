import { LOGIN_USER, LOGOUT_USER } from './actions'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload,
      }
    case LOGOUT_USER: {
      // const nextState = Object.assign({}, state)
      // delete nextState['user']
      // return nextState
      return state
    }
    default:
      return state
  }
}

export default reducer
