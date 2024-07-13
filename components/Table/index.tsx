import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { TableInterface } from 'components/Table/types'
import FilterMenuList from 'components/FilterMenuList'

const style = {
  fontFamily: 'Inter',
  fontSize: '13px',
  fontWeight: 600,
  lineHeight: '16px',
  letterSpacing: '-0.01em',
  textAlign: 'left'
}

const TableComponent = ({
  columns,
  data,
  openStates,
  openData,
  filtersData
}: TableInterface) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(column => (
            <TableCell
              key={column.id}
              align={'left'}
              sx={{ background: 'transparent', padding: '16px 5px' }}
            >
              <Typography sx={{ ...style, color: 'rgb(100, 113, 140)' }}>
                {column.icon && (
                  <FilterMenuList
                    open={filtersData.open}
                    setAnchorEl={filtersData.setAnchorEl}
                    anchorEl={filtersData.anchorEl}
                    disabled={false}
                    actionButtonData={filtersData.actionButtonData}
                    handleClose={filtersData.handleClose}
                  />
                )}
                {column.label || ''}
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {(data ?? []).map((row: any, rowIndex: number) => (
          <>
            <TableRow key={rowIndex}>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={'left'}
                  sx={{
                    padding: '16px 5px'
                  }}
                >
                  <Typography
                    align={'left'}
                    sx={{ ...style, display: 'flex', gap: '10px' }}
                  >
                    {row[column.id]}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
            {openStates?.[rowIndex] && (
              <TableRow style={{ background: '#131529' }}>
                <TableCell colSpan={columns.length}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {openData?.[rowIndex].closedPrice}
                    {openData?.[rowIndex].depositPrice}
                    {openData?.[rowIndex].setupPrice}
                  </div>
                </TableCell>
              </TableRow>
            )}
          </>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableComponent
