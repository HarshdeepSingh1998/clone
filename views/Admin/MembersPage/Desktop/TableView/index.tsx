import {
  generateTableData,
  columns
} from 'views/Admin/MembersPage/Desktop/data'
import { MemberDataInterface } from 'views/Admin/MembersPage/Desktop/types'
import NoProductView from 'views/Admin/MembersPage/Desktop/NoProductView'
import TableComponent from '@/components/Table'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage
} from '@/styles/Views/Admin/MembersPage/Desktop/Table'

const TableView = ({ memberData }: { memberData: MemberDataInterface }) => {
  const data = generateTableData(memberData)
  return (
    <TableContainer
      isGap={
        (memberData.memberList || [])?.length <
        memberData.membersList?.data?.meta?.totalNumberOfResults
      }
    >
      <TableContent>
        <div>
          <HeaderTitle>
            <BoxImage />
            All Members
          </HeaderTitle>
        </div>
        <TableComponent columns={columns} data={data} />
      </TableContent>
      <NoProductView
        productList={memberData.memberList}
        data={memberData.membersList}
        handleLoadMoreClick={memberData.handleLoadMoreClick}
      />
    </TableContainer>
  )
}

export default TableView
