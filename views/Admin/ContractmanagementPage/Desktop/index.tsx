import { ContractDataInterface } from 'views/Admin/ContractmanagementPage/Desktop/types'
import HeaderView from 'views/Admin/ContractmanagementPage/Desktop/HeaderView'
import TableView from 'views/Admin/ContractmanagementPage/Desktop/TableView'

const ContractManagementDesktop = ({
  contractData
}: {
  contractData: ContractDataInterface
}) => {
  return (
    <>
      <HeaderView contractData={contractData} />
      <TableView contractData={contractData} />
    </>
  )
}

export default ContractManagementDesktop
