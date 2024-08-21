import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/Mobile/types'
import NoProductView from 'views/Admin/InventorymanagementPage/Mobile/NoProductView'
import Header from 'views/Admin/InventorymanagementPage/Mobile/TableView/Header'
import {
  columns,
  TableData,
  generateTableData
} from 'views/Admin/InventorymanagementPage/Mobile/Data'
import {
  TableContainer,
  TableContent,
  HeaderContainer,
  Table,
  ContentContainer,
  TableList,
  HeaderText,
  FilterContainer
} from 'styles/Views/Admin/InventorymanagementPage/Mobile/Table'
import FilterMenuList from '@/components/FilterMenuList'

const TableView = ({
  inventoryData
}: {
  inventoryData: UseInventoryProductInterface
}) => {
  const data = generateTableData(inventoryData)
  const filter = [
    { id: 'contract', title: 'Contract' },
    { id: 'assign', title: 'Assign' }
  ]
  const inventoryListLength = inventoryData.productList?.length ?? 0
  return (
    <TableContainer
      isGap={
        (inventoryData.productList || [])?.length <
        inventoryData.data?.data?.meta?.totalNumberOfProducts
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <TableContent>
          <HeaderContainer>
            <Header inventoryData={inventoryData} />
          </HeaderContainer>
        </TableContent>
        <div style={{ display: 'flex', gap: '10px' }}>
          {inventoryData.status !== 'UnPublished' &&
            filter.map(data => (
              <>
                <FilterContainer>
                  <FilterMenuList
                    open={inventoryData.filterData.open}
                    inventoryData={inventoryData}
                    id={data.id}
                    anchorEl={inventoryData.filterData.anchorEl}
                    disabled={false}
                    actionButtonData={inventoryData.filterData.actionButtonData}
                    handleClose={inventoryData.filterData.handleClose}
                    setAnchorEl={() => {}}
                  />
                  {data.title}
                </FilterContainer>
              </>
            ))}
        </div>
      </div>
      <Table>
        {inventoryData?.productList?.map((productList, i) => (
          <ContentContainer
            key={i}
            className={i === inventoryListLength - 1 ? 'last' : ''}
            onClick={() => {
              inventoryData.handleViewProduct(productList._id)
            }}
          >
            {columns?.map((column, j) => (
              <TableList
                className={`mobile-responsive ${j === 0 ? 'first-column' : ''}`}
                key={j}
              >
                <HeaderText className="contract-header">
                  {typeof column.label === 'function'
                    ? column.label({ inventoryData, productList })
                    : column.label}
                </HeaderText>
                {data && data[i][column.id as keyof TableData]}
              </TableList>
            ))}
          </ContentContainer>
        ))}
      </Table>
      <NoProductView
        productList={inventoryData.productList}
        data={inventoryData.data}
        handleLoadMoreClick={inventoryData.handleLoadMoreClick}
      />
    </TableContainer>
  )
}

export default TableView
