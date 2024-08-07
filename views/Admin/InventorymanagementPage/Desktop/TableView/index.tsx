import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/Desktop/types'

const TableView = ({
  inventoryData
}: {
  inventoryData: UseInventoryProductInterface
}) => {
  const data = generateTableData(salesData, openStates, handleToggle)

  return (
    <TableContainer
      isGap={
        (salesData.salesList || [])?.length <
        salesData.salesMemberList?.data?.meta?.totalNumberOfResults
      }
    >
      <TableContent>
        <div>
          <HeaderTitle>
            <BoxImage />
            Products
          </HeaderTitle>
          <ButtonContainer>
            <ButtonContent>
              {salesData.selectedButton.map((button, i) => (
                <Button
                  key={i}
                  type="submit"
                  variant={button.type}
                  label={button.label}
                  onClick={() => salesData.handleButtonClick(i)}
                  className={button.type === 'contained' ? 'contained' : ''}
                  disable={button.disabled}
                />
              ))}
            </ButtonContent>
          </ButtonContainer>
        </div>
        <TableComponent
          columns={columns}
          data={data}
          openStates={openStates}
          openData={openData}
          filtersData={salesData}
        />
      </TableContent>
      <NoProductView
        productList={salesData.salesList}
        data={salesData.salesMemberList}
        handleLoadMoreClick={salesData.handleLoadMoreClick}
      />
    </TableContainer>
  )
}

export default TableView
