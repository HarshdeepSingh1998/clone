import { MemberDetailsDataInterface } from '@/views/Admin/MembersPage/MemberDetailsPage/Desktop/types'
import HeaderView from 'views/Admin/MembersPage/MemberDetailsPage/Desktop/HeaderView'
import TableView from 'views/Admin/MembersPage/MemberDetailsPage/Desktop/TableView'

const MemberDetailsDesktop = ({
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

export default MemberDetailsDesktop
