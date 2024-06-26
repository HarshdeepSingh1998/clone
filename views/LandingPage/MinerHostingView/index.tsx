import { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { MinerHostingDataType } from '@/utils/LandingPageContent/MinerHosting/types'
import MinerHostingCardComponent from '@/components/MinerHostingCard'
import {
  MinerHostingSectionContainer,
  MinerHostingContainer,
  MinerHostingHeading,
  MinerHostingCardContainer
} from '@/styles/Views/LandingPage/MinerHosting'

interface MinerHostingViewType {
  minerHostingData: MinerHostingDataType[]
}

const MinerHostingView: React.FC<MinerHostingViewType> = ({
  minerHostingData
}) => {
  const [active, setActive] = useState(1)
  const { screenType } = useScreenType()

  return (
    <MinerHostingSectionContainer>
      <MinerHostingContainer>
        <MinerHostingHeading>
          OUR HOSTING<span>Miner Hosting</span>
          <span className="hosting-dec">
            Fully managed hosting solutions to fit your needs.
          </span>
        </MinerHostingHeading>
        {screenType === 'mobile' || screenType === 'tab' ? (
          <Carousel animation="slide" autoPlay={false}>
            {minerHostingData.map((data, i) => (
              <>
                <MinerHostingCardComponent
                  data={data}
                  i={i}
                  active={active}
                  setActive={setActive}
                />
              </>
            ))}
          </Carousel>
        ) : (
          <MinerHostingCardContainer>
            {minerHostingData.map((data, i) => (
              <>
                <MinerHostingCardComponent
                  data={data}
                  i={i}
                  active={active}
                  setActive={setActive}
                />
              </>
            ))}
          </MinerHostingCardContainer>
        )}
      </MinerHostingContainer>
    </MinerHostingSectionContainer>
  )
}

export default MinerHostingView
