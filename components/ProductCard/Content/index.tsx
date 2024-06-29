import Image from 'next/image'
import { Tooltip } from '@mui/material'
import { ContentProps } from 'components/ProductCard/types'
import DefaultMachineImage from '@/assets/images/images/bid.png'
import LocationIcon from '@/assets/images/svg/LocationIcon'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import HostRateIcon from '@/assets/images/svg/HostRateIcon'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import {
  DescriptionContainer,
  ContentContainer,
  DetailContainer,
  ImageContainer,
  FeatureContainer,
  MachineContainer,
  ModalName,
  StatusContainer,
  TitleContainer
} from '@/styles/Components/ProductCard/Content'

const Content: React.FC<ContentProps> = ({ data }) => {
  console.log(data)
  return (
    <ContentContainer>
      <ImageContainer>
        <Image
          src={data?.images[0] || DefaultMachineImage}
          alt="machine-image"
          width={0}
          height={0}
          style={{
            width: '65%',
            height: 'auto'
          }}
        />
      </ImageContainer>
      <DetailContainer>
        <DescriptionContainer>
          <MachineContainer>{data?.manufacturer}</MachineContainer>
          <StatusContainer className="New">
            {data?.productStatus}
          </StatusContainer>
        </DescriptionContainer>

        <TitleContainer>
          {data?.modelName}
          {(
            data?.lotId ? data?.lotCreatedBy === data?.user?._id : data?.lotId
          ) ? (
            <ModalName>
              <div>{data?.lotId}</div>
            </ModalName>
          ) : (
            <ModalName>
              {data?.serialNumber && data?.serialNumber?.length < 15 ? (
                <div>SN: {data?.serialNumber}</div>
              ) : (
                <Tooltip title={data?.serialNumber}>
                  <div>{`SN: ${data?.serialNumber.slice(0, 15)}...`}</div>
                </Tooltip>
              )}
            </ModalName>
          )}
        </TitleContainer>
        {data?.hosting && (
          <DescriptionContainer>
            <FeatureContainer>
              <LocationIcon />
              {`${data?.contract?.location}` || 'N/A'}
            </FeatureContainer>
            <FeatureContainer className="host-rate">
              <HostRateIcon />
              {`$${data?.contract?.hostRate}/kWH` || 'N/A'}
            </FeatureContainer>
          </DescriptionContainer>
        )}

        <DescriptionContainer>
          <FeatureContainer>
            <PowerIcon />
            {data.power ? `${data.power}kW` : 'N/A'}
          </FeatureContainer>
          <FeatureContainer>
            <HashRateIcon />
            {`${data?.hashRate}TH/s` || 'N/A'}
          </FeatureContainer>
        </DescriptionContainer>
      </DetailContainer>
    </ContentContainer>
  )
}

export default Content
