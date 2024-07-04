import { useMutation } from 'react-query'
import workForceInstance from 'services/axiosInstance'

interface IParam {
  url: string
  payload?: any
  token?: string
}
const patch = async ({ url, payload }: IParam) => {
  const authToken = localStorage.getItem('token')

  const data = await workForceInstance.patch(url, payload, {
    headers: { Authorization: `Bearer ${authToken}` }
  })
  return data
}

const usePatch = () => useMutation(patch)

export default usePatch
