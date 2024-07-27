import { ContractDataInterface } from 'views/User/ContractManagementPage/Mobile/types'
import HeaderView from 'views/User/ContractManagementPage/Mobile/HeaderView'
import TableView from 'views/User/ContractManagementPage/Mobile/TableView'

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
