import { storyDataType } from 'utils/AboutPageContent/Story/types'
import LeftIndicator from 'assets/images/images/Indicator.png'
import RightIndicator from '@/assets/images/images/desktop-pendular.png'

export const storyData: storyDataType[] = [
  {
    rightIndicator: RightIndicator,
    leftIndicator: '',
    text: 'Q1 2024',
    description: 'Initial deployment of bitcoin miners in Nebraska'
  },
  {
    rightIndicator: '',
    leftIndicator: LeftIndicator,
    text: 'Q2 2024',
    description: 'Launch of the Basic Mining Marketplace'
  },
  {
    rightIndicator: RightIndicator,
    leftIndicator: '',
    text: 'Q4 2024',
    description: '5MW expansion in North America'
  }
]
