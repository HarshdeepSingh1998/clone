import withAuth from '@/utils/Authentication'
import useMemberDetails from '@/utils/Customhooks/useMemberDetailsData'
import useScreenType from '@/utils/Customhooks/useScreenType'
import MemberDetailsDesktop from 'views/Admin/MembersPage/MemberDetailsPage/Desktop'
import AuthLayout from '@/components/AuthLayout'
import AcceptBidModal from '@/components/AcceptBidModal'
import CounterBidModal from '@/components/CounterBidModal'
import BidHistoryModal from '@/components/BidHistoryModal'
import { MemberDetailsContainer } from '@/styles/Pages/Admin/MembersPage/MemberDetailsPage'
import RejectBidModal from '@/components/RejectBidModal'

const Members = () => {
  const memberDetailsData = useMemberDetails()
  const { screenType } = useScreenType()
  return (
    <AuthLayout
      isPopUpVisible={
        memberDetailsData.isAcceptBidModalVisible ||
        memberDetailsData.isCounterBidModalVisible ||
        memberDetailsData.isBidHistoryModalVisible ||
        memberDetailsData.isRejectBidModalVisible
      }
    >
      <MemberDetailsContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <MemberDetailsDesktop memberDetailsData={memberDetailsData} />
        )}
        {/* {screenType === 'mobile' && <MemberMobile memberData={memberData} />} */}
      </MemberDetailsContainer>
      <AcceptBidModal
        closeModal={memberDetailsData.closeModal}
        selectedBid={memberDetailsData.selectedBid}
        setPage={memberDetailsData.setPage}
        setForceUpdate={memberDetailsData.setForceUpdate}
        isOpen={memberDetailsData.isAcceptBidModalVisible}
        setIsAcceptBidModalVisible={
          memberDetailsData.setIsAcceptBidModalVisible
        }
      />
      <CounterBidModal
        closeModal={memberDetailsData.closeModal}
        selectedBid={memberDetailsData.selectedBid}
        setPage={memberDetailsData.setPage}
        setForceUpdate={memberDetailsData.setForceUpdate}
        isOpen={memberDetailsData.isCounterBidModalVisible}
        setIsCounterBidModalVisible={
          memberDetailsData.setIsCounterBidModalVisible
        }
      />
      <BidHistoryModal
        closeModal={memberDetailsData.closeModal}
        selectedBid={memberDetailsData.selectedBid}
        setPage={memberDetailsData.setPage}
        setForceUpdate={memberDetailsData.setForceUpdate}
        isOpen={memberDetailsData.isBidHistoryModalVisible}
        setIsBidHistoryModalVisible={
          memberDetailsData.setIsBidHistoryModalVisible
        }
        userData={memberDetailsData.userData}
      />
      <RejectBidModal
        closeModal={memberDetailsData.closeModal}
        selectedBid={memberDetailsData.selectedBid}
        setPage={memberDetailsData.setPage}
        setForceUpdate={memberDetailsData.setForceUpdate}
        isOpen={memberDetailsData.isRejectBidModalVisible}
        setIsRejectBidModalVisible={
          memberDetailsData.setIsRejectBidModalVisible
        }
      />
    </AuthLayout>
  )
}

export default withAuth(Members, 'admin')
