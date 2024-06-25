export interface MinerSellerDataType {
  heading: string
  subheading: string
  steps: {
    id: number
    step: number
    content: string
  }[]
  buttonText: string
}
