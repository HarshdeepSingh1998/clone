import { SalesDataInterface } from 'views/Admin/SalesPage/Mobile/types'
import HeaderView from 'views/Admin/SalesPage/Mobile/HeaderView'
import TableView from 'views/Admin/SalesPage/Mobile/TableView'

const SalesMobile = ({
  salesData,
  screenType
}: {
  salesData: SalesDataInterface
  screenType: string
}) => {
  return (
    <>
      <HeaderView salesData={salesData} />
      <TableView salesData={salesData} screenType={screenType} />
    </>
  )
}

export default SalesMobile
