import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import { useUserMarketplace } from '@/utils/Customhooks/useUserMarketPlaceData'
import ProgressBarView from '@/views/User/MarketPlacePage/ProgressBarView'
import HeaderView from '@/views/User/MarketPlacePage/HeaderView'
import CardView from '@/views/User/MarketPlacePage/CardView'
import NoProductView from '@/views/User/MarketPlacePage/NoProductView'
import { MarketPlaceContainer } from '@/styles/Pages/User/MarketPlacePage'

const UserMarketPlace = () => {
  const marketplaceData = useUserMarketplace()
  return (
    <AuthLayout>
      <MarketPlaceContainer>
        <ProgressBarView marketplaceData={marketplaceData} />
        <HeaderView marketplaceData={marketplaceData} />
        <CardView marketplaceData={marketplaceData} />
        <NoProductView
          productList={marketplaceData.productList}
          data={marketplaceData.data}
          handleLoadMoreClick={marketplaceData.handleLoadMoreClick}
        />
      </MarketPlaceContainer>
    </AuthLayout>
  )
}

export default withAuth(UserMarketPlace, 'user')
