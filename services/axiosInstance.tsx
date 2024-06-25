import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT
})

axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error: any) {
    if (
      error?.response?.status === 401 &&
      error?.response?.data?.message !== 'Invalid password'
    ) {
      localStorage.clear()
      window.location.href = '/'
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
