import { useQuery } from 'react-query'
import workForceInstance from 'services/axiosInstance'

const useGet = (
  key: string,
  url: string,
  workForce?: boolean,
  configs?: any
) => {
  let headers: any
  const token = typeof window !== 'undefined' && localStorage.getItem('token')
  const get = async () => {
    if (workForce) {
      const { data } = await workForceInstance.get(url, {
        headers: {
          token: token,
          Authorization: `Bearer ${token}`
        }
      })
      return data
    } else {
      if (configs.token)
        headers = {
          'Auth-token': token,
          Authorization: `Bearer ${token}`
        }
      const { data } = await workForceInstance.get(url, { headers })
      return data
    }
  }

  const defaultConfig = {
    enabled: false,
    refetchOnWindowFocus: false,
    retry: false,
    cacheTime: 0,
    ...configs
  }
  return useQuery(key, get, defaultConfig)
}

export default useGet
