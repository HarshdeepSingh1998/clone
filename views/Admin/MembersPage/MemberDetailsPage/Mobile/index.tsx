import { MemberDetailsDataInterface } from '@/views/Admin/MembersPage/MemberDetailsPage/Mobile/types'
import HeaderView from 'views/Admin/MembersPage/MemberDetailsPage/Mobile/HeaderView'
import TableView from 'views/Admin/MembersPage/MemberDetailsPage/Mobile/TableView'

const MemberDetailsMobile = ({
  memberDetailsData
}: {
  memberDetailsData: MemberDetailsDataInterface
}) => {
  return (
    <>
      <HeaderView memberDetailsData={memberDetailsData} />
      <TableView memberDetailsData={memberDetailsData} />
    </>
  )
}

export default MemberDetailsMobile
