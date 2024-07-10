import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import {
  ActionButtonInterface,
  ProductDetailsInterface
} from '@/views/Admin/ProductDetailsPage/DetailsView/types'
import ActionButton from '@/components/ActionButton'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import {
  ModalContainer,
  HeadingContainer,
  TextContainer,
  PublishNowContainer,
  ProfileContainer,
  ImageContainer,
  PriceContainer,
  FeaturesContainer,
  BoxImage,
  DescriptionContainer,
  RowContainer,
  DescriptionTextContainer
} from '@/styles/Views/Admin/ProductDetailsPage/Details/Modal'

const ModalDescription = ({
  productDetailsData,
  actionButtonDetails,
  open,
  anchorEl,
  setAnchorEl
}: {
  productDetailsData: ProductDetailsInterface
  actionButtonDetails: ActionButtonInterface
  open: boolean
  anchorEl: HTMLElement | null
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>
}) => {
  const modelDetails =
    productDetailsData.productDetails?.[productDetailsData?.index]

  const chunkArray = (array: any, size: number) => {
    const result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }

    return result
  }
  const rows = chunkArray(actionButtonDetails?.descriptionDetails, 2)
  return (
    <ModalContainer>
      <HeadingContainer>
        <TextContainer>
          {modelDetails?.modelName}
          <span>
            {modelDetails?.contract && (
              <span>Location: {modelDetails?.contract?.location}</span>
            )}
          </span>
        </TextContainer>
        <PublishNowContainer>
          {modelDetails?.transaction ? (
            <ProfileContainer>
              {modelDetails?.user?.profileImage && (
                <ImageContainer>
                  <Image
                    src={
                      modelDetails?.user?.profileImage || DEFAULT_PROFILE_URL
                    }
                    alt="minus"
                    width={32}
                    height={32}
                    style={{ borderRadius: '50px' }}
                  />
                </ImageContainer>
              )}
              <span>by</span>
              <p>
                {modelDetails?.user?.name
                  ? modelDetails?.user?.name
                  : modelDetails?.user?.email?.split('@')[0]}
              </p>
            </ProfileContainer>
          ) : (
            <ActionButton
              actionButtonData={actionButtonDetails?.actionButtonData}
              setAnchorEl={setAnchorEl}
              anchorEl={anchorEl}
              disabled={modelDetails?.transaction ? true : false}
              open={open}
              handleClose={actionButtonDetails.handleClose}
            />
          )}
        </PublishNowContainer>
      </HeadingContainer>
      <PriceContainer>
        {modelDetails?.askPrice && `Price: $${modelDetails?.askPrice}`}
      </PriceContainer>

      <FeaturesContainer>
        <BoxImage />
        Features
      </FeaturesContainer>

      <DescriptionContainer>
        {rows?.map((row, rowIndex) => (
          <RowContainer key={rowIndex}>
            {row?.map((data: any, index: number) => (
              <DescriptionTextContainer key={index}>
                {data?.title}{' '}
                <span>
                  {data?.content} {data?.unit}
                </span>
              </DescriptionTextContainer>
            ))}
          </RowContainer>
        ))}
      </DescriptionContainer>
    </ModalContainer>
  )
}

export default ModalDescription
