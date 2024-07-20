import { AuctionManagementDataInterface } from 'views/Admin/AuctionManagementPage/Desktop/types'
import NoProductView from 'views/Admin/AuctionManagementPage/Desktop/NoProductView'
import {
  generateTableData,
  columns,
  generateRejectedTableData,
  rejectedColumns
} from 'views/Admin/AuctionManagementPage/Desktop/data'
import TableComponent from '@/components/Table'
import Button from '@/components/Button'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage,
  ButtonContainer,
  ButtonContent
} from '@/styles/Views/Admin/AuctionManagementPage/Desktop/Table'

const TableView = ({
  auctionManagementData,
  screenType
}: {
  auctionManagementData: AuctionManagementDataInterface
  screenType: string
}) => {
  const data = generateTableData(
    auctionManagementData,
    auctionManagementData.biddingList,
    screenType
  )
  const rejectedData = generateRejectedTableData(
    auctionManagementData.biddingList,
    auctionManagementData
  )

  return (
    <TableContainer
      isGap={
        (auctionManagementData.biddingList || [])?.length <
        auctionManagementData.auctionData?.data?.meta?.totalNumberOfResults
      }
    >
      <TableContent>
        <div>
          <HeaderTitle>
            <BoxImage />
            Live Auction
          </HeaderTitle>
          <ButtonContainer>
            <ButtonContent>
              {auctionManagementData.selectedButton.map((button, i) => (
                <Button
                  key={i}
                  type="submit"
                  variant={button.type}
                  label={button.label}
                  onClick={() => auctionManagementData.handleButtonClick(i)}
                  className={button.type === 'contained' ? 'contained' : ''}
                  disable={button.disabled}
                />
              ))}
            </ButtonContent>
          </ButtonContainer>
        </div>
        {auctionManagementData.apiUrl.url ===
        `/api/getBids?page=${auctionManagementData.page}&limit=${auctionManagementData.itemsPerPage}&status=Rejected` ? (
          <TableComponent columns={rejectedColumns} data={rejectedData} />
        ) : (
          <TableComponent columns={columns} data={data} />
        )}
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
