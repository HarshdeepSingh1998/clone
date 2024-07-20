import { AuctionManagementMachineDetailInterface } from 'views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Desktop/types'
import {
  generateBiddingTableData,
  biddingColumns
} from 'views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Desktop/data'
import TableComponent from '@/components/Table'
import NoProductView from 'views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Desktop/NoProductView'
import {
  TableViewContainer,
  TableViewContent,
  HeaderContainer,
  HeaderSearchContainer,
  HeaderTitle,
  BoxImage
} from '@/styles/Views/Admin/MembersPage/MemberDetails/Desktop/Table'

const TableView = ({
  auctionManagementData
}: {
  auctionManagementData: AuctionManagementMachineDetailInterface
}) => {
  const biddingData = generateBiddingTableData(
    auctionManagementData?.biddingList,
    auctionManagementData?.userData,
    auctionManagementData
  )

  return (
    <TableViewContainer
      isGap={
        (auctionManagementData?.biddingList || [])?.length <
        auctionManagementData.auctionData?.data?.meta?.totalNumberOfResults
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
        </HeaderContainer>
        <TableComponent columns={biddingColumns} data={biddingData} />
      </TableViewContent>
      <NoProductView
        productList={auctionManagementData.biddingList}
        data={auctionManagementData.auctionData}
        handleLoadMoreClick={auctionManagementData.handleLoadMoreClick}
      />
    </TableViewContainer>
  )
}

export default TableView
