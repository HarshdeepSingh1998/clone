import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import { useUserMarketplace } from '@/utils/Customhooks/useUserMarketPlaceData'
import ProgressBarView from '@/views/User/MarketPlacePage/ProgressBarView'
import { MarketPlaceContainer } from '@/styles/Pages/User/MarketPlacePage'

const AdminMarketPlace = () => {
  const marketplaceData = useUserMarketplace()
  return (
    <AuthLayout>
      <MarketPlaceContainer>
        <ProgressBarView marketplaceData={marketplaceData} />
        {/* <HeaderView />
        <CardView />
        <NoProductView /> */}
      </MarketPlaceContainer>
    </AuthLayout>
  )
}

export default withAuth(AdminMarketPlace, 'user')
