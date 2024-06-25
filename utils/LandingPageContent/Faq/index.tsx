import { FaqType } from 'utils/LandingPageContent/Faq/types'

export const faqData: FaqType[] = [
  {
    id: 1,
    summary: 'What is bitcoin mining?',
    content: {
      heading:
        'Bitcoin mining is the process of validating transactions on the Bitcoin blockchain through proof of work cryptography. During this process miners use computational energy to produce cryptographic hashes to validate a block. When a transaction block is validated, the network rewards the miner with newly minted bitcoin and fees generated from transactions in that block.'
    }
  },
  {
    id: 2,
    summary: 'Is bitcoin mining profitable?',
    content: {
      heading: `Absolutely! Bitcoin mining is a global competition and in order to be profitable you must be competitive. This means you need cheap power and efficient miners. At Basic Mining, we provide you that competitive edge needed to maintain profitability.`
    }
  },
  {
    id: 3,
    summary: 'What is the benefit of being a member?',
    content: {
      heading:
        'A Basic Mining membership allows you exclusive access to Bitcoin mining opportunities that other retail miners don’t have! These include:',
      data: {
        list: [
          {
            title: 'Marketplace',
            quote: 'trade in and out of your mining position'
          },
          {
            title: 'Wholesale Hosting',
            quote: 'competitive hosting rates without the standard markup'
          },
          {
            title: 'Hashrate Management',
            quote: 'optimization via miner management software and firmware'
          },
          {
            title: 'Dashboard',
            quote: 'coming soon...'
          },
          {
            title: 'Priority Access',
            quote:
              'new deployment opportunities, private consulting sessions, weekly newsletters and video updates'
          }
        ]
      }
    }
  },
  {
    id: 4,
    summary: 'Are there risks involved in Bitcoin mining?',
    content: {
      heading:
        'Like any investment, Bitcoin mining comes with its own set of risks. At Basic Mining our goal is to mitigate these risks for you.'
    }
  },
  {
    id: 5,
    summary: 'Are my miners insured?',
    content: {
      heading: `Although our site operators maintain general liability insurance, your miners are not covered. You must insure your miners separately.If you're interested in obtaining insurance we would be happy to connect you with a reputable company.`
    }
  },
  {
    id: 6,
    summary: 'Does my miner come with a warranty?',
    content: {
      heading: `Buy and host machines come with the manufacturer's warranty. New miners purchased from the shop come with a 1-year manufacturer warranty. Used miners may or may not come with a limited warranty.`
    }
  },
  {
    id: 7,
    summary: 'What happens if a miner is having issues?',
    content: {
      heading: `Our technicians can troubleshoot and fix most issues on site. However, if extensive work is required we will coordinate with one of our certified repair centers to ship your miner to get fixed. Repair work not covered under warranty will be charged at cost to fix the issue.`
    }
  },
  {
    id: 8,
    summary: 'How do you manage these miners?',
    content: {
      heading: `In order to maintain high uptime we use advanced miner management software to ensure your hardware is up and running. We do daily checks on inventory and get alerts when machines are having issues.`
    }
  },
  {
    id: 9,
    summary:
      'How soon will I be hashing after I purchase a Buy & Host package?',
    content: {
      heading: `When you purchase a Buy and Host package you will start hashing within 48 hours after payment has been received and your onboarding form has been completed.`
    }
  },
  {
    id: 10,
    summary: 'How long does shipping take when I purchase through the shop?',
    content: {
      heading: 'Shipping times vary depending on location.'
    }
  }
]
