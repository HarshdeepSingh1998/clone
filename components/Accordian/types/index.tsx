import { SetStateAction } from 'react'
import { FaqType } from '@/utils/LandingPageContent/Faq/types'

export interface AccordianProps {
  faqData: FaqType
  // eslint-disable-next-line no-unused-vars
  handleClick: (index: number) => void
  i: number
  id: SetStateAction<number | null>
}
