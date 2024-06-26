export interface MinerHostingDataType {
  headerIcon: () => JSX.Element
  headerTitle: string
  headerSubTitle: string
  rate: string
  unit: string
  membership: string
  list: {
    icon: () => JSX.Element
    text: string
  }[]
  buttonText: string
}
