import { founderData } from '@/utils/AboutPageContent/Founder'
import Founder from 'assets/images/images/Photo.png'
import FounderImage from 'assets/images/svg/FounderImage'
import {
  FounderContainer,
  FounderDetails,
  FounderHeader,
  FounderName,
  FounderProfile,
  FounderProfileContainer,
  TestimonialData,
  TestimonialPara
} from '@/styles/Views/AboutPage/Founder'

const FounderView = () => {
  return (
    <FounderContainer>
      <FounderHeader>Meet the Founder</FounderHeader>
      <FounderProfileContainer>
        <FounderProfile src={Founder} alt="founder_image" />
        <FounderDetails>
          <FounderName>
            Gian Mendoza <hr />
          </FounderName>
          <FounderImage />
          <TestimonialData>
            <span>A Pleb Miners Journey:</span>
            <TestimonialPara>
              {founderData.map((item, index: number) => (
                <span key={index}>&quot;{item?.testimonial}&quot; </span>
              ))}
            </TestimonialPara>
          </TestimonialData>
        </FounderDetails>
      </FounderProfileContainer>
    </FounderContainer>
  )
}

export default FounderView
