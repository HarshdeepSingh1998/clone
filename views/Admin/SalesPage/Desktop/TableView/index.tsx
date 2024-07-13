import { useState } from 'react'
import {
  columns,
  generateOpenTabelData,
  generateTableData
} from 'views/Admin/SalesPage/Desktop/data'
import { SalesDataInterface } from 'views/Admin/SalesPage/Desktop/types'
import NoProductView from 'views/Admin/SalesPage/Desktop/NoProductView'
import TableComponent from '@/components/Table'
import Button from '@/components/Button'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage,
  ButtonContainer,
  ButtonContent
} from '@/styles/Views/Admin/SalesPage/Desktop/Table'

const TableView = ({ salesData }: { salesData: SalesDataInterface }) => {
  const [openStates, setOpenStates] = useState(
    new Array((salesData.salesList || []).length).fill(false)
  )
  const handleToggle = (index: number) => {
    const newOpenStates = [...openStates]
    newOpenStates[index] = !newOpenStates[index]
    setOpenStates(newOpenStates)
  }
  const data = generateTableData(salesData, openStates, handleToggle)
  const openData = generateOpenTabelData(salesData)
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
        </div>
        <TableComponent
          columns={columns}
          data={data}
          openStates={openStates}
          openData={openData}
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
