import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import HeaderView from '@/views/Admin/MarketPlacePage/HeaderView'
import CardView from '@/views/Admin/MarketPlacePage/CardView'
import { MarketPlaceContainer } from '@/styles/Pages/Admin/MarketPlace'
import useAdminMarketPlace from '@/utils/Customhooks/useAdminMarketPlace'
import NoProductView from '@/views/Admin/MarketPlacePage/NoProductView'

const AdminMarketPlace = () => {
  const {
    toggleActive,
    handleBuyAndHostClick,
    handleShopClick,
    hosting,
    data,
    productList,
    handleLoadMoreClick
  } = useAdminMarketPlace()
  return (
    <AuthLayout>
      <MarketPlaceContainer>
        <HeaderView
          toggleActive={toggleActive}
          handleBuyAndHostClick={handleBuyAndHostClick}
          handleShopClick={handleShopClick}
        />
        <CardView data={data} productList={productList} />
        <NoProductView
          productList={productList}
          data={data}
          handleLoadMoreClick={handleLoadMoreClick}
        />
      </MarketPlaceContainer>
    </AuthLayout>
  )
}

export default withAuth(AdminMarketPlace, 'admin')
