import { api } from '../api-client'

export const getUserById = async userId => {
  const data = await api(`/api/customers/${userId}`)
  return data
}
