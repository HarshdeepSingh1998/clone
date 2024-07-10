import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { TableInterface } from 'components/Table/types'

const style = {
  fontFamily: 'Inter',
  fontSize: '13px',
  fontWeight: 600,
  lineHeight: '16px',
  letterSpacing: '-0.01em',
  textAlign: 'left'
}

const TableComponent = ({ columns, data }: TableInterface) => {
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
                {column.label || ''}
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {(data ?? []).map((row: any, rowIndex: number) => (
          <TableRow key={rowIndex}>
            {columns.map(column => (
              <TableCell
                key={column.id}
                align={'left'}
                sx={{
                  padding: '16px 5px'
                }}
              >
                <Typography align={'left'} sx={style}>
                  {row[column.id]}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableComponent
