import { StaticImageData } from 'next/image'

export interface storyDataType {
  rightIndicator: StaticImageData | string
  leftIndicator: string | StaticImageData
  text: string
  description: string
}
