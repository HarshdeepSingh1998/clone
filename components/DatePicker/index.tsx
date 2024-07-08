import { Controller } from 'react-hook-form'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DatePickerProps } from 'components/DatePicker/types'
import CalendarIcon from '@/assets/images/svg/CalendarIcon'
import {
  DatePickerContent,
  InputText,
  ErrorMessageContainer
} from '@/styles/Components/DatePicker'

const DatePickerComponent: React.FC<DatePickerProps> = ({
  publishModalData,
  controllername,
  control,
  errors,
  className = '',
  title
}) => {
  const minDate =
    publishModalData.calenderClick && publishModalData.auctionDate
      ? dayjs(publishModalData.auctionDate)
      : dayjs().subtract(100, 'year')

  return (
    <DatePickerContent
      onClick={() => {
        publishModalData.setCalenderClick(false)
      }}
    >
      <InputText>{title}</InputText>
      <Controller
        name={controllername}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              {...field}
              className={className}
              format={'YYYY-MM-DD'}
              onChange={(
                e: string | number | Date | dayjs.Dayjs | null | undefined
              ) => {
                const date = dayjs(e).format('YYYY-MM-DD')
                field.onChange(date)
              }}
              disablePast
              minDate={minDate}
              slots={{
                openPickerIcon: CalendarIcon
              }}
              value={dayjs(field.value)}
            />
          </LocalizationProvider>
        )}
      />
      <ErrorMessageContainer>
        {errors.auctionStartDate ? (
          <span>{errors?.auctionStartDate?.message}</span>
        ) : (
          <span></span>
        )}
      </ErrorMessageContainer>
    </DatePickerContent>
  )
}

export default DatePickerComponent
