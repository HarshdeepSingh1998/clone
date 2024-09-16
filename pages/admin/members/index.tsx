import withAuth from '@/utils/Authentication'
import useMemberData from '@/utils/Customhooks/useMembersData'
import useScreenType from '@/utils/Customhooks/useScreenType'
import MemberDesktop from '@/views/Admin/MembersPage/Desktop'
import MemberMobile from '@/views/Admin/MembersPage/Mobile'
import AuthLayout from '@/components/AuthLayout'
import AddMemberModal from '@/components/AddMemberModal'
import { MembersContainer } from '@/styles/Pages/Admin/MembersPage'

const Members = () => {
  const memberData = useMemberData()
  const { screenType } = useScreenType()

  return (
    <AuthLayout isPopUpVisible={memberData.showAddMemberModal}>
      <MembersContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <MemberDesktop memberData={memberData} />
        )}
        {screenType === 'mobile' && <MemberMobile memberData={memberData} />}
      </MembersContainer>
      <AddMemberModal memberData={memberData} />
    </AuthLayout>
  )
}

export default withAuth(Members, 'admin')
