/* eslint-disable no-unused-vars */
import Image from 'next/image'
import { Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { SalesDataInterface } from 'views/Admin/SalesPage/Desktop/types'
import FilterIcon from '@/assets/images/svg/TableFilterIcon'
import DummyMachine from '@/assets/images/images/machine-bid.png'
import LocationIcon from '@/assets/images/svg/LocationIcon'
import HostRateIcon from '@/assets/images/svg/HostRateIcon'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import BasicMiningLogo from '@/assets/images/images/basic-mining-logo.png'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import ExpandMoreIcon from '@/assets/images/svg/ExpandMoreIcon'
import {
  ImageContainer,
  TextContainer,
  MachineNameContainer,
  DetailContainer,
  ModalNameContainer,
  AdditionalDetailContainer,
  ContractContainer,
  Container,
  TransactionContainer,
  PaymentContainer,
  TotalContainer,
  ButtonContainer,
  ClosedAmountContainer,
  HeadingContainer,
  AmountContainer,
  DepositAmountContainer,
  SetupFeeContainer
} from '@/styles/Views/Admin/SalesPage/Desktop/Data'
import { SalesListInterface } from '@/utils/ApiTypes/getSales'
import Button from '@/components/Button'

export const generateTableData = (
  salesData: SalesDataInterface,
  openStates: any[],
  handleToggle: (index: number) => void
) => {
  return (salesData.salesList || []).map((data, index) => ({
    machinemodel: data?.assignedProduct ? (
      <>
        <ImageContainer>
          <Image
            src={data?.assignedProduct?.images[0] || DummyMachine}
            alt="machine-Id"
            width={100}
            height={100}
          />
        </ImageContainer>
        <TextContainer>
          <Tooltip title={data?.assignedProduct?.modelName} placement="top-end">
            <MachineNameContainer>
              {data?.assignedProduct?.modelName &&
              data?.assignedProduct?.modelName.length > 15
                ? `${data?.assignedProduct?.modelName?.substring(0, 15)}...`
                : `${data?.assignedProduct?.modelName}` || 'N/A'}
            </MachineNameContainer>
          </Tooltip>
          <DetailContainer>
            <ModalNameContainer>
              {data?.lotId ? (
                <div>{data?.lotId}</div>
              ) : (
                <Tooltip
                  title={data?.assignedProduct?.serialNumber}
                  placement="top-end"
                >
                  <div>
                    {data?.assignedProduct?.serialNumber &&
                    data?.assignedProduct?.serialNumber.length > 10
                      ? `SN: ${data?.assignedProduct?.serialNumber?.substring(0, 10)}...`
                      : `SN: ${data?.assignedProduct?.serialNumber}` || 'N/A'}
                  </div>
                </Tooltip>
              )}
            </ModalNameContainer>
            <ModalNameContainer>
              <div>
                {data?.lotId && data?.quantity && `Quantity: ${data?.quantity}`}
              </div>
            </ModalNameContainer>
          </DetailContainer>
          <AdditionalDetailContainer>
            <ContractContainer>
              <Container>
                <LocationIcon />
                {data?.assignedProduct?.contract?.location || 'N/A'}
              </Container>
              <Container className="host-rate">
                <HostRateIcon />
                {data?.assignedProduct?.contract?.hostRate
                  ? `$${data?.assignedProduct?.contract?.hostRate}/kWH`
                  : 'N/A'}
              </Container>
            </ContractContainer>
            <ContractContainer>
              <Container>
                <PowerIcon />
                {data?.assignedProduct?.power} kW
              </Container>
              <Container>
                <HashRateIcon />
                {data?.assignedProduct?.hashRate} TH/s
              </Container>
            </ContractContainer>
          </AdditionalDetailContainer>
        </TextContainer>
      </>
    ) : (
      <span style={{ color: 'red' }}>Product might be deleted</span>
    ),
    type: <div>{data?.transactionType}</div>,
    transactionid: (
      <Tooltip title={data?._id}>
        <TransactionContainer className="transcation-id-class">
          {data?._id}
        </TransactionContainer>
      </Tooltip>
    ),
    status: (
      <PaymentContainer background={data?.paymentReceived}>
        {data?.paymentReceived ? 'Completed' : 'Pending'}
      </PaymentContainer>
    ),
    total: <TotalContainer>{totalPriceCalculator(data)}</TotalContainer>,
    seller: (
      <Tooltip
        title={`Name: ${data?.assignee?.name ?? 'Unknown'}, Phone No: ${data?.assignee?.phone ?? 'N/A'}`}
        placement="top-end"
      >
        <ImageContainer
          className="customer"
          profileImage={data?.assignee?.profileImage}
        >
          <Image
            src={
              data?.assignee?.role === 'admin'
                ? BasicMiningLogo
                : data?.assignee?.profileImage || DEFAULT_PROFILE_URL
            }
            alt="customer"
            width={100}
            height={100}
          />
        </ImageContainer>
      </Tooltip>
    ),
    buyer: (
      <Tooltip
        title={`Name: ${data?.assignedUser?.name ?? 'Unknown'}, Phone No: ${data?.assignedUser?.phone ?? 'N/A'}`}
        placement="top-end"
      >
        <ImageContainer className="customer">
          <Image
            src={
              data?.assignedUser?.role === 'admin'
                ? BasicMiningLogo
                : data?.assignedUser?.profileImage || DEFAULT_PROFILE_URL
            }
            alt="customer"
            width={100}
            height={100}
            style={{ borderRadius: '50px' }}
          />
        </ImageContainer>
      </Tooltip>
    ),
    actions: (
      <ButtonContainer>
        <Button
          type="button"
          variant="contained"
          label="Process"
          onClick={() => salesData.handlePaymentReceived(data._id)}
          disable={data?.paymentReceived === true}
        ></Button>
      </ButtonContainer>
    ),
    icon: (
      <IconButton
        aria-label="expand data"
        size="small"
        onClick={() => handleToggle(index)}
      >
        {openStates[index] ? (
          <ExpandMoreIcon />
        ) : (
          <ExpandMoreIcon style={{ transform: 'rotate(269deg)' }} />
        )}
      </IconButton>
    )
  }))
}

export const generateOpenTabelData = (salesData: SalesDataInterface) => {
  return (salesData.salesList || []).map(data => ({
    closedPrice: (
      <ClosedAmountContainer>
        <HeadingContainer>
          {data?.assignedProduct?.lotId
            ? 'Closed Price per unit'
            : 'Closed Price'}
        </HeadingContainer>
        <AmountContainer>
          {data?.closedPrice ? `$${data?.closedPrice?.toFixed(2)}` : 'N/A'}
        </AmountContainer>
      </ClosedAmountContainer>
    ),
    depositPrice: (
      <DepositAmountContainer>
        <HeadingContainer>Deposit Fee</HeadingContainer>
        <AmountContainer style={{ paddingRight: '10px' }}>
          {data?.assignedProduct?.contract?.depositPrice
            ? data.assignedProduct.lotId
              ? `$${
                  data?.assignedProduct?.contract?.depositPrice *
                  Number(data?.assignedProduct?.quantity)
                }`
              : `$${data?.assignedProduct?.contract?.depositPrice}`
            : 'N/A'}
        </AmountContainer>
      </DepositAmountContainer>
    ),
    setupPrice: (
      <SetupFeeContainer>
        <HeadingContainer>Setup Fee</HeadingContainer>
        <AmountContainer style={{ paddingRight: '10px' }}>
          {data?.assignedProduct?.contract?.setupPrice
            ? data.assignedProduct.lotId
              ? `$${
                  data?.assignedProduct?.contract?.setupPrice *
                  Number(data?.assignedProduct?.quantity)
                }`
              : `$${data?.assignedProduct?.contract?.setupPrice}`
            : 'N/A'}
        </AmountContainer>
      </SetupFeeContainer>
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

export const columns = [
  { id: 'machinemodel', label: 'Machine Model' },
  { id: 'type', label: 'Type' },
  { id: 'transactionid', label: 'Transaction ID' },
  { id: 'status', label: 'Status', icon: <FilterIcon /> },
  { id: 'total', label: 'Total' },
  { id: 'seller', label: 'Seller' },
  {
    id: 'buyer',
    label: 'Buyer'
  },
  {
    id: 'actions',
    label: 'Actions'
  },
  {
    id: 'icon',
    label: ''
  }
]
