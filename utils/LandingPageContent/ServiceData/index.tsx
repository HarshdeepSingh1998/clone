import { ServiceDataType } from 'utils/LandingPageContent/ServiceData/types'
import Asic from '@/assets/images/svg/Asic'
import Auction from '@/assets/images/svg/Auction'
import Solution from '@/assets/images/svg/Solution'

export const serviceData: ServiceDataType[] = [
  {
    id: 1,
    img: Asic,
    imgAltText: 'background',
    title: 'Shop Miners',
    content:
      'Buy New In-Stock Miners. Place Futures Orders. Purchase Used Hardware'
  },
  {
    id: 2,
    img: Solution,
    imgAltText: 'background',
    title: 'Hosting',
    content:
      'Sites located in the United States. +2 MW of Available Capacity. Immediate Online for Buy & Host'
  },
  {
    id: 1,
    img: Auction,
    imgAltText: 'background',
    title: 'Marketplace',
    content: 'Bid on ASICs. Put Your Rigs Up for Auction. Manage Your Inventory'
  }
]
