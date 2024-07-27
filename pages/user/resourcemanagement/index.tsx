import withAuth from '@/utils/Authentication'
import AuthLayout from '@/components/AuthLayout'
import { ResourceManagementContainer } from '@/styles/Pages/User/ResourceManagementPage'
import HeaderView from 'views/User/ResouceManagementPage/HeaderView'

const ResourceManagementPage = () => {
  return (
    <AuthLayout>
      <ResourceManagementContainer>
        <HeaderView />
      </ResourceManagementContainer>
    </AuthLayout>
  )
}

export default withAuth(ResourceManagementPage, 'user')
