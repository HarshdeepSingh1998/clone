/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import usePut from '@/hooks/usePut'
import { selectUser } from '@/store/userSlice'
import { UseTermsAndConditionsDataType } from '@/views/User/TermsAndConditionsPage/types'

const useTermsandCondtionsData = (): UseTermsAndConditionsDataType => {
  const [checked, setChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const userData = useSelector(selectUser)
  const router = useRouter()
  const { mutateAsync } = usePut()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/')
    }

    if (userData?.data?.role === 'admin') {
      router.back()
    }

    if (userData?.data?.termsAgreed) {
      router.back()
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleHeaderCheckboxToggle = async () => {
    setChecked(prev => !prev)
    setIsLoading(true)
    try {
      const response = await mutateAsync({
        url: '/api/updateTermsAgreed'
      })

      if (response?.data.status === 200) {
        setTimeout(() => {
          router.push('/user/marketplace')
        }, 500)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { checked, isLoading, handleHeaderCheckboxToggle }
}

export default useTermsandCondtionsData
