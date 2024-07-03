import { useMutation } from 'react-query'
import workForceInstance from 'services/axiosInstance'

interface IParam {
  url: string
  payload?: any
  token?: string
}
const put = async ({ url, payload }: IParam) => {
  const authToken = localStorage.getItem('token')

  const data = await workForceInstance.put(url, payload, {
    headers: { Authorization: `Bearer ${authToken}` }
  })
  return data
}

const usePut = () => useMutation(put)

export default usePut
