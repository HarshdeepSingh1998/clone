import Image from 'next/image'
import { Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { SalesListInterface } from '@/utils/ApiTypes/getSales'
import { SalesDataInterface } from 'views/Admin/SalesPage/Mobile/types'
import Button from '@/components/Button'
import ExpandMoreIcon from '@/assets/images/svg/ExpandMoreIcon'
import DummyMachine from '@/assets/images/images/machine-bid.png'
import LocationIcon from '@/assets/images/svg/LocationIcon'
import HostRateIcon from '@/assets/images/svg/HostRateIcon'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import BasicMiningLogo from '@/assets/images/images/basic-mining-logo.png'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import {
  AccordianContainer,
  AccordianContent,
  ModelNameContainer,
  ButtonContainer,
  MachineContainer,
  ImageContainer,
  TextContainer,
  MachineNameContainer,
  DetailRowContainer,
  InformationContainer,
  DetailContainer,
  DescriptionContainer,
  DescriptionContent,
  ContentContainer,
  ContractContainer,
  HeaderContainer,
  AdditonalInformationContainer,
  PaymentReceivedContainer,
  CustomerImageContainer,
  NameContainer,
  NumberContainer
} from '@/styles/Views/Admin/SalesPage/Mobile/Data'

export const generateOpenTabelData = (
  salesData: SalesDataInterface,
  openStates: any[]
) => {
  return (salesData.salesList || []).map((data, index) => ({
    open: (
      <AccordianContainer>
        <AccordianContent>
          <IconButton aria-label="expand data" size="small">
            {openStates[index] ? (
              <ExpandMoreIcon />
            ) : (
              <ExpandMoreIcon style={{ transform: 'rotate(269deg)' }} />
            )}
          </IconButton>
          {data?.assignedProduct ? (
            <Tooltip
              title={data?.assignedProduct?.modelName}
              placement="top-end"
            >
              <ModelNameContainer>
                {data?.assignedProduct?.modelName &&
                data?.assignedProduct?.modelName.length > 20
                  ? `${data?.assignedProduct?.modelName?.substring(0, 20)}...`
                  : `${data?.assignedProduct?.modelName}` || 'N/A'}
              </ModelNameContainer>
            </Tooltip>
          ) : (
            <span style={{ color: 'red' }}>Product might be deleted</span>
          )}
        </AccordianContent>
        <ButtonContainer
          disabled={
            data?.paymentReceived === true ||
            data?.transactionType === 'Purchase'
          }
        >
          <Button
            type="button"
            variant="contained"
            label="Process"
            onClick={() => salesData.handlePaymentReceived(data._id)}
          ></Button>
        </ButtonContainer>
      </AccordianContainer>
    )
  }))
}

const totalPriceCalculator = (data: SalesListInterface) => {
  const totalPrice = data?.lotId
    ? (
        Math.round(
          (data?.closedPrice * Number(data?.quantity) +
            (data?.assignedProduct?.contract?.depositPrice *
              Number(data?.quantity) || 0) +
            (data?.assignedProduct?.contract?.setupPrice *
              Number(data?.quantity) || 0)) *
            100
        ) / 100
      ).toFixed(2)
    : (
        Math.round(
          (data?.closedPrice +
            (data?.assignedProduct?.contract?.depositPrice || 0) +
            (data?.assignedProduct?.contract?.setupPrice || 0)) *
            100
        ) / 100
      ).toFixed(2)

  return totalPrice ? totalPrice : 'N/A'
}

export const generateTableData = (
  salesData: SalesDataInterface,
  screenType: string
) => {
  return (salesData.salesList || []).map(data => ({
    machine: (
      <>
        {data?.assignedProduct ? (
          <>
            <MachineContainer className="sales-mobile-machine">
              <ImageContainer className="sales-image">
                <Image
                  src={data?.assignedProduct?.images[0] || DummyMachine}
                  alt="machine-Id"
                  width={100}
                  height={100}
                />
              </ImageContainer>
              <TextContainer>
                <Tooltip
                  title={data?.assignedProduct?.modelName}
                  placement="top-end"
                >
                  <MachineNameContainer>
                    {data?.assignedProduct?.modelName &&
                    data?.assignedProduct?.modelName.length > 20
                      ? `${data?.assignedProduct?.modelName?.substring(0, 20)}...`
                      : `${data?.assignedProduct?.modelName}` || 'N/A'}
                  </MachineNameContainer>
                </Tooltip>
                <DetailRowContainer>
                  <InformationContainer>
                    {data?.assignedProduct?.lotId ? (
                      <div>{data?.assignedProduct?.lotId}</div>
                    ) : (
                      <Tooltip
                        title={data?.assignedProduct?.serialNumber}
                        placement="top-end"
                      >
                        <div>
                          {data?.assignedProduct?.serialNumber &&
                          data?.assignedProduct?.serialNumber.length > 10
                            ? `SN: ${data?.assignedProduct?.serialNumber?.substring(0, 10)}...`
                            : `SN: ${data?.assignedProduct?.serialNumber}` ||
                              'N/A'}
                        </div>
                      </Tooltip>
                    )}
                  </InformationContainer>
                  <InformationContainer>
                    <div>
                      {data?.assignedProduct?.lotId &&
                        data?.assignedProduct?.quantity &&
                        `Quantity: ${data?.assignedProduct?.quantity}`}
                    </div>
                  </InformationContainer>
                </DetailRowContainer>
                <DetailContainer>
                  <DescriptionContainer>
                    <DescriptionContent>
                      <LocationIcon />
                      {data?.assignedProduct?.contract?.location || 'N/A'}
                    </DescriptionContent>
                    <DescriptionContent className="host-rate">
                      <HostRateIcon />
                      {data?.assignedProduct?.contract?.hostRate
                        ? `$${data?.assignedProduct?.contract?.hostRate} kWH`
                        : 'N/A'}
                    </DescriptionContent>
                  </DescriptionContainer>
                  <DescriptionContainer>
                    <DescriptionContent>
                      <PowerIcon />
                      {data?.assignedProduct?.power} kW
                    </DescriptionContent>
                    <DescriptionContent>
                      <HashRateIcon />
                      {data?.assignedProduct?.hashRate} TH/s
                    </DescriptionContent>
                  </DescriptionContainer>
                </DetailContainer>
              </TextContainer>
            </MachineContainer>
          </>
        ) : (
          <span style={{ color: 'red' }}>Product might be deleted</span>
        )}
      </>
    ),
    content: (
      <ContentContainer>
        <ContractContainer className="mobile-responsive">
          <HeaderContainer className="contract-header">Type</HeaderContainer>
          {data?.transactionType}
        </ContractContainer>
        <ContractContainer className="mobile-responsive">
          <HeaderContainer className="contract-header">
            Transaction ID
          </HeaderContainer>
          <Tooltip title={data?._id}>
            {screenType === 'tab' ? (
              <AdditonalInformationContainer className="transcation-id-class">
                {data?._id && data?._id?.length > 20
                  ? `SN: ${data?._id?.substring(0, 20)}...`
                  : `SN: ${data?._id}` || 'N/A'}
              </AdditonalInformationContainer>
            ) : (
              <AdditonalInformationContainer className="transcation-id-class">
                {data?._id}
              </AdditonalInformationContainer>
            )}
          </Tooltip>
        </ContractContainer>
        <ContractContainer className="mobile-responsive">
          <HeaderContainer className="contract-header">Status</HeaderContainer>
          <PaymentReceivedContainer background={data?.paymentReceived}>
            {data?.paymentReceived === true
              ? 'Completed'
              : !data?.paymentReceived && data?.transactionType === 'Purchase'
                ? 'Processing'
                : 'Pending'}
          </PaymentReceivedContainer>
        </ContractContainer>
        <ContractContainer className="mobile-responsive">
          <HeaderContainer className="contract-header">Total</HeaderContainer>
          <AdditonalInformationContainer>
            {totalPriceCalculator(data)}
          </AdditonalInformationContainer>
        </ContractContainer>
        <ContractContainer className="mobile-responsive">
          <HeaderContainer className="contract-header">Seller</HeaderContainer>
          <CustomerImageContainer className="sales-customer">
            <ImageContainer
              className="customer"
              profileImage={data?.assignee?.profileImage}
            >
              <Image
                src={data?.assignee?.profileImage || BasicMiningLogo}
                alt="customer"
                width={100}
                height={100}
              />
            </ImageContainer>
            <TextContainer>
              <NameContainer>
                <NameContainer>
                  {data?.assignee?.name ?? 'Unknown'}
                </NameContainer>
              </NameContainer>
              <NumberContainer>
                <NumberContainer>{data?.assignee?.phone ?? ''}</NumberContainer>
              </NumberContainer>
            </TextContainer>
          </CustomerImageContainer>
        </ContractContainer>
        <ContractContainer className="mobile-responsive">
          <HeaderContainer className="contract-header">Buyer</HeaderContainer>
          <CustomerImageContainer className="sales-customer">
            <ImageContainer className="customer">
              <Image
                src={data?.assignedUser?.profileImage || DEFAULT_PROFILE_URL}
                alt="customer"
                width={100}
                height={100}
                style={{ borderRadius: '50px' }}
              />
            </ImageContainer>
            <TextContainer>
              <NameContainer>
                <NameContainer>
                  {data?.assignedUser?.name ?? 'Unknown'}
                </NameContainer>
              </NameContainer>
              <NumberContainer>
                <NumberContainer>
                  {data?.assignedUser?.phone ?? ''}
                </NumberContainer>
              </NumberContainer>
            </TextContainer>
          </CustomerImageContainer>
        </ContractContainer>
        <ContractContainer className="mobile-responsive">
          <HeaderContainer className="contract-header">
            {data?.assignedProduct?.lotId
              ? 'Closed Price per unit'
              : 'Closed Price'}
          </HeaderContainer>
          <AdditonalInformationContainer>
            {data?.closedPrice ? `$${data?.closedPrice}` : 'N/A'}
          </AdditonalInformationContainer>
        </ContractContainer>
        <ContractContainer className="mobile-responsive">
          <HeaderContainer className="contract-header">
            Deposit Fee
          </HeaderContainer>
          <AdditonalInformationContainer>
            {data?.assignedProduct?.contract?.depositPrice
              ? `$${data?.assignedProduct?.contract?.depositPrice}`
              : 'N/A'}
          </AdditonalInformationContainer>
        </ContractContainer>
        <ContractContainer className="mobile-responsive">
          <HeaderContainer className="contract-header">
            Setup Fee
          </HeaderContainer>
          <AdditonalInformationContainer>
            {data?.assignedProduct?.contract?.setupPrice
              ? `$${data?.assignedProduct?.contract?.setupPrice}`
              : 'N/A'}
          </AdditonalInformationContainer>
        </ContractContainer>
      </ContentContainer>
    )
  }))
}
