import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '@/store/userSlice'

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token')
  return token ? true : false
}

const withAuth = (
  WrappedComponent: React.ComponentType,
  AllowedRole: string
) => {
  const Wrapper: React.FC = props => {
    const router = useRouter()
    const userData = useSelector(selectUser)

    useEffect(() => {
      // Check if the user is authenticated
      if (!isAuthenticated()) {
        // If not authenticated, redirect to the login page
        router.push('/signin')
      }

      if (AllowedRole !== userData.data?.role) {
        // Default redirect paths based on role
        const redirectPath =
          userData.data?.role === 'admin'
            ? '/admin/marketplace'
            : '/user/marketplace'
        router.push(redirectPath)
      }
    }, [router, userData.data?.role])

    return <WrappedComponent {...props} />
  }

  return Wrapper
}

export default withAuth
