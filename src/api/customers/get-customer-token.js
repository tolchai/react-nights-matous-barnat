import config from '../../config'
import { AsyncValidationError } from '../../utils/errors'
import { toast } from 'react-toastify'

export const getCustomerToken = async ({ username, password }) => {
  const response = await fetch(`${config.apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'password',
      client_id: config.clientId,
      scope: config.scope,
      username,
      password,
    }),
  })

  switch (response.status) {
    case 200: {
      const { owner_id, access_token, refresh_token } = await response.json()
      return { ownerId: owner_id, access_token, refresh_token }
    }
    case 401:
      toast.error('Email or password are incorrect', {
        position: toast.POSITION.TOP_LEFT,
      })
      throw new AsyncValidationError('Email or password are incorrect')
    default:
      toast.error('Unexpected error, try again later', {
        position: toast.POSITION.TOP_LEFT,
      })
      throw new Error('Unexpected error')
  }
}
