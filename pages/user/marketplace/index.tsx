import Modal from 'react-modal'
import AuthLayout from '@/components/AuthLayout'
import withAuth from '@/utils/Authentication'
import { useUserMarketplace } from '@/utils/Customhooks/useUserMarketPlaceData'
import ProgressBarView from '@/views/User/MarketPlacePage/ProgressBarView'
import HeaderView from '@/views/User/MarketPlacePage/HeaderView'
import CardView from '@/views/User/MarketPlacePage/CardView'
import NoProductView from '@/views/User/MarketPlacePage/NoProductView'
import EditProfileModal from '@/components/EditProfileModal'
import PlaceBidModal from '@/components/PlaceBidModal'
import BuyNowModal from '@/components/BuyNowModal'
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
        <Modal
          isOpen={marketplaceData.showEditProfileModal}
          onRequestClose={() => marketplaceData.setShowEditProfileModal(false)}
          ariaHideApp={false}
          style={{
            content: {
              overflow: 'hidden',
              height: '100%',
              width: '100%',
              inset: 0,
              padding: '0px'
            }
          }}
        >
          <EditProfileModal
            showModal={marketplaceData.setShowEditProfileModal}
            selectedImage={marketplaceData.selectedImage}
            setSelectedImage={marketplaceData.setSelectedImage}
            userData={marketplaceData.userData}
            setMenuModalOpen={() => {}}
          />
        </Modal>
      )}
      {marketplaceData.showPlaceBidModal && (
        <PlaceBidModal
          isOpen={marketplaceData.showPlaceBidModal}
          closePlaceBidModal={marketplaceData.closeAllModal}
          productList={marketplaceData.productList}
          selectedProduct={marketplaceData.selectedMachine}
          productDetailData={marketplaceData.productDetailData?.data}
        />
      )}
      {marketplaceData.showBuyNowModal && (
        <BuyNowModal
          isOpen={marketplaceData.showBuyNowModal}
          closeBuyNowModal={marketplaceData.closeAllModal}
          productList={marketplaceData.productList}
          selectedProduct={marketplaceData.selectedMachine}
          toggleActive={marketplaceData.toggleActive}
          productDetailData={marketplaceData.productDetailData?.data}
          setPage={marketplaceData.setPage}
          setForceUpdate={marketplaceData.setForceUpdate}
          setProductList={marketplaceData.setProductList}
        />
      )}
    </AuthLayout>
  )
}

export default withAuth(UserMarketPlace, 'user')
