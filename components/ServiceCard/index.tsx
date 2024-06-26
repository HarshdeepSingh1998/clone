import React from 'react'
import { ServiceCardProps } from 'components/ServiceCard/types'
import {
  ServiceCardContent,
  ServiceCardDetailsContainer,
  ServiceCardParaContainer,
  ServiceCardTableContent,
  ServiceCardTitleContainer,
  ServiceCardImageContainer
} from 'styles/Components/ServiceCard'

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceData }) => {
  return (
    <ServiceCardDetailsContainer>
      <ServiceCardContent>
        <ServiceCardImageContainer>
          {serviceData?.img()}
        </ServiceCardImageContainer>
        <ServiceCardTableContent>
          <ServiceCardTitleContainer>
            {serviceData?.title}
          </ServiceCardTitleContainer>
          <ServiceCardParaContainer>
            {serviceData?.content
              .split('.')
              .map((sentence: string, index: React.Key | null | undefined) => (
                <React.Fragment key={index}>
                  {sentence.trim()}
                  <br />
                </React.Fragment>
              ))}
          </ServiceCardParaContainer>
        </ServiceCardTableContent>
      </ServiceCardContent>
    </ServiceCardDetailsContainer>
  )
}

export default ServiceCard
