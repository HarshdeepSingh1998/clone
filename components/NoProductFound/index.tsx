import Image from 'next/image'
import { NoProductFoundProps } from 'components/NoProductFound/types'
import FanImage from 'assets/images/images/no-data-fan.png'
import {
  Container,
  ContentContainer,
  HeadingContainer,
  ImageContainer,
  NoProductFoundContainer,
  SubheadingContainer
} from '@/styles/Components/NoProductFound'

const NoProductFound: React.FC<NoProductFoundProps> = ({
  className,
  heading,
  text
}) => {
  return (
    <NoProductFoundContainer className={className}>
      <ContentContainer>
        <Container>
          <ImageContainer>
            <Image src={FanImage} alt="no product found" />
          </ImageContainer>
          <HeadingContainer>{heading}</HeadingContainer>
          <SubheadingContainer>{text}</SubheadingContainer>
        </Container>
      </ContentContainer>
    </NoProductFoundContainer>
  )
}

export default NoProductFound
