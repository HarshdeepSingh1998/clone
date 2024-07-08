import { useMutation } from 'react-query'
import workForceInstance from 'services/axiosInstance'

interface IParam {
  url: string
  payload?: any
  token?: string
}

const deleteApi = async ({ url, payload }: IParam) => {
  const token = typeof window !== 'undefined' && localStorage.getItem('token')

  const data = await workForceInstance.delete(url, {
    headers: {
      token: token,
      Authorization: `Bearer ${token}`
    },
    data: payload
  })
  return data
}

const useDelete = () => useMutation(deleteApi)

export default useDelete
