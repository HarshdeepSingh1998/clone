import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import ModalView from 'views/ResetPasswordPage/ModalView'

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])
  return (
    <>
      <Loader isLoading={isLoading} />
      <ModalView />
    </>
  )
}

export default ResetPassword
