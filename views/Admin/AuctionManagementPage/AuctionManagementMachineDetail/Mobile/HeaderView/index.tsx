import Image from 'next/image'
import { endDate } from '@/utils/HelperFunctions/AuctionEndDate'
import { AuctionManagementMachineDetailInterface } from 'views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Mobile/types'
import Loader from '@/components/Loader'
import DummyMachine from '@/assets/images/images/machine-bid.png'
import {
  HeaderContainer,
  HeaderContent,
  DescriptionContainer,
  ImageContainer,
  TextContainer,
  MachineNameContainer,
  MachineInfoContainer,
  ModalNameContainer,
  PriceContainer,
  EndingTimeContainer,
  EndingTimeContent
} from '@/styles/Views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Mobile/Header'

const HeaderView = ({
  auctionManagementData
}: {
  auctionManagementData: AuctionManagementMachineDetailInterface
}) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <DescriptionContainer>
          <ImageContainer>
            <Image src={DummyMachine} alt="machine-Id" />
          </ImageContainer>
          <TextContainer>
            <MachineNameContainer className="model-name">
              {auctionManagementData?.biddingList?.[0]?.product?.modelName}
            </MachineNameContainer>
            <ModalNameContainer>
              <div>{`SN: ${auctionManagementData?.biddingList?.[0]?.product?.serialNumber}`}</div>
            </ModalNameContainer>
            <MachineInfoContainer>
              {auctionManagementData?.biddingList?.[0]?.product?.power
                ? `${auctionManagementData?.biddingList?.[0]?.product?.power}kw`
                : 'N/A'}
              |
              {auctionManagementData?.biddingList?.[0]?.product?.hashRate
                ? `$${auctionManagementData?.biddingList?.[0]?.product?.hashRate}TH/s`
                : 'N/A'}
            </MachineInfoContainer>
            <PriceContainer className="price">
              Price:&nbsp;
              {auctionManagementData?.biddingList?.[0]?.product?.askPrice
                ? `$${auctionManagementData?.biddingList?.[0]?.product?.askPrice}`
                : 'N/A'}
            </PriceContainer>
          </TextContainer>
        </DescriptionContainer>
        <EndingTimeContainer>
          <EndingTimeContent className="time-end-class">
            Ends in&nbsp;
            {endDate(
              auctionManagementData?.biddingList?.[0]?.product
                ?.auctionEndDate as string
            )}
          </EndingTimeContent>
        </EndingTimeContainer>
      </HeaderContent>
      {!auctionManagementData?.auctionData && (
        <Loader blurredBackgroundtrue={!auctionManagementData?.auctionData} />
      )}
    </HeaderContainer>
  )
}

export default HeaderView
