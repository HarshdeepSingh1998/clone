import { useState, SetStateAction } from 'react'
import { FaqType } from '@/utils/LandingPageContent/Faq/types'
import Accordian from '@/components/Accordian'
import {
  FaqAccordianContainer,
  FaqSectionContainer,
  FaqSectionContent,
  FaqSectionHeading
} from '@/styles/Views/LandingPage/Faq'

interface FaqViewProps {
  faqData: FaqType[]
}

const FaqView: React.FC<FaqViewProps> = ({ faqData }) => {
  const [id, setId] = useState<SetStateAction<number | null>>(0)
  const handleClick = function (index: number): void {
    if (id === index) setId(null)
    else setId(index)
  }

  return (
    <FaqSectionContainer>
      <FaqSectionContent>
        <FaqSectionHeading>
          FAQs
          <span>Frequently Asked Questions</span>
        </FaqSectionHeading>
        <div>
          <FaqAccordianContainer>
            {faqData?.map((faqData, i) => (
              <Accordian
                faqData={faqData}
                key={i}
                i={i}
                id={id}
                handleClick={handleClick}
              />
            ))}
          </FaqAccordianContainer>
        </div>
      </FaqSectionContent>
    </FaqSectionContainer>
  )
}

export default FaqView
