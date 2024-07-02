import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import ModalView from '@/views/SignupPage/ModalView'

const Signup = () => {
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

export default Signup
