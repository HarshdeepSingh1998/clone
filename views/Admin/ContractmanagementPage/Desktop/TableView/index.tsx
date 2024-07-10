import TableComponent from '@/components/Table'
import { ContractDataInterface } from 'views/Admin/ContractmanagementPage/Desktop/types'
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
    <TableContainer>
      <TableContent>
        <HeaderTitle>
          <BoxImage />
          Contracts
        </HeaderTitle>
        <TableComponent columns={columns} data={data} />
      </TableContent>
    </TableContainer>
  )
}

export default TableView
