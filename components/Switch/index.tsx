import { useState } from 'react'
import { SwitchProps } from 'components/Switch/types'
import {
  SwitchContainer,
  SwitchContent,
  InputText,
  MainContainer,
  ToggleContainer,
  AntSwitch,
  CheckboxContainer,
  CheckboxContent
} from '@/styles/Components/Switch'

const Switch: React.FC<SwitchProps> = ({
  publishModalData,
  className,
  startvalue,
  endvalue,
  marketplaceData,
  title
}) => {
  const [isChecked, setIsChecked] = useState(
    marketplaceData?.toggleActive === 'active'
  )

  const handleMarketplaceChange = () => {
    marketplaceData?.setProductList([])
    marketplaceData?.setPage(1)
    marketplaceData?.setSwitchActive(prev =>
      prev !== 'active' ? 'active' : 'inactive'
    )
    setIsChecked(prev => !prev)
  }

  if (marketplaceData) {
    return (
      <SwitchContainer className={className}>
        <SwitchContent className={className}>
          <MainContainer
            toggleValue={marketplaceData.toggleActive}
            className={className}
          >
            <span>{startvalue}</span>
            <ToggleContainer>
              <AntSwitch
                checked={isChecked}
                inputProps={{
                  'aria-label': 'ant design'
                }}
                onChange={handleMarketplaceChange}
              />
            </ToggleContainer>
          </MainContainer>
        </SwitchContent>
      </SwitchContainer>
    )
  }

  if (publishModalData) {
    return (
      <SwitchContainer className={className}>
        <SwitchContent className={className}>
          <div>
            <InputText>{title || `Type`}</InputText>
          </div>
          <MainContainer
            toggleValue={publishModalData.toggleValue}
            className={className}
          >
            <span style={{ marginTop: '3px' }}>{startvalue}</span>
            <ToggleContainer>
              <AntSwitch
                defaultChecked
                inputProps={{
                  'aria-label': 'ant design'
                }}
                onChange={publishModalData.handleToggleChange}
              />
            </ToggleContainer>
            <span style={{ marginTop: '3px' }}>{endvalue}</span>
          </MainContainer>
        </SwitchContent>

        {publishModalData.toggleValue === 'Bid' && (
          <CheckboxContainer>
            <CheckboxContent publishModal={true}>
              {
                <input
                  type="checkbox"
                  onChange={publishModalData.handleHeaderCheckboxToggle}
                />
              }
              <div>Disable Buy Now From Auction</div>
            </CheckboxContent>
          </CheckboxContainer>
        )}
      </SwitchContainer>
    )
  }

  return null
}

export default Switch
