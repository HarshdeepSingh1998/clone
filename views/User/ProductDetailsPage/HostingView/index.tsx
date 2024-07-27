import { ProductDetailsInterface } from 'views/User/ProductDetailsPage/types'
import {
  HostingContainer,
  TitleContainer,
  BoxImage,
  DescriptionContainer,
  DescriptionContent,
  TextContainer
} from '@/styles/Views/User/ProductDetailsPage/Hosting'

const HostingView = ({
  productDetailsData
}: {
  productDetailsData: ProductDetailsInterface
}) => {
  const hostingDetails =
    productDetailsData.productDetails?.[productDetailsData?.index]
  return (
    <>
      {hostingDetails?.hosting && hostingDetails?.contract && (
        <HostingContainer>
          <TitleContainer>
            <BoxImage />
            Hosting Details
          </TitleContainer>
          <DescriptionContainer>
            <DescriptionContent>
              <TextContainer>
                Location: <span>{hostingDetails?.contract?.location}</span>
              </TextContainer>
              <TextContainer>
                Hosting Rate:{' '}
                <span>${hostingDetails?.contract?.hostRate} /kWH</span>
              </TextContainer>
            </DescriptionContent>

            <DescriptionContent>
              <TextContainer>
                Security Deposit:{' '}
                <span>${hostingDetails?.contract?.depositPrice}</span>
              </TextContainer>
              <TextContainer>
                Setup Fee: <span>${hostingDetails?.contract?.setupPrice}</span>
              </TextContainer>
            </DescriptionContent>

            <DescriptionContent>
              <TextContainer>
                Expiration:{' '}
                <span>{hostingDetails?.contract?.expirationDate}</span>
              </TextContainer>
            </DescriptionContent>
          </DescriptionContainer>
        </HostingContainer>
      )}
    </>
  )
}

export default HostingView
