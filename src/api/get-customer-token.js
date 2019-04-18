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

  const apiResponse = await response.json()

  const { access_token, owner_id } = apiResponse
  setToken(access_token)

  return { access_token, owner_id }
}
