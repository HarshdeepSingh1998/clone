import Menu from '@mui/material/Menu'
import { ListInterface } from 'components/List/types'

const List = ({ anchorEl, children, handleClose }: ListInterface) => {
  const open = Boolean(anchorEl)

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button'
      }}
    >
      {children}
    </Menu>
  )
}

export default List
