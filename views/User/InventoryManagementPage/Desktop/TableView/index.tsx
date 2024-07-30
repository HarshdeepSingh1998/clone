import { UserInventoryDataInterface } from 'views/User/InventoryManagementPage/Desktop/types'
import Button from '@/components/Button'
import TableComponent from '@/components/Table'
import {
  columns,
  generateTableData
} from 'views/User/InventoryManagementPage/Desktop/data'
import NoProductView from 'views/User/InventoryManagementPage/Desktop/NoProductView'
import {
  BoxImage,
  ButtonContainer,
  ButtonContent,
  HeaderSearchContainer,
  HeaderTitle,
  TableViewContainer,
  TableViewContent
} from '@/styles/Views/User/InventoryManagementPage/Desktop/Table'

const TableView = ({
  inventoryData
}: {
  inventoryData: UserInventoryDataInterface
}) => {
  const data = generateTableData(inventoryData)
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
        <TableComponent columns={columns} data={data} />
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
