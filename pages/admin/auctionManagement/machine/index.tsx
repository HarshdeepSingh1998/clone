import { useState, useEffect } from 'react'
import withAuth from '@/utils/Authentication'
import useAuctionManagementMachineDetail from '@/utils/Customhooks/useAuctionManagementMachineDetail'
import useScreenType from '@/utils/Customhooks/useScreenType'
import AuthLayout from '@/components/AuthLayout'
import AcceptBidModal from '@/components/AcceptBidModal'
import CounterBidModal from '@/components/CounterBidModal'
import BidHistoryModal from '@/components/BidHistoryModal'
import RejectBidModal from '@/components/RejectBidModal'
import AuctionManagementMachineDetailDesktop from '@/views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Desktop'
import AuctionManagementMachineDetailMobile from '@/views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Mobile'
import { AuctionManagementMachineDetailContainer } from '@/styles/Pages/Admin/AuctionManagementPage/AuctionManagementMachineDetail'

const AuctionManagementMachineDetail = () => {
  const auctionManagementData = useAuctionManagementMachineDetail()
  const { screenType } = useScreenType()
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  if (!isClient) {
    return null
  }

  return (
    <AuthLayout
      isPopUpVisible={
        auctionManagementData.isAcceptBidModalVisible ||
        auctionManagementData.isCounterBidModalVisible ||
        auctionManagementData.isBidHistoryModalVisible ||
        auctionManagementData.isRejectBidModalVisible
      }
    >
      <AuctionManagementMachineDetailContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <AuctionManagementMachineDetailDesktop
            auctionManagementData={auctionManagementData}
          />
        )}
        {screenType === 'mobile' && (
          <AuctionManagementMachineDetailMobile
            auctionManagementData={auctionManagementData}
          />
        )}
      </AuctionManagementMachineDetailContainer>
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

export default withAuth(AuctionManagementMachineDetail, 'admin')
