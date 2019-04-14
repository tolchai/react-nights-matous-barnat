import config from '../config'
import { setToken } from '../utils/token'

export const getCustomerToken = async ({ email, password }) => {
  const response = await fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'password',
      username: email,
      password: password,
      client_id: config.clientId,
      scope: config.scope,
    }),
  })

  const { access_token } = await response.json()
  setToken(access_token)

  return access_token
}
