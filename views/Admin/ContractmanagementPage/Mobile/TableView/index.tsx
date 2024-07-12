/* eslint-disable no-unused-vars */
import { ContractDataInterface } from 'views/Admin/ContractmanagementPage/Mobile/types'
import NoProductView from 'views/Admin/ContractmanagementPage/Mobile/NoProductView'
import {
  TableData,
  columns,
  generateTableData
} from 'views/Admin/ContractmanagementPage/Mobile/data'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage,
  Table,
  ContentContainer,
  TableList,
  HeaderText
} from '@/styles/Views/Admin/ContractManagementPage/Mobile/Table'

const TableView = ({
  contractData
}: {
  contractData: ContractDataInterface
}) => {
  const data = generateTableData(
    contractData.contractList,
    contractData.open,
    contractData.setAnchorEl,
    contractData.anchorEl,
    contractData.actionButtonData,
    contractData.handleClose,
    contractData.setContractDetails,
    contractData.openPdfView
  )
  const contractListLength = contractData.contractList?.length ?? 0

  return (
    <TableContainer
      isGap={
        (contractData.contractList || [])?.length <
        contractData.contractData?.data?.meta?.totalNumberOfContracts
      }
    >
      <TableContent>
        <HeaderTitle>
          <BoxImage />
          Contracts
        </HeaderTitle>
      </TableContent>
      <Table>
        {contractData?.contractList?.map((_, i) => (
          <ContentContainer
            key={i}
            className={i === contractListLength - 1 ? 'last' : ''}
          >
            {columns?.map((column, j) => (
              <TableList
                className={`mobile-responsive ${j === 0 ? 'first-column' : ''}`}
                key={j}
              >
                <HeaderText className="contract-header">
                  {column?.label}
                </HeaderText>
                {data && data[i][column.id as keyof TableData]}
              </TableList>
            ))}
          </ContentContainer>
        ))}
      </Table>
      <NoProductView
        productList={contractData.contractList}
        data={contractData.contractData}
        handleLoadMoreClick={contractData.handleLoadMoreClick}
      />
    </TableContainer>
  )
}

export default TableView
