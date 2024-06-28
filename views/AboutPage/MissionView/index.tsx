import Image from 'next/image'
import {
  MissionContainer,
  MissionContent,
  MissionHeader,
  MissionCardContainer,
  MissionCard,
  MissionCardContent,
  MissionCardText
} from '@/styles/Views/AboutPage/Mission'
import { missionData } from '@/utils/AboutPageContent/Mission'

const MissionView = () => {
  return (
    <MissionContainer>
      <MissionContent>
        <MissionHeader>
          OUR PROMISE
          <span>Mission, Vision & Values</span>
        </MissionHeader>
        <MissionCardContainer>
          {missionData.map((data, i) => (
            <>
              <MissionCard cardNumber={i}>
                <MissionCardContent>
                  <Image src={data.image} alt="mission-card-image" />
                  <MissionCardText>
                    {data.text}
                    <span className="data-mission">{data.description}</span>
                  </MissionCardText>
                </MissionCardContent>
              </MissionCard>
            </>
          ))}
        </MissionCardContainer>
      </MissionContent>
    </MissionContainer>
  )
}

export default MissionView
