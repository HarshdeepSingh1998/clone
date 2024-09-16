import { useEffect, useState } from 'react'
import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import HeaderView from '@/views/Admin/MarketPlacePage/HeaderView'
import CardView from '@/views/Admin/MarketPlacePage/CardView'
import NoProductView from '@/views/Admin/MarketPlacePage/NoProductView'
import { MarketPlaceContainer } from '@/styles/Pages/Admin/MarketPlacePage'
import useAdminMarketPlace from '@/utils/Customhooks/useAdminMarketPlace'

const AdminMarketPlace = () => {
  const {
    toggleActive,
    handleBuyAndHostClick,
    handleShopClick,
    data,
    productList,
    handleLoadMoreClick
  } = useAdminMarketPlace()
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient) {
    return null
  }

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
