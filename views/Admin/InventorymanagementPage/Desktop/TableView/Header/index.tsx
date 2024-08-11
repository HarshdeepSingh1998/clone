import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/Desktop/types'
import Button from '@/components/Button'
import SearchIcon from '@/assets/images/svg/SearchIcon'
import { StyledInput } from '@/styles/Components/Input'
import {
  HeaderSearchContainer,
  HeaderTitle,
  BoxImage,
  SearchContainer,
  SearchContent,
  SvgContainer,
  ButtonContainer,
  ButtonContent
} from '@/styles/Views/Admin/InventorymanagementPage/Desktop/Table/Header'

const Header = ({
  inventoryData
}: {
  inventoryData: UseInventoryProductInterface
}) => {
  const handleButtonClick = (i: number, label: string) => {
    inventoryData.setStatus(
      label === 'All'
        ? ''
        : label === 'Published'
          ? label
          : label === 'Unpublished'
            ? 'UnPublished'
            : 'Assigned'
    )
    inventoryData.setSelectedButton(prev =>
      prev.map(prev => {
        if (prev.id === i) {
          return {
            ...prev,
            type: 'contained',
            disabled: !prev.disabled
          }
        } else {
          return { ...prev, type: 'outline', disabled: false }
        }
      })
    )
    inventoryData.setPage(1)
    inventoryData.setContractValue('')
    inventoryData.setModelName('')
    inventoryData.setAssigneeName('')
    inventoryData.setSelectedContract('all')
    inventoryData.setSelectedAssignee('all')
  }

  return (
    <>
      <HeaderSearchContainer>
        <HeaderTitle>
          <BoxImage />
          Products
        </HeaderTitle>
        <SearchContainer>
          <SearchContent>
            <SvgContainer>
              <SearchIcon />
            </SvgContainer>
            <StyledInput
              title=""
              placeholder="Search by serial no./name"
              type="email"
              maxwidth="100%"
              onChange={(e: any) => {
                inventoryData.setSearchBySerialNumber(e.target.value)
              }}
              defaultValue=""
            />
          </SearchContent>
        </SearchContainer>
      </HeaderSearchContainer>
      <ButtonContainer>
        <ButtonContent>
          {inventoryData.selectedButton.map((button, i) => (
            <Button
              key={i}
              type="submit"
              variant={button.type}
              label={button.label}
              onClick={() => handleButtonClick(i, button.label)}
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
    </>
  )
}

export default Header
