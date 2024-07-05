export interface ComboBoxInterface {
  assignOption: {
    img: JSX.Element
    label: string
    value: string
  }[]
  // eslint-disable-next-line no-unused-vars
  onSelect: (e: any) => void
  placeholder: string
}

export interface OptionType {
  value: string
  label: string
  img?: React.ReactNode
}
