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
  title,
  userPublishModalData,
  userLotModalData,
  adminLotModal
}) => {
  if (userPublishModalData) {
    return (
      <SwitchContainer className={className}>
        <SwitchContent className={className}>
          <div>
            <InputText>{title || `Type`}</InputText>
          </div>
          <MainContainer
            toggleValue={userPublishModalData.toggleValue}
            className={className}
          >
            <span>{startvalue}</span>
            <ToggleContainer style={{ opacity: '0.5' }}>
              <AntSwitch
                inputProps={{
                  'aria-label': 'ant design'
                }}
                onChange={userPublishModalData.handleToggleChange}
                checked={true}
              />
            </ToggleContainer>
            <span>{endvalue}</span>
          </MainContainer>
        </SwitchContent>
      </SwitchContainer>
    )
  }

  if (userLotModalData) {
    return (
      <SwitchContainer className={className}>
        <SwitchContent className={className}>
          <div>
            <InputText>{title || `Type`}</InputText>
          </div>
          <MainContainer
            toggleValue={userLotModalData.toggleValue}
            className={className}
          >
            <span>{startvalue}</span>
            <ToggleContainer style={{ opacity: '0.5' }}>
              <AntSwitch
                inputProps={{
                  'aria-label': 'ant design'
                }}
                onChange={userLotModalData.handleToggleChange}
                checked={true}
              />
            </ToggleContainer>
            <span>{endvalue}</span>
          </MainContainer>
        </SwitchContent>
      </SwitchContainer>
    )
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
                checked={
                  marketplaceData?.switchActive === 'inactive' ? false : true
                }
                inputProps={{
                  'aria-label': 'ant design'
                }}
                onChange={() => {
                  marketplaceData?.setProductList([])
                  marketplaceData?.setPage(1)
                  marketplaceData?.setSwitchActive(prev =>
                    prev !== 'active' ? 'active' : 'inactive'
                  )
                }}
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

  if (adminLotModal) {
    return (
      <SwitchContainer className={className}>
        <SwitchContent className={className}>
          <div>
            <InputText>{title || `Type`}</InputText>
          </div>
          <MainContainer
            toggleValue={adminLotModal.toggleValue}
            className={className}
          >
            <span style={{ marginTop: '3px' }}>{startvalue}</span>
            <ToggleContainer>
              <AntSwitch
                defaultChecked
                inputProps={{
                  'aria-label': 'ant design'
                }}
                onChange={adminLotModal.handleToggleChange}
              />
            </ToggleContainer>
            <span style={{ marginTop: '3px' }}>{endvalue}</span>
          </MainContainer>
        </SwitchContent>

        {adminLotModal.toggleValue === 'Bid' && (
          <CheckboxContainer>
            <CheckboxContent publishModal={true}>
              {
                <input
                  type="checkbox"
                  onChange={adminLotModal.handleHeaderCheckboxToggle}
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
