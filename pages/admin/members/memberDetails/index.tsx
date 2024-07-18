import withAuth from '@/utils/Authentication'
import useMemberDetails from '@/utils/Customhooks/useMemberDetailsData'
import useScreenType from '@/utils/Customhooks/useScreenType'
import MemberDetailsDesktop from 'views/Admin/MembersPage/MemberDetailsPage/Desktop'
// import MemberMobile from '@/views/Admin/MembersPage/Mobile'
import AuthLayout from '@/components/AuthLayout'
// import AddMemberModal from '@/components/AddMemberModal'
import { MemberDetailsContainer } from '@/styles/Pages/Admin/MembersPage/MemberDetailsPage'

const Members = () => {
  const memberDetailsData = useMemberDetails()
  const { screenType } = useScreenType()
  return (
    <AuthLayout>
      <MemberDetailsContainer>
        {(screenType === 'desktop' || screenType === 'tab') && (
          <MemberDetailsDesktop memberDetailsData={memberDetailsData} />
        )}
        {/* {screenType === 'mobile' && <MemberMobile memberData={memberData} />} */}
      </MemberDetailsContainer>
      {/* <AddMemberModal memberData={memberData} /> */}
    </AuthLayout>
  )
}

export default withAuth(Members, 'admin')
