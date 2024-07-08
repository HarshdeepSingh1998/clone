import { UsePublishDataInterface } from '@/utils/Customhooks/usePublishModal/types'

export interface DatePickerProps {
  publishModalData: UsePublishDataInterface
  controllername: string
  control: any
  errors: any
  className?: string
  title: string
}
