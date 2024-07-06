export interface ComboBoxInterface {
  assignOption: {
    img: JSX.Element
    label: string
    value: string
  }[]
  placeholder: string
  control: any
  controllername: string
  defaultValue: string
  title: string
  errors: any
}

export interface OptionType {
  value: string
  label: string
  img?: React.ReactNode
}
