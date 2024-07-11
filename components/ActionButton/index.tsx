import { useEffect } from 'react'
import Image from 'next/image'
import MenuItem from '@mui/material/MenuItem'
import ActionImage from 'assets/images/images/preview.png'
import { ActionButtonProps } from 'components/ActionButton/types'
import List from 'components/List'
import {
  ActionButtonContainer,
  ActionButtonContent
} from '@/styles/Components/ActionButton'

const ActionButton: React.FC<ActionButtonProps> = ({
  open,
  setAnchorEl,
  anchorEl,
  disabled,
  actionButtonData,
  handleClose,
  setData
}) => {
  const handleOptionClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    if (setData) {
      setData()
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
        <Image src={ActionImage} alt="action-image" />
      </ActionButtonContent>
      <List anchorEl={anchorEl} handleClose={handleClose}>
        <>
          {actionButtonData?.map((data: any) => (
            <>
              <MenuItem key={data.key} onClick={data.handleClick}>
                <Image src={data.image} alt="action-image" />
                {data.title}
              </MenuItem>
            </>
          ))}
        </>
      </List>
    </ActionButtonContainer>
  )
}

export default ActionButton
