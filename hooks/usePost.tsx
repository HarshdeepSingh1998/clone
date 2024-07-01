import { useMutation } from 'react-query'
import workForceInstance from 'services/axiosInstance'

interface IParam {
  url: string
  payload?: any
  token?: string
}
const post = async ({ url, payload }: IParam) => {
  const authToken = localStorage.getItem('token')

  const data = await workForceInstance.post(url, payload, {
    headers: { Authorization: `Bearer ${authToken}` }
  })
  return data
}

const usePost = () => useMutation(post)

export default usePost
