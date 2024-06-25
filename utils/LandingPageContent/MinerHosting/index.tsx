import { MinerHostingDataType } from 'utils/LandingPageContent/MinerHosting/types'
import Lovely from '@/assets/images/svg/Lovely'
import Crown from '@/assets/images/svg/Crown'
import Mining from '@/assets/images/svg/Mining'

export const minerHostingData: MinerHostingDataType[] = [
  {
    headerIcon: Lovely,
    headerTitle: 'Send & Host',
    headerSubTitle: 'Send your miners and we will host them!',
    rate: '$0.075',
    unit: '/KWH',
    membership: 'Plus membership fee',
    list: [
      'Precision Billing',
      '95% Uptime',
      'Pay with AutoPay or Crypto',
      'Aftermarket Firmware Support',
      'Choose Your Pool',
      '1 Year Warranty',
      'Priority Deployment'
    ],
    buttonText: 'Request Quote'
  },
  {
    headerIcon: Crown,
    headerTitle: 'Buy & Host',
    headerSubTitle: 'Our best hosting rate with quick deployments',
    rate: '$0.065',
    unit: '/KWH',
    membership: 'Plus membership fee',
    list: [
      'Precision Billing',
      '95% Uptime',
      'Pay with AutoPay or Crypto',
      'Aftermarket Firmware Support',
      'Choose Your Pool',
      '1 Year Warranty',
      'Priority Deployment'
    ],
    buttonText: 'Shop Miners'
  },
  {
    headerIcon: Mining,
    headerTitle: 'Market Makers',
    headerSubTitle: 'Marketplace liquidity providers',
    rate: 'Call for Details',
    unit: '',
    membership: 'Custom',
    list: [
      'Precision Billing',
      '95% Uptime',
      'Pay with AutoPay or Crypto',
      'Aftermarket Firmware Support',
      'Choose Your Pool',
      '1 Year Warranty',
      'Priority Deployment'
    ],
    buttonText: 'Contact Us'
  }
]
