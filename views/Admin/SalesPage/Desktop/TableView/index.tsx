import { SalesDataInterface } from 'views/Admin/SalesPage/Desktop/types'
import NoProductView from 'views/Admin/SalesPage/Desktop/NoProductView'
import {
  TableContainer,
  TableContent,
  HeaderTitle,
  BoxImage,
  ButtonContainer,
  ButtonContent
} from '@/styles/Views/Admin/SalesPage/Desktop/Table'
import Button from '@/components/Button'

const TableView = ({ salesData }: { salesData: SalesDataInterface }) => {
  return (
    <TableContainer
      isGap={
        (salesData.salesList || [])?.length <
        salesData.salesMemberList?.data?.meta?.totalNumberOfResults
      }
    >
      <TableContent>
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
        {/* <TableComponent columns={columns} data={data} /> */}
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
