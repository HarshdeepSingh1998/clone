import { ServiceDataType } from '@/utils/LandingPageContent/ServiceData/types'
import ServiceCard from 'components/ServiceCard'
import {
  CardContainer,
  ServiceSubheading,
  ServiceHeading,
  ServiceCardContainer,
  ServiceContentContainer
} from 'styles/Views/LandingPage/Service'

interface ServiceProps {
  serviceData: ServiceDataType[]
}

const ServiceView: React.FC<ServiceProps> = ({ serviceData }) => {
  return (
    <>
      <ServiceContentContainer>
        <ServiceCardContainer>
          <ServiceHeading>OUR SERVICES</ServiceHeading>
          <ServiceSubheading>Hardware & Hosting Solutions</ServiceSubheading>
          <CardContainer>
            {serviceData?.map((serviceData, i) => (
              <ServiceCard key={i} serviceData={serviceData} />
            ))}
          </CardContainer>
        </ServiceCardContainer>
      </ServiceContentContainer>
    </>
  )
}

export default ServiceView
