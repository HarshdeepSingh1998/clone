import TableComponent from '@/components/Table'
import { ContractDataInterface } from 'views/Admin/ContractmanagementPage/Desktop/types'
import NoProductView from 'views/Admin/ContractmanagementPage/Desktop/NoProductView'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage
} from '@/styles/Views/Admin/ContractManagementPage/Desktop/Table'
import { columns, generateTableData } from '../data'

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
    contractData.handleClose
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
