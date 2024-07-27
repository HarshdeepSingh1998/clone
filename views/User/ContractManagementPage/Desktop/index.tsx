import { ContractDataInterface } from 'views/User/ContractManagementPage/Desktop/types'
import HeaderView from 'views/User/ContractManagementPage/Desktop/HeaderView'
import TableView from 'views/User/ContractManagementPage/Desktop/TableView'

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
