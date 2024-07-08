import { Stack } from 'react-bootstrap'
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
    <SwitchContainer>
      <SwitchContent className={className}>
        <div>
          <InputText>Type</InputText>
        </div>
        <MainContainer toggleValue={publishModalData.toggleValue}>
          <span style={{ marginTop: '3px' }}>{startvalue}</span>
          <ToggleContainer>
            <Stack>
              <AntSwitch
                defaultChecked
                inputProps={{
                  'aria-label': 'ant design'
                }}
                onChange={publishModalData.handleToggleChange}
              />
            </Stack>
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
