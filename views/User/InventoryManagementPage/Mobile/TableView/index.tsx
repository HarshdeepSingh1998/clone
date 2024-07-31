import { UserInventoryDataInterface } from 'views/User/InventoryManagementPage/Mobile/types'
import Button from '@/components/Button'
import {
  columns,
  generateTableData,
  TableData
} from 'views/User/InventoryManagementPage/Mobile/data'
import NoProductView from 'views/User/InventoryManagementPage/Mobile/NoProductView'
import {
  BoxImage,
  ButtonContainer,
  ButtonContent,
  HeaderSearchContainer,
  HeaderTitle,
  TableViewContainer,
  TableViewContent,
  Table,
  ContentContainer,
  TableList,
  HeaderText
} from '@/styles/Views/User/InventoryManagementPage/Mobile/Table'

const TableView = ({
  inventoryData
}: {
  inventoryData: UserInventoryDataInterface
}) => {
  const data = generateTableData(inventoryData)
  const inventoryListLength = inventoryData.productList?.length ?? 0
  return (
    <TableViewContainer>
      <TableViewContent className="admin-inventory">
        <HeaderSearchContainer>
          <HeaderTitle>
            <BoxImage />
            Products
          </HeaderTitle>
          <ButtonContainer>
            <ButtonContent>
              {inventoryData.selectedButton.map((button, i) => (
                <Button
                  key={i}
                  type="submit"
                  variant={button.type}
                  label={button.label}
                  onClick={() =>
                    inventoryData.handleButtonClick(i, button.label)
                  }
                  style={
                    button.type === 'contained'
                      ? { color: '#fff', opacity: 1, cursor: 'pointer' }
                      : { opacity: 1, cursor: 'pointer' }
                  }
                  disable={button.disabled}
                />
              ))}
            </ButtonContent>
          </ButtonContainer>
        </HeaderSearchContainer>
        <Table>
          {inventoryData?.productList?.map((productList, i) => (
            <ContentContainer
              key={i}
              className={i === inventoryListLength - 1 ? 'last' : ''}
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
      </TableViewContent>
      <NoProductView
        productList={inventoryData.productList}
        data={inventoryData.data}
        handleLoadMoreClick={inventoryData.handleLoadMoreClick}
        totalLength={inventoryData.totalLength}
      />
    </TableViewContainer>
  )
}

export default TableView
