/* eslint-disable no-unused-vars */
import { AuctionManagementDataInterface } from 'views/User/AuctionManagementPage/Mobile/types'
import Button from '@/components/Button'
import NoProductView from 'views/User/AuctionManagementPage/Mobile/NoProductView'
import {
  columns,
  generateTableData,
  TableData,
  rejectedColumns,
  generateRejectedTableData,
  RejectedTableData,
  currentColumns,
  generateCurrentTableData,
  CurrentTableData
} from 'views/User/AuctionManagementPage/Mobile/data'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage,
  ButtonContainer,
  ButtonContent,
  Table,
  ContentContainer,
  TableList,
  HeaderText
} from '@/styles/Views/User/AuctionManagementPage/Mobile/Table'

const TableView = ({
  auctionManagementData,
  screenType
}: {
  auctionManagementData: AuctionManagementDataInterface
  screenType: string
}) => {
  const data = generateTableData(
    auctionManagementData,
    auctionManagementData.biddingList
  )
  const rejectedData = generateRejectedTableData(
    auctionManagementData,
    auctionManagementData.biddingList
  )
  const currentData = generateCurrentTableData(
    auctionManagementData,
    auctionManagementData.biddingList
  )
  screenType
  const isRejectedUrl =
    auctionManagementData.apiUrl.url ===
    `/api/getBids?page=${auctionManagementData.page}&limit=${auctionManagementData.itemsPerPage}&status=Rejected&publisherId=${auctionManagementData.userData?.data?.id}`
  const isCurrentUrl =
    auctionManagementData.apiUrl.url ===
    `/api/getBids?publisherId=${auctionManagementData.userData?.data?.id}&page=${auctionManagementData.page}&limit=${auctionManagementData.itemsPerPage}`
  const tableColumns = isRejectedUrl
    ? rejectedColumns
    : isCurrentUrl
      ? currentColumns
      : columns
  const tableData = isRejectedUrl
    ? rejectedData
    : isCurrentUrl
      ? currentData
      : data
  const auctionManagementDataLength =
    auctionManagementData?.biddingList?.length ?? 0
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
            Bidding
          </HeaderTitle>
        </div>
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
      </TableContent>
      <Table>
        {auctionManagementData?.biddingList?.map((auctionData, i) => (
          <ContentContainer
            key={i}
            className={i === auctionManagementDataLength - 1 ? 'last' : ''}
          >
            {tableColumns?.map((column, j) => (
              <TableList
                className={`mobile-responsive ${j === 0 ? 'first-column' : ''}`}
                key={j}
              >
                <HeaderText className="contract-header">
                  {typeof column.label === 'function'
                    ? column.label({ auctionData, auctionManagementData })
                    : column.label}
                </HeaderText>
                {tableData &&
                  (isRejectedUrl
                    ? (tableData[i] as RejectedTableData)[
                        column.id as keyof RejectedTableData
                      ]
                    : isCurrentUrl
                      ? (tableData[i] as CurrentTableData)[
                          column.id as keyof CurrentTableData
                        ]
                      : (tableData[i] as TableData)[
                          column.id as keyof TableData
                        ])}
              </TableList>
            ))}
          </ContentContainer>
        ))}
      </Table>
      <NoProductView
        productList={auctionManagementData.biddingList}
        data={auctionManagementData.auctionData}
        handleLoadMoreClick={auctionManagementData.handleLoadMoreClick}
      />
    </TableContainer>
  )
}

export default TableView
