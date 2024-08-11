import { useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FilterIcon from '@/assets/images/svg/TableFilterIcon'
import { FilterMenuListProps } from 'components/FilterMenuList/types'
import List from 'components/List'
import {
  ActionButtonContainer,
  ActionButtonContent,
  CheckboxContainer
} from '@/styles/Components/FilterMenuList'

const FilterMenuList: React.FC<FilterMenuListProps> = ({
  open,
  setAnchorEl,
  anchorEl,
  disabled,
  actionButtonData,
  handleClose,
  setData,
  inventoryData,
  id,
  icon
}) => {
  const handleOptionClick = (event: React.MouseEvent<HTMLElement>) => {
    if (setData) {
      setData()
    }

    if (id === 'contract') {
      inventoryData.setContractEl(event.currentTarget)
    } else if (id === 'assign') {
      inventoryData.setAssignEl(event.currentTarget)
    } else {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleScroll = () => {
    handleClose()
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ActionButtonContainer>
      <ActionButtonContent
        style={{ border: 'none' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(event: any) => handleOptionClick(event)}
        disabled={disabled}
      >
        {icon && typeof icon === 'function' ? (
          icon(inventoryData)
        ) : (
          <FilterIcon />
        )}
      </ActionButtonContent>
      <List anchorEl={anchorEl} handleClose={handleClose}>
        {actionButtonData?.map((data: any) => (
          <MenuItem key={data.key}>
            <CheckboxContainer>
              <input
                type="checkbox"
                checked={data.selected}
                onChange={data.handleClick}
              />
            </CheckboxContainer>
            {data.title}
          </MenuItem>
        ))}
      </List>
    </ActionButtonContainer>
  )
}

export default FilterMenuList
