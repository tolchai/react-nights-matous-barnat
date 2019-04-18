export const LOGIN_USER = 'user/LOGIN_USER'
export const LOGOUT_USER = 'user/LOGOUT_USER'

export const loginUser = token => ({
  type: LOGIN_USER,
  payload: token,
})

export const logoutUser = token => ({
  type: LOGOUT_USER,
  payload: token,
})
