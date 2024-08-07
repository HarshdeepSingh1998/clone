import { MemberDetailsDataInterface } from '@/views/Admin/MembersPage/MemberDetailsPage/Desktop/types'
import {
  columns,
  generateTableData,
  generateBiddingTableData,
  biddingColumns
} from 'views/Admin/MembersPage/MemberDetailsPage/Desktop/data'
import TableComponent from '@/components/Table'
import NoProductView from 'views/Admin/MembersPage/MemberDetailsPage/Desktop/NoProductView'
import {
  TableViewContainer,
  TableViewContent,
  HeaderContainer,
  HeaderSearchContainer,
  HeaderTitle,
  BoxImage,
  ButtonContainer,
  ButtonContent,
  MemberDetailsButton
} from '@/styles/Views/Admin/MembersPage/MemberDetails/Desktop/Table'

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

  const biddingData = generateBiddingTableData(
    memberDetailsData?.biddingList,
    memberDetailsData?.userData,
    memberDetailsData
  )

  return (
    <TableViewContainer
      isGap={
        memberDetailsData?.displayedRows <
        Number(memberDetailsData?.memberDetailsData?.assignedProducts?.length)
      }
    >
      <TableViewContent className="admin-inventory">
        <HeaderContainer>
          <HeaderSearchContainer>
            <HeaderTitle>
              <BoxImage />
              Products
            </HeaderTitle>
          </HeaderSearchContainer>
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
        </HeaderContainer>
        {memberDetailsData.active == '1' && (
          <TableComponent columns={columns} data={data} />
        )}
        {memberDetailsData.active === '2' && (
          <TableComponent columns={biddingColumns} data={biddingData} />
        )}
      </TableViewContent>
      <NoProductView
        productList={memberDetailsData}
        data={memberDetailsData.memberDetailsData}
        handleLoadMoreClick={memberDetailsData.handleShowMoreRows}
        biddingList={memberDetailsData.biddingList}
        active={memberDetailsData.active}
      />
    </TableViewContainer>
  )
}

export default TableView
