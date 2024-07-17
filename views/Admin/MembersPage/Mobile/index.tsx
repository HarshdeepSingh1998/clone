import { MemberDataInterface } from 'views/Admin/MembersPage/Mobile/types'
import HeaderView from 'views/Admin/MembersPage/Mobile/HeaderView'
import TableView from 'views/Admin/MembersPage/Mobile/TableView'

const MemberMobile = ({ memberData }: { memberData: MemberDataInterface }) => {
  return (
    <>
      <HeaderView memberData={memberData} />
      <TableView memberData={memberData} />
    </>
  )
}

export default MemberMobile
