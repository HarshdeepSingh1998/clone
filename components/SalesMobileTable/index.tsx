import { SalesMobileTableProps } from 'components/SalesMobileTable/types'
import {
  SalesMobileTableContainer,
  TableContent,
  TitleContainer,
  ListContainer
} from '@/styles/Components/SalesMobiletable'

const SalesMobileTable: React.FC<SalesMobileTableProps> = ({
  openData,
  openStates,
  handleToggle,
  salesListData
}) => {
  return (
    <SalesMobileTableContainer>
      {openData.map((data, index) => (
        <TableContent
          key={index}
          style={{
            borderBottom: `${openStates[index] ? 'transparent' : '1px solid #1C1F30'}`
          }}
          onClick={() => handleToggle(index)}
        >
          <TitleContainer>{data.open}</TitleContainer>
          {openStates[index] && (
            <ListContainer>
              <div>{salesListData[index]?.machine}</div>
              <div>{salesListData[index]?.content}</div>
            </ListContainer>
          )}
        </TableContent>
      ))}
    </SalesMobileTableContainer>
  )
}

export default SalesMobileTable
