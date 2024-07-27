import { ContractDataInterface } from 'views/User/ContractManagementPage/Desktop/types'
import TableComponent from '@/components/Table'
import NoProductView from 'views/User/ContractManagementPage/Desktop/NoProductView'
import {
  columns,
  generateTableData
} from 'views/User/ContractManagementPage/Desktop/data'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage
} from '@/styles/Views/User/ContractManagementPage/Desktop/Table'

const TableView = ({
  contractData
}: {
  contractData: ContractDataInterface
}) => {
  const data = generateTableData(
    contractData.contractList,
    contractData.openPdfView
  )

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
        <TableComponent columns={columns} data={data} />
      </TableContent>
      <NoProductView
        productList={contractData.contractList}
        data={contractData.contractData}
        handleLoadMoreClick={contractData.handleLoadMoreClick}
      />
    </TableContainer>
  )
}

export default TableView
