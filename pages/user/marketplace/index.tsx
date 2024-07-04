import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'

const AdminMarketPlace = () => {
  return (
    <AuthLayout>
      <div>hi</div>
    </AuthLayout>
  )
}

export default withAuth(AdminMarketPlace, 'user')
