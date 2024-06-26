import { MinerHostingDataType } from 'utils/LandingPageContent/MinerHosting/types'
import Lovely from '@/assets/images/svg/Lovely'
import Crown from '@/assets/images/svg/Crown'
import Mining from '@/assets/images/svg/Mining'
import Close from '@/assets/images/svg/Close'
import Tick from '@/assets/images/svg/Tick'

export const minerHostingData: MinerHostingDataType[] = [
  {
    headerIcon: Lovely,
    headerTitle: 'Send & Host',
    headerSubTitle: 'Send your miners and we will host them!',
    rate: '$0.075',
    unit: '/KWH',
    membership: 'Plus membership fee',
    list: [
      { icon: Tick, text: 'Precision Billing' },
      {
        icon: Tick,
        text: '95% Uptime'
      },
      {
        icon: Tick,
        text: 'Pay with AutoPay or Crypto'
      },
      {
        icon: Tick,
        text: 'Aftermarket Firmware Support'
      },
      {
        icon: Tick,
        text: 'Choose Your Pool'
      },
      {
        icon: Close,
        text: '1 Year Warranty'
      },
      {
        icon: Close,
        text: 'Priority Deployment'
      }
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
      { icon: Tick, text: 'Precision Billing' },
      {
        icon: Tick,
        text: '95% Uptime'
      },
      {
        icon: Tick,
        text: 'Pay with AutoPay or Crypto'
      },
      {
        icon: Tick,
        text: 'Aftermarket Firmware Support'
      },
      {
        icon: Tick,
        text: 'Choose Your Pool'
      },
      {
        icon: Tick,
        text: '1 Year Warranty'
      },
      {
        icon: Tick,
        text: 'Priority Deployment'
      }
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
      { icon: Tick, text: 'Precision Billing' },
      {
        icon: Tick,
        text: '95% Uptime'
      },
      {
        icon: Tick,
        text: 'Pay with AutoPay or Crypto'
      },
      {
        icon: Tick,
        text: 'Aftermarket Firmware Support'
      },
      {
        icon: Tick,
        text: 'Choose Your Pool'
      },
      {
        icon: Close,
        text: '1 Year Warranty'
      },
      {
        icon: Close,
        text: 'Priority Deployment'
      }
    ],
    buttonText: 'Contact Us'
  }
]
