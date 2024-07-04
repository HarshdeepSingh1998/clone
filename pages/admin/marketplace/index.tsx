import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import HeaderView from '@/views/Admin/MarketPlacePage/HeaderView'
import CardView from '@/views/Admin/MarketPlacePage/CardView'
import { MarketPlaceContainer } from '@/styles/Pages/Admin/MarketPlace'
import useAdminMarketPlace from '@/utils/Customhooks/useAdminMarketPlace'

const AdminMarketPlace = () => {
  const {
    toggleActive,
    handleBuyAndHostClick,
    handleShopClick,
    hosting,
    data,
    productList
  } = useAdminMarketPlace()
  return (
    <AuthLayout>
      <MarketPlaceContainer>
        <HeaderView
          toggleActive={toggleActive}
          handleBuyAndHostClick={handleBuyAndHostClick}
          handleShopClick={handleShopClick}
        />
        <CardView hosting={hosting} data={data} productList={productList} />
      </MarketPlaceContainer>
    </AuthLayout>
  )
}

export default withAuth(AdminMarketPlace, 'admin')
