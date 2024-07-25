import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import { useUserMarketplace } from '@/utils/Customhooks/useUserMarketPlaceData'
import ProgressBarView from '@/views/User/MarketPlacePage/ProgressBarView'
import HeaderView from '@/views/User/MarketPlacePage/HeaderView'
import CardView from '@/views/User/MarketPlacePage/CardView'
import NoProductView from '@/views/User/MarketPlacePage/NoProductView'
import EditProfileModal from '@/components/EditProfileModal'
import PlaceBidModal from '@/components/PlaceBidModal'
import { MarketPlaceContainer } from '@/styles/Pages/User/MarketPlacePage'

const UserMarketPlace = () => {
  const marketplaceData = useUserMarketplace()
  return (
    <AuthLayout
      isPopUpVisible={
        marketplaceData.showEditProfileModal ||
        marketplaceData.showPlaceBidModal ||
        marketplaceData.showBuyNowModal
      }
    >
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
      {marketplaceData.showEditProfileModal && (
        <EditProfileModal
          showModal={marketplaceData.setShowEditProfileModal}
          selectedImage={marketplaceData.selectedImage}
          setSelectedImage={marketplaceData.setSelectedImage}
          userData={marketplaceData.userData}
          setMenuModalOpen={() => {}}
        />
      )}
      {marketplaceData.showPlaceBidModal && (
        <PlaceBidModal
          closePlaceBidModal={marketplaceData.closeAllModal}
          data={marketplaceData.productList}
          selectedProduct={marketplaceData.selectedMachine}
          productDetailData={marketplaceData.productDetailData?.data}
        />
      )}
      {/* {marketplaceData.showBuyNowModal && (
        <BuyNowModal
          closeBuyNowModal={marketplaceData.closeAllModal}
          data={marketplaceData.productList}
          selectedProduct={marketplaceData.selectedMachine}
          toggleActive={marketplaceData.toggleActive}
          productDetailData={marketplaceData.productDetailData?.data}
          setPage={marketplaceData.setPage}
          setForceUpdate={marketplaceData.setForceUpdate}
          setProductList={marketplaceData.setProductList}
        />
      )} */}
    </AuthLayout>
  )
}

export default withAuth(UserMarketPlace, 'user')
