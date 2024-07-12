import { ContractDataInterface } from 'views/Admin/ContractmanagementPage/Mobile/types'
import HeaderView from 'views/Admin/ContractmanagementPage/Mobile/HeaderView'
import TableView from 'views/Admin/ContractmanagementPage/Mobile/TableView'

const ContractManagementMobile = ({
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

export default ContractManagementMobile
