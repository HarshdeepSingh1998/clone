import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/Desktop/types'
import TableComponent from '@/components/Table'
import NoProductView from 'views/Admin/InventorymanagementPage/Desktop/NoProductView'
import {
  columns,
  generateTableData
} from 'views/Admin/InventorymanagementPage/Desktop/Data'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage
} from 'styles/Views/Admin/InventorymanagementPage/Desktop/Table'

const TableView = ({
  inventoryData,
  screenType
}: {
  inventoryData: UseInventoryProductInterface
  screenType: string
}) => {
  const data = generateTableData(inventoryData, screenType)

  return (
    <TableContainer
      isGap={
        (inventoryData.productList || [])?.length <
        inventoryData.data?.data?.meta?.totalNumberOfProducts
      }
    >
      <TableContent>
        <div>
          <HeaderTitle>
            <BoxImage />
            Products
          </HeaderTitle>
        </div>
        <TableComponent
          columns={columns}
          data={data}
          // filtersData={salesData}
        />
      </TableContent>
      <NoProductView
        productList={inventoryData.productList}
        data={inventoryData.data}
        handleLoadMoreClick={inventoryData.handleLoadMoreClick}
      />
    </TableContainer>
  )
}

export default TableView
