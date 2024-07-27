/* eslint-disable no-unused-vars */
import { ContractDataInterface } from 'views/User/ContractManagementPage/Mobile/types'
import NoProductView from 'views/User/ContractManagementPage/Mobile/NoProductView'
import {
  TableData,
  columns,
  generateTableData
} from 'views/User/ContractManagementPage/Mobile/data'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage,
  Table,
  ContentContainer,
  TableList,
  HeaderText
} from '@/styles/Views/User/ContractManagementPage/Mobile/Table'

const TableView = ({
  contractData
}: {
  contractData: ContractDataInterface
}) => {
  const data = generateTableData(
    contractData.contractList,
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
              <TableList className={`mobile-responsive`} key={j}>
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
