import { MemberDetailsDataInterface } from '@/views/Admin/MembersPage/MemberDetailsPage/Desktop/types'
import {
  columns,
  generateTableData
} from 'views/Admin/MembersPage/MemberDetailsPage/Desktop/data'
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
import TableComponent from '@/components/Table'

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
  return (
    <TableViewContainer>
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
        <TableComponent columns={columns} data={data} />
      </TableViewContent>
    </TableViewContainer>
  )
}

export default TableView
