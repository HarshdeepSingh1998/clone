import Image from 'next/image'
import { Tooltip } from '@mui/material'
import { UserState } from '@/store/userSlice'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { BiddingList } from '@/utils/ApiTypes/BiddingList'
import { getLastElement } from '@/utils/HelperFunctions/GetLastElement'
import { getBidDirectionArrow } from '@/utils/HelperFunctions/GetBidDirectionArrow'
import { getBidDirectionUpwardArrow } from '@/utils/HelperFunctions/GetBidDirectionUpwardArrrow'
import { getBidAmountPercent } from '@/utils/HelperFunctions/GetBidAmountPercent'
import { MemberDetailsDataInterface } from '@/views/Admin/MembersPage/MemberDetailsPage/Desktop/types'
import Button from '@/components/Button'
import ActionButton from '@/components/ActionButton'
import Bid from 'assets/images/images/bid.png'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import DownDirectionMark from '@/assets/images/svg/DownDirectionMark'
import UpDirectionMark from '@/assets/images/svg/UpwardArrow'
import {
  ImageContainer,
  ImageContent,
  TitleContainer,
  TitleContent,
  DetailContainer,
  ContractContainer,
  PriceContainer,
  MachineContainer,
  TextContainer,
  MachineNameContainer,
  MachineInfo,
  MachinePrice,
  BidMemberAmountContainer,
  AmountPercentage,
  ActionContainer,
  AssignButtonContainer
} from '@/styles/Views/Admin/MembersPage/MemberDetails/Desktop/Data'

export const columns = [
  { id: 'machine', label: 'Machine Model' },
  { id: 'contract', label: 'Contract ID' },
  { id: 'deposit', label: 'Deposit Fee' },
  { id: 'setup', label: 'Setup Fee' },
  { id: 'status', label: 'Status' }
]

export const generateTableData = (
  memberDetailData: ProductList[] | undefined
) => {
  return (memberDetailData || [])?.map(data => ({
    machine: (
      <>
        {data?.modelName ? (
          <>
            <ImageContainer>
              <ImageContent>
                {data?.images?.length > 0 ? (
                  <Image
                    src={data?.images[0]}
                    alt="hello"
                    width={65}
                    height={56}
                  />
                ) : (
                  <Image src={Bid} alt="hello" width={65} height={56} />
                )}
              </ImageContent>
              <TitleContainer>
                <TitleContent>{data?.modelName}</TitleContent>
                <DetailContainer>
                  {data?.lotId ? `${data?.lotId}` : `SN: ${data?.serialNumber}`}
                </DetailContainer>
                <DetailContainer>
                  <PowerIcon /> {data?.power} kW | <HashRateIcon />
                  {data?.hashRate} TH/s
                </DetailContainer>
              </TitleContainer>
            </ImageContainer>
          </>
        ) : (
          <ImageContainer style={{ color: 'red', padding: '16px 0' }}>
            <ImageContent>
              {data?.images?.length > 0 ? (
                <Image
                  src={data?.images[0]}
                  alt="hello"
                  width={65}
                  height={56}
                />
              ) : (
                <Image src={Bid} alt="hello" width={65} height={56} />
              )}
            </ImageContent>
            Product might be deleted
          </ImageContainer>
        )}
      </>
    ),
    contract: (
      <Tooltip title={data?.contract?.contractId} placement="top-end">
        <ContractContainer className="transcation-id-class">
          {data?.contract?.contractId
            ? Number(data?.contract?.contractId) > 8
              ? `${data?.contract?.contractId?.substring(0, 8)}...`
              : `${data?.contract?.contractId}` || 'N/A'
            : '-'}
        </ContractContainer>
      </Tooltip>
    ),
    deposit: (
      <PriceContainer>
        {data?.contract?.depositPrice
          ? `$${data.contract.depositPrice}`
          : 'N/A'}
      </PriceContainer>
    ),
    setup: (
      <PriceContainer>
        {data?.contract?.setupPrice ? `$${data.contract.setupPrice}` : 'N/A'}
      </PriceContainer>
    ),
    status: (
      <PriceContainer>
        {data?.status ? (
          <>
            {data?.status === 'UnPublished' ? 'In Inventory' : 'In Marketplace'}
          </>
        ) : (
          '-'
        )}
      </PriceContainer>
    )
  }))
}

