/* eslint-disable no-unused-vars */
import { MemberDetailsDataInterface } from '@/views/Admin/MembersPage/MemberDetailsPage/Mobile/types'
import NoProductView from 'views/Admin/MembersPage/MemberDetailsPage/Mobile/NoProductView'
import {
  generateTableData,
  columns,
  TableData,
  generateBiddingTableData,
  biddingColumns,
  BidTableData
} from 'views/Admin/MembersPage/MemberDetailsPage/Mobile/data'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage,
  ButtonContainer,
  ButtonContent,
  MemberDetailsButton,
  Table,
  ContentContainer,
  TableList,
  HeaderText
} from '@/styles/Views/Admin/MembersPage/MemberDetails/Mobile/Table'

const TableView = ({
  memberDetailsData
}: {
  memberDetailsData: MemberDetailsDataInterface
}) => {
  const data = generateTableData(
    memberDetailsData?.memberDetailsData?.assignedProducts?.slice(
      0,
      memberDetailsData?.displayedRows
    )
  )

  const dataLength =
    memberDetailsData?.memberDetailsData?.assignedProducts?.slice(
      0,
      memberDetailsData?.displayedRows
    )?.length ?? 0

  const bidData = generateBiddingTableData(memberDetailsData?.biddingList)

  return (
    <TableContainer
      isGap={
        memberDetailsData?.displayedRows <
        Number(memberDetailsData?.memberDetailsData?.assignedProducts?.length)
      }
    >
      <TableContent>
        <div>
          <HeaderTitle>
            <BoxImage />
            Products
          </HeaderTitle>
        </div>
        <ButtonContainer>
          <ButtonContent>
            <MemberDetailsButton
              className={memberDetailsData.active === '1' ? 'active' : ''}
              onClick={() => memberDetailsData.setActive('1')}
            >
              Owned
            </MemberDetailsButton>
            <MemberDetailsButton
              className={memberDetailsData.active === '2' ? 'active' : ''}
              onClick={() => memberDetailsData.setActive('2')}
            >
              Bid
            </MemberDetailsButton>
          </ButtonContent>
        </ButtonContainer>
        <Table>
          {memberDetailsData.active == '1' &&
            memberDetailsData?.memberDetailsData?.assignedProducts
              ?.slice(0, memberDetailsData?.displayedRows)
              ?.map((memberDetailData, i) => (
                <ContentContainer
                  key={i}
                  className={i === dataLength - 1 ? 'last' : ''}
                >
                  {columns?.map((column, j) => (
                    <TableList
                      className={`mobile-responsive ${j === 0 ? 'first-column' : ''}`}
                      key={j}
                    >
                      <HeaderText className="contract-header">
                        {typeof column.label === 'function'
                          ? column.label({ memberDetailData })
                          : column.label}
                      </HeaderText>
                      {data && data[i][column.id as keyof TableData]}
                    </TableList>
                  ))}
                </ContentContainer>
              ))}
          {memberDetailsData.active == '2' &&
            memberDetailsData?.biddingList?.map((biddingListData, i) => (
              <ContentContainer
                key={i}
                className={i === dataLength - 1 ? 'last' : ''}
              >
                {biddingColumns?.map((column, j) => (
                  <TableList
                    className={`mobile-responsive ${j === 0 ? 'first-column' : ''}`}
                    key={j}
                  >
                    <HeaderText className="contract-header">
                      {typeof column.label === 'function'
                        ? column.label({ biddingListData, memberDetailsData })
                        : column.label}
                    </HeaderText>
                    {bidData && bidData[i][column.id as keyof BidTableData]}
                  </TableList>
                ))}
              </ContentContainer>
            ))}
        </Table>
      </TableContent>
      <NoProductView
        productList={memberDetailsData}
        data={memberDetailsData.memberDetailsData}
        handleLoadMoreClick={memberDetailsData.handleShowMoreRows}
        biddingList={memberDetailsData.biddingList}
        active={memberDetailsData.active}
      />
    </TableContainer>
  )
}

export default TableView
