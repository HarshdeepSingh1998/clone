import { amountType } from 'components/CurrencyDropdown/data'
import SelectIndicator from 'components/SelectIndicator'
import { CurrencyDropdownProps } from 'components/CurrencyDropdown/types'
import Input from 'components/Input'
import {
  InputText,
  CurrencyDropdownContainer,
  InputContainer
} from '@/styles/Components/CurrencyDropdown'

const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({
  control,
  errors
}) => {
  return (
    <div>
      <InputText>{'Selling Price'}</InputText>
      <CurrencyDropdownContainer>
        <SelectIndicator
          placeholder="USD"
          controllername="unit"
          control={control}
          defaultValue=""
          className="deposit-unit"
          options={amountType}
          width={'100%'}
          errors={errors}
          title=""
        />
        <hr />
        <InputContainer>
          <Input
            title=""
            control={control}
            controllername="askPrice"
            defaultValue=""
            className="deposit-price"
            type="number"
            placeholder="00"
            maxwidth="100%"
            maxLength={20}
            errors={errors}
          />
        </InputContainer>
      </CurrencyDropdownContainer>
    </div>
  )
}

export default CurrencyDropdown
