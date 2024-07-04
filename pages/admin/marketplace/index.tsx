import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import HeaderView from '@/views/Admin/MarketPlacePage/HeaderView'
import CardView from '@/views/Admin/MarketPlacePage/CardView'
import { MarketPlaceContainer } from '@/styles/Pages/Admin/MarketPlace'

const AdminMarketPlace = () => {
  return (
    <AuthLayout>
      <MarketPlaceContainer>
        <HeaderView />
        <CardView />
      </MarketPlaceContainer>
    </AuthLayout>
  )
}

export default withAuth(AdminMarketPlace, 'admin')
