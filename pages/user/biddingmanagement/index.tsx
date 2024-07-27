import withAuth from '@/utils/Authentication'
import useAuctionManagementData from '@/utils/Customhooks/useUserAuctionManagementData'
import useScreenType from '@/utils/Customhooks/useScreenType'
import AuthLayout from '@/components/AuthLayout'
import AcceptBidModal from '@/components/AcceptBidModal'
import CounterBidModal from '@/components/CounterBidModal'
import BidHistoryModal from '@/components/BidHistoryModal'
import RejectBidModal from '@/components/RejectBidModal'
import AuctionManagementDesktop from '@/views/User/AuctionManagementPage/Desktop'
import AuctionManagementMobile from '@/views/User/AuctionManagementPage/Mobile'
import { AuctionManagementContainer } from '@/styles/Pages/User/AuctionManagementPage'

const AuctionManagement = () => {
  const auctionManagementData = useAuctionManagementData()
  const { screenType } = useScreenType()
  return (
    <AuthLayout
      isPopUpVisible={
        auctionManagementData.isAcceptBidModalVisible ||
        auctionManagementData.isCounterBidModalVisible ||
        auctionManagementData.isBidHistoryModalVisible ||
        auctionManagementData.isRejectBidModalVisible
      }
    >
      <AuctionManagementContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <AuctionManagementDesktop
            auctionManagementData={auctionManagementData}
            screenType={screenType}
          />
        )}
        {screenType === 'mobile' && (
          <AuctionManagementMobile
            auctionManagementData={auctionManagementData}
            screenType={screenType}
          />
        )}
      </AuctionManagementContainer>
      <AcceptBidModal
        closeModal={auctionManagementData.closeModal}
        selectedBid={auctionManagementData.selectedBid}
        setPage={auctionManagementData.setPage}
        setForceUpdate={auctionManagementData.setForceUpdate}
        isOpen={auctionManagementData.isAcceptBidModalVisible}
        setIsAcceptBidModalVisible={
          auctionManagementData.setIsAcceptBidModalVisible
        }
      />
      <CounterBidModal
        closeModal={auctionManagementData.closeModal}
        selectedBid={auctionManagementData.selectedBid}
        setPage={auctionManagementData.setPage}
        setForceUpdate={auctionManagementData.setForceUpdate}
        isOpen={auctionManagementData.isCounterBidModalVisible}
        setIsCounterBidModalVisible={
          auctionManagementData.setIsCounterBidModalVisible
        }
      />
      <BidHistoryModal
        closeModal={auctionManagementData.closeModal}
        selectedBid={auctionManagementData.selectedBid}
        setPage={auctionManagementData.setPage}
        setForceUpdate={auctionManagementData.setForceUpdate}
        isOpen={auctionManagementData.isBidHistoryModalVisible}
        setIsBidHistoryModalVisible={
          auctionManagementData.setIsBidHistoryModalVisible
        }
        userData={auctionManagementData.userData}
      />
      <RejectBidModal
        closeModal={auctionManagementData.closeModal}
        selectedBid={auctionManagementData.selectedBid}
        setPage={auctionManagementData.setPage}
        setForceUpdate={auctionManagementData.setForceUpdate}
        isOpen={auctionManagementData.isRejectBidModalVisible}
        setIsRejectBidModalVisible={
          auctionManagementData.setIsRejectBidModalVisible
        }
      />
    </AuthLayout>
  )
}

export default withAuth(AuctionManagement, 'user')
