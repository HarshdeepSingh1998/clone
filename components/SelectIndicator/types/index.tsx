/* eslint-disable no-unused-vars */
export type SelectIndicatorProps = {
  width?: string | undefined
  placeholder?: string
  options?: { label: string; value: string | number }[]
  onChange?: (
    newValue: string | null | number,
    event: React.ChangeEvent<{ value: unknown }>
  ) => void
  value?: string | null | number
  className?: string
  disabled?: boolean
  control: any
  controllername: string
  defaultValue: string
  errors: any
  title: string
}
