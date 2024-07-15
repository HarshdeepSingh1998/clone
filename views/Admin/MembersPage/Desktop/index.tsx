import { MemberDataInterface } from 'views/Admin/MembersPage/Desktop/types'
import HeaderView from 'views/Admin/MembersPage/Desktop/HeaderView'
import TableView from 'views/Admin/MembersPage/Desktop/TableView'

const MemberDesktop = ({ memberData }: { memberData: MemberDataInterface }) => {
  return (
    <>
      <HeaderView memberData={memberData} />
      <TableView memberData={memberData} />
    </>
  )
}

export default MemberDesktop
