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
  endvalue
}) => {
  return (
    <SwitchContainer className={className}>
      <SwitchContent className={className}>
        <div>
          <InputText>Type</InputText>
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

export default Switch
