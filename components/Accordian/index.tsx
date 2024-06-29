import Image from 'next/image'
import { AccordianProps } from 'components/Accordian/types'
import Minus from 'assets/images/images/minus.png'
import Plus from 'assets/images/images/plus.png'
import {
  FaqAccordian,
  FaqAccordianContent,
  FaqAccordianHeading,
  FaqAccordianTitle,
  FaqLists
} from 'styles/Components/Faq'

const Accordian: React.FC<AccordianProps> = ({
  faqData,
  i,
  id,
  handleClick
}) => {
  return (
    <FaqAccordian
      isOpen={i === id ? true : false}
      key={i}
      onClick={() => handleClick(i)}
    >
      <FaqAccordianHeading>
        <FaqAccordianTitle>
          {(i + 1).toString().padStart(2, '0')}
          <span>{faqData?.summary}</span>
        </FaqAccordianTitle>
        {i == id ? (
          <Image src={Minus} alt="minus" />
        ) : (
          <Image src={Plus} alt="plus" />
        )}
      </FaqAccordianHeading>
      {i === id && (
        <FaqAccordianContent>
          {faqData?.content?.heading && (
            <>
              <FaqAccordianContent>
                {faqData?.content?.heading}
              </FaqAccordianContent>
              <ul>
                {faqData?.content?.data?.list?.map((item, index) => (
                  <FaqLists key={index}>
                    <span className="title">{item.title}</span>:{' '}
                    <span>{item.quote}</span>
                  </FaqLists>
                ))}
              </ul>
            </>
          )}
        </FaqAccordianContent>
      )}
    </FaqAccordian>
  )
}

export default Accordian
