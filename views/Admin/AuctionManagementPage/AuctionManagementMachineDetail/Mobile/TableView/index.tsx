/* eslint-disable no-unused-vars */
import { AuctionManagementMachineDetailInterface } from 'views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Mobile/types'
import NoProductView from 'views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Mobile/NoProductView'
import {
  BidTableData,
  generateBiddingTableData,
  biddingColumns
} from 'views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Mobile/data'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage,
  Table,
  ContentContainer,
  TableList,
  HeaderText
} from '@/styles/Views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Mobile/TableView'

const TableView = ({
  auctionManagementData
}: {
  auctionManagementData: AuctionManagementMachineDetailInterface
}) => {
  const data = generateBiddingTableData(auctionManagementData?.biddingList)
  const biddingDataLength = auctionManagementData?.biddingList?.length ?? 0
  return (
    <TableContainer
      isGap={
        (auctionManagementData?.biddingList || [])?.length <
        auctionManagementData.auctionData?.data?.meta?.totalNumberOfResults
      }
    >
      <TableContent>
        <div>
          <HeaderTitle>
            <BoxImage />
            Products
          </HeaderTitle>
        </div>
        <Table>
          {auctionManagementData?.biddingList?.map((biddingListData, i) => (
            <ContentContainer
              key={i}
              className={i === biddingDataLength - 1 ? 'last' : ''}
            >
              {biddingColumns?.map((column, j) => (
                <TableList
                  className={`mobile-responsive ${j === 0 ? 'first-column' : ''}`}
                  key={j}
                >
                  <HeaderText className="contract-header">
                    {typeof column.label === 'function'
                      ? column.label({ biddingListData, auctionManagementData })
                      : column.label}
                  </HeaderText>
                  {data && data[i][column.id as keyof BidTableData]}
                </TableList>
              ))}
            </ContentContainer>
          ))}
        </Table>
      </TableContent>
      <NoProductView
        productList={auctionManagementData.biddingList}
        data={auctionManagementData.auctionData}
        handleLoadMoreClick={auctionManagementData.handleLoadMoreClick}
      />
    </TableContainer>
  )
}

export default TableView
