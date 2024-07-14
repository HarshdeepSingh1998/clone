import { useState } from 'react'
import {
  generateOpenTabelData,
  generateTableData
} from 'views/Admin/SalesPage/Mobile/data'
import { SalesDataInterface } from 'views/Admin/SalesPage/Mobile/types'
import NoProductView from 'views/Admin/SalesPage/Mobile/NoProductView'
import Button from '@/components/Button'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage,
  ButtonContainer,
  ButtonContent,
  FilterContainer
} from '@/styles/Views/Admin/SalesPage/Mobile/Table'
import FilterMenuList from '@/components/FilterMenuList'
import SalesMobileTable from '@/components/SalesMobileTable'

const TableView = ({
  salesData,
  screenType
}: {
  salesData: SalesDataInterface
  screenType: string
}) => {
  const [openStates, setOpenStates] = useState(
    new Array((salesData.salesList || []).length).fill(false)
  )
  const handleToggle = (index: number) => {
    const newOpenStates = [...openStates]
    newOpenStates[index] = !newOpenStates[index]
    setOpenStates(newOpenStates)
  }
  const salesListData = generateTableData(salesData, screenType)
  const openData = generateOpenTabelData(salesData, openStates)

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
          <FilterContainer>
            <FilterMenuList
              open={salesData.open}
              setAnchorEl={salesData.setAnchorEl}
              anchorEl={salesData.anchorEl}
              disabled={false}
              actionButtonData={salesData.actionButtonData}
              handleClose={salesData.handleClose}
            />
            Status
          </FilterContainer>
        </div>
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
        <SalesMobileTable
          salesListData={salesListData}
          openStates={openStates}
          openData={openData}
          handleToggle={handleToggle}
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