export const generateBiddingTableData = (
  biddingList: BiddingList[] | undefined,
  userData: UserState,
  memberDetailsData: MemberDetailsDataInterface
) => {
  return (biddingList || [])?.map(data => ({
    machine: (
      <MachineContainer>
        <ImageContainer>
          <ImageContent>
            <Image
              src={data?.product.images[0] || Bid}
              width={50}
              alt="machine-Id"
              height={50}
            />
          </ImageContent>
        </ImageContainer>
        <TextContainer>
          <MachineNameContainer>
            {data?.product?.modelName && data.product.modelName.length > 15
              ? `${data.product.modelName.substring(0, 15)}...`
              : data?.product?.modelName || 'N/A'}
          </MachineNameContainer>
          <MachineInfo>
            <PowerIcon />
            {data?.product?.power ? `${data?.product?.power} kw` : 'N/A'} |{' '}
            <HashRateIcon />
            {data?.product?.hashRate
              ? `${data?.product?.hashRate} TH/s`
              : 'N/A'}
          </MachineInfo>
          <MachinePrice>{`$ ${data?.product?.askPrice}`}</MachinePrice>
        </TextContainer>
      </MachineContainer>
    ),
    bidPrice: (
      <BidMemberAmountContainer>
        <MachinePrice className="bid-amount-class">
          {data?.counters.length
            ? `$${data?.counters.length === 1 ? data?.counters[0]?.bidPrice : getLastElement(data.counters, 'odd')?.bidPrice}`
            : 'N/A'}
        </MachinePrice>
        <AmountPercentage className="upper-price-class">
          {getBidAmountPercent(
            data?.product?.askPrice,
            data?.counters.length === 1
              ? data?.counters[0]?.bidPrice
              : getLastElement(data.counters, 'odd')?.bidPrice
          )}
          {getBidDirectionArrow(
            data?.product?.askPrice,
            data?.counters.length === 1
              ? data?.counters[0]?.bidPrice
              : getLastElement(data.counters, 'odd')?.bidPrice
          ) ? (
            getBidDirectionUpwardArrow(
              data?.product?.askPrice,
              data?.counters.length === 1
                ? data?.counters[0]?.bidPrice
                : getLastElement(data.counters, 'odd')?.bidPrice
            ) ? (
              <div className="upper-price">
                <UpDirectionMark />
              </div>
            ) : (
              <div className="upper-price">
                <DownDirectionMark />
              </div>
            )
          ) : (
            ' '
          )}
        </AmountPercentage>
      </BidMemberAmountContainer>
    ),
    counterPrice: (
      <MachinePrice className="counter-price-class">
        {getLastElement(data.counters, 'even')?.bidPrice
          ? `$${getLastElement(data.counters, 'even')?.bidPrice}`
          : '-'}
      </MachinePrice>
    ),
    action: (
      <ActionContainer>
        {data?.auctionStatus === 'Pending' &&
          !(data.counters.at(-1)?.bidUser === userData.data?.id) && (
            <AssignButtonContainer className="navbutton-assign">
              <Button
                type="button"
                variant="outline"
                label=""
                onClick={() => memberDetailsData.acceptBidClick(data)}
                disable={data.publisher._id !== userData.data?.id}
                style={{ lineHeight: 'none' }}
              >
                <p>Assign Now</p>
              </Button>
            </AssignButtonContainer>
          )}
        <ActionButton
          open={memberDetailsData.open}
          setAnchorEl={memberDetailsData.setAnchorEl}
          anchorEl={memberDetailsData.anchorEl}
          disabled={false}
          actionButtonData={memberDetailsData.actionButtonData}
          handleClose={memberDetailsData.handleClose}
          setData={() => memberDetailsData.setSelectedBidData(data)}
        />
      </ActionContainer>
    )
  }))
}

export const biddingColumns = [
  { id: 'machine', label: 'Machine Model' },
  { id: 'bidPrice', label: 'Bid Amount' },
  { id: 'counterPrice', label: 'Counter Amount' },
  { id: 'action', label: 'Actions' }
]
