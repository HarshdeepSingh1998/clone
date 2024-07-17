/* eslint-disable no-unused-vars */
import { MemberDataInterface } from 'views/Admin/MembersPage/Mobile/types'
import NoProductView from 'views/Admin/MembersPage/Mobile/NoProductView'
import {
  columns,
  generateTableData,
  TableData
} from 'views/Admin/MembersPage/Mobile/data'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage,
  Table,
  ContentContainer,
  TableList,
  HeaderText
} from '@/styles/Views/Admin/MembersPage/Mobile/Table'

const TableView = ({ memberData }: { memberData: MemberDataInterface }) => {
  const data = generateTableData(memberData)
  const memberListLength = memberData.memberList?.length ?? 0

  return (
    <TableContainer
      isGap={
        (memberData.memberList || [])?.length <
        memberData.membersList?.data?.meta?.totalNumberOfResults
      }
    >
      <TableContent>
        <HeaderTitle>
          <BoxImage />
          All Members
        </HeaderTitle>
      </TableContent>
      <Table>
        {memberData?.memberList?.map((memberData, i) => (
          <ContentContainer
            key={i}
            className={i === memberListLength - 1 ? 'last' : ''}
          >
            {columns?.map((column, j) => (
              <TableList
                className={`mobile-responsive ${j === 0 ? 'first-column' : ''}`}
                key={j}
              >
                <HeaderText className="contract-header">
                  {typeof column.label === 'function'
                    ? column.label({ memberData })
                    : column.label}
                </HeaderText>
                {data && data[i][column.id as keyof TableData]}
              </TableList>
            ))}
          </ContentContainer>
        ))}
      </Table>
      <NoProductView
        productList={memberData.memberList}
        data={memberData.membersList}
        handleLoadMoreClick={memberData.handleLoadMoreClick}
      />
    </TableContainer>
  )
}

export default TableView
