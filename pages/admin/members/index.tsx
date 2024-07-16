import withAuth from '@/utils/Authentication'
import useMemberData from '@/utils/Customhooks/useMembersData'
import useScreenType from '@/utils/Customhooks/useScreenType'
import MemberDesktop from '@/views/Admin/MembersPage/Desktop'
import AuthLayout from '@/components/AuthLayout'
import AddMemberModal from '@/components/AddMemberModal'
import { MembersContainer } from '@/styles/Pages/Admin/MembersPage'

const Members = () => {
  const memberData = useMemberData()
  const { screenType } = useScreenType()
  return (
    <AuthLayout>
      <MembersContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <MemberDesktop memberData={memberData} />
        )}
        {/* {(screenType === 'mobile' || screenType === 'tab') && (
          <SalesMobile salesData={salesData} screenType={screenType} />
        )} */}
      </MembersContainer>
      <AddMemberModal memberData={memberData} />
    </AuthLayout>
  )
}

export default withAuth(Members, 'admin')
