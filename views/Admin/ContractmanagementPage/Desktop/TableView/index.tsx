import { ContractDataInterface } from 'views/Admin/ContractmanagementPage/Desktop/types'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage
} from '@/styles/Views/Admin/ContractManagementPage/Desktop/Table'

const TableView = ({
  contractData
}: {
  contractData: ContractDataInterface
}) => {
  return (
    <TableContainer>
      <TableContent>
        <HeaderTitle>
          <BoxImage />
          Contracts
        </HeaderTitle>
      </TableContent>
    </TableContainer>
  )
}

export default TableView
