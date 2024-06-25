export interface FaqType {
  id: number
  summary: string
  content: {
    heading: string
    data?: {
      list: {
        title: string
        quote: string
      }[]
    }
  }
}
