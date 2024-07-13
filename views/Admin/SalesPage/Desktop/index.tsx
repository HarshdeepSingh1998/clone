import { SalesDataInterface } from 'views/Admin/SalesPage/Desktop/types'
import HeaderView from 'views/Admin/SalesPage/Desktop/HeaderView'
import TableView from 'views/Admin/SalesPage/Desktop/TableView'

const SalesDesktop = ({ salesData }: { salesData: SalesDataInterface }) => {
  return (
    <>
      <HeaderView salesData={salesData} />
      <TableView salesData={salesData} />
    </>
  )
}

export default SalesDesktop
