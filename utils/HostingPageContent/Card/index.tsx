import { CardType } from 'utils/HostingPageContent/Card/types'
import HostingAuction from '@/assets/images/svg/HostingAuction'
import HostingAsic from '@/assets/images/svg/HostingAsic'

export const card: CardType[] = [
  {
    heading: 'Tier 1',
    image: HostingAuction,
    title: '$10',
    subtitle: 'Number of Units',
    units: '1-19',
    buttonText: 'Shop Miners'
  },
  {
    heading: 'Tier 2',
    image: HostingAuction,
    title: '$8',
    subtitle: 'Number of Units',
    units: '20-49',
    buttonText: 'Shop Miners'
  },
  {
    heading: 'Tier 3',
    image: HostingAsic,
    title: '$6',
    subtitle: 'Number of Units',
    units: '50+',
    buttonText: 'Shop Miners'
  }
]
