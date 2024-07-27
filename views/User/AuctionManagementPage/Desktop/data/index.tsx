import Image from 'next/image'
import { BiddingList } from '@/utils/ApiTypes/BiddingList'
import { getLastElement } from '@/utils/HelperFunctions/GetLastElement'
import { getBidAmountPercent } from '@/utils/HelperFunctions/GetBidAmountPercent'
import { getBidDirectionArrow } from '@/utils/HelperFunctions/GetBidDirectionArrow'
import { getBidDirectionUpwardArrow } from '@/utils/HelperFunctions/GetBidDirectionUpwardArrrow'
import { getRejectedBidUser } from '@/utils/HelperFunctions/GetRejectedBidUser'
import { endDate } from '@/utils/HelperFunctions/AuctionEndDate'
import ActionButton from '@/components/ActionButton'
import { AuctionManagementDataInterface } from 'views/User/AuctionManagementPage/Desktop/types'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import DownDirectionMark from '@/assets/images/svg/DownDirectionMark'
import UpDirectionMark from '@/assets/images/svg/UpwardArrow'
import {
  MachineContainer,
  TextContainer,
  MachineNameContainer,
  ModalNameContainer,
  MachineInfoContainer,
  AskPriceContainer,
  BidAmountContainer,
  MachinePriceContainer,
  AmountPercentageContainer,
  AuctionEndDateContainer,
  ImageContainer,
  BidderContactNumber,
  BidderContainer,
  BidderContent,
  ActionContainer,
  RejectedMachineContainer,
  CounterContainer
} from '@/styles/Views/User/AuctionManagementPage/Desktop/Data'

export const columns = [
  { id: 'machine', label: 'Machine Model' },
  { id: 'askprice', label: 'Price' },
  { id: 'bid', label: 'My Offer' },
  { id: 'counter', label: 'Counter Offer' },
  { id: 'ending', label: 'Ending In' },
  { id: 'action', label: 'Actions' }
]

export const rejectedColumns = [
  { id: 'machine', label: 'Machine Model' },
  { id: 'publish', label: 'Published By' },
  { id: 'bid', label: 'Bidder' },
  { id: 'reject', label: 'Rejected By' },
  { id: 'action', label: 'Actions' }
]

export const currentColumns = [
  { id: 'machine', label: 'Machine Model' },
  { id: 'askprice', label: 'Ask Price' },
  { id: 'bid', label: 'Bid Amount' },
  { id: 'counter', label: 'My Offer' },
  { id: 'ending', label: 'Ending In' },
  { id: 'member', label: 'Members' },
  { id: 'action', label: 'Actions' }
]

export const generateRejectedTableData = (
  biddingList: BiddingList[] | undefined,
  auctionManagementData: AuctionManagementDataInterface
) => {
  return (biddingList || [])?.map(data => ({
    machine: (
      <RejectedMachineContainer>
        <MachineNameContainer>
          {data?.product?.modelName && data.product.modelName.length > 15
            ? `${data.product.modelName.substring(0, 15)}...`
            : data?.product?.modelName || (
                <span style={{ color: 'red' }}>Product might be deleted</span>
              )}
        </MachineNameContainer>
        <ModalNameContainer>
          <ModalNameContainer>
            {data?.product ? (
              <div>
                {data?.product?.lotId ? (
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {`QTY: ${data?.product?.quantity}`}{' '}
                    <div>{data?.product?.lotId}</div>
                  </div>
                ) : (
                  <div>{`SN: ${data?.product?.serialNumber}`}</div>
                )}
              </div>
            ) : (
              ''
            )}
          </ModalNameContainer>
        </ModalNameContainer>
        {data?.product ? (
          <MachineInfoContainer>
            <PowerIcon />
            {data?.product?.power ? `${data?.product?.power} kW` : 'N/A'} |
            <HashRateIcon />
            {data?.product?.hashRate
              ? `${data?.product?.hashRate} TH/s`
              : 'N/A'}
          </MachineInfoContainer>
        ) : (
          ''
        )}
      </RejectedMachineContainer>
    ),
    publish: (
      <ActionContainer>
        <ImageContainer className="customer">
          <Image
            src={data?.publisher?.profileImage || DEFAULT_PROFILE_URL}
            alt="customer"
            width={50}
            height={50}
            style={{ borderRadius: '50px' }}
          />
        </ImageContainer>
        <BidderContainer className="customer-profile">
          <BidderContent>
            {data?.publisher?.name ||
              data?.publisher?.username ||
              data?.publisher?.email}
          </BidderContent>
          <BidderContactNumber>{data?.publisher?.phone}</BidderContactNumber>
        </BidderContainer>
      </ActionContainer>
    ),
    bid: (
      <ActionContainer>
        <ImageContainer className="customer">
          <Image
            src={data?.bidder?.profileImage || DEFAULT_PROFILE_URL}
            alt="customer"
            width={50}
            height={50}
            style={{ borderRadius: '50px' }}
          />
        </ImageContainer>
        <BidderContainer className="customer-profile">
          <BidderContent>
            {data?.bidder?.name ||
              data?.bidder?.username ||
              data?.bidder?.email}
          </BidderContent>
          <BidderContactNumber>{data?.bidder?.phone}</BidderContactNumber>
        </BidderContainer>
      </ActionContainer>
    ),
    reject: (
      <ActionContainer>
        <ImageContainer className="customer" style={{ marginLeft: '0px' }}>
          <Image
            src={getRejectedBidUser(data)?.profileImage || DEFAULT_PROFILE_URL}
            alt="customer"
            width={50}
            height={50}
            style={{ borderRadius: '50px' }}
          />
        </ImageContainer>
        <BidderContainer className="customer-profile">
          <BidderContent>
            {getRejectedBidUser(data)?.name ||
              getRejectedBidUser(data)?.username ||
              getRejectedBidUser(data)?.email}
          </BidderContent>
          <BidderContactNumber>
            {getRejectedBidUser(data)?.phone}
          </BidderContactNumber>
        </BidderContainer>
      </ActionContainer>
    ),
    action: (
      <ActionContainer>
        <ActionButton
          open={auctionManagementData.open}
          setAnchorEl={auctionManagementData.setAnchorEl}
          anchorEl={auctionManagementData.anchorEl}
          disabled={false}
          actionButtonData={auctionManagementData.actionButtonData}
          handleClose={auctionManagementData.handleClose}
          setData={() => auctionManagementData.setSelectedBidData(data)}
        />
      </ActionContainer>
    )
  }))
}

export const generateTableData = (
  auctionManagementData: AuctionManagementDataInterface,
  biddingList: BiddingList[] | undefined
) => {
  return (biddingList || [])?.map(data => ({
    machine: (
      <MachineContainer
        onClick={() =>
          auctionManagementData.handleClickTable(data?.product?._id)
        }
        style={{ padding: '0' }}
      >
        <TextContainer>
          <MachineNameContainer>
            {data?.product?.modelName && data.product.modelName.length > 15
              ? `${data.product.modelName.substring(0, 15)}...`
              : data?.product?.modelName || 'N/A'}
          </MachineNameContainer>
          <ModalNameContainer>
            <div>
              {data?.product?.lotId ? (
                <div style={{ display: 'flex', gap: '10px' }}>
                  {`QTY: ${data?.product?.quantity}`}
                  <div>{data?.product?.lotId}</div>
                </div>
              ) : (
                <div>{`SN: ${data?.product?.serialNumber}`}</div>
              )}
            </div>
          </ModalNameContainer>
          <MachineInfoContainer>
            <PowerIcon />
            {data?.product?.power ? `${data?.product?.power} kW` : 'N/A'} |
            <HashRateIcon />
            {data?.product?.hashRate
              ? `${data?.product?.hashRate} TH/s`
              : 'N/A'}
          </MachineInfoContainer>
        </TextContainer>
      </MachineContainer>
    ),
    askprice: (
      <AskPriceContainer className="counter-price">
        {data?.product?.askPrice ? `$${data?.product?.askPrice}` : 'N/A'}
      </AskPriceContainer>
    ),
    bid: (
      <BidAmountContainer>
        <MachinePriceContainer className="bid-amount-class">
          {data?.counters.length
            ? `$${data?.counters.length === 1 ? data?.counters[0]?.bidPrice : getLastElement(data.counters, 'odd')?.bidPrice}`
            : 'N/A'}
        </MachinePriceContainer>
      </BidAmountContainer>
    ),
    counter: (
      <CounterContainer>
        <MachinePriceContainer style={{ color: '#ffff' }}>
          {getLastElement(data.counters, 'even')?.bidPrice
            ? `$${getLastElement(data.counters, 'even')?.bidPrice}`
            : '-'}
        </MachinePriceContainer>
        <div>
          {getLastElement(data.counters, 'even')?.bidPrice ? (
            <AmountPercentageContainer className="upper-price-class">
              {getBidAmountPercent(
                getLastElement(data.counters, 'even')?.bidPrice,
                getLastElement(data.counters, 'odd')?.bidPrice
              )}
              {getBidDirectionArrow(
                getLastElement(data.counters, 'even')?.bidPrice,
                getLastElement(data.counters, 'odd')?.bidPrice
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
            </AmountPercentageContainer>
          ) : (
            <div style={{ display: 'flex' }}>{`-`}</div>
          )}
        </div>
      </CounterContainer>
    ),
    ending: (
      <AuctionEndDateContainer className="time-remaining">
        {endDate(data?.product?.auctionEndDate)}
      </AuctionEndDateContainer>
    ),
    action: (
      <ActionContainer>
        <ActionButton
          open={auctionManagementData.open}
          setAnchorEl={auctionManagementData.setAnchorEl}
          anchorEl={auctionManagementData.anchorEl}
          disabled={false}
          actionButtonData={auctionManagementData.actionButtonData}
          handleClose={auctionManagementData.handleClose}
          setData={() => auctionManagementData.setSelectedBidData(data)}
        />
      </ActionContainer>
    )
  }))
}

export const generateCurrentTableData = (
  auctionManagementData: AuctionManagementDataInterface,
  biddingList: BiddingList[] | undefined,
  screenType: string
) => {
  return (biddingList || [])?.map(data => ({
    machine: (
      <MachineContainer
        onClick={() =>
          auctionManagementData.handleClickTable(data?.product?._id)
        }
        style={{ padding: '0' }}
      >
        <TextContainer>
          <MachineNameContainer>
            {data?.product?.modelName && data.product.modelName.length > 15
              ? `${data.product.modelName.substring(0, 15)}...`
              : data?.product?.modelName || 'N/A'}
          </MachineNameContainer>
          <ModalNameContainer>
            <div>
              {data?.product?.lotId ? (
                <div style={{ display: 'flex', gap: '10px' }}>
                  {`QTY: ${data?.product?.quantity}`}
                  <div>{data?.product?.lotId}</div>
                </div>
              ) : (
                <div>{`SN: ${data?.product?.serialNumber}`}</div>
              )}
            </div>
          </ModalNameContainer>

          <MachineInfoContainer>
            <PowerIcon />
            {data?.product?.power ? `${data?.product?.power} kW` : 'N/A'} |
            <HashRateIcon />
            {data?.product?.hashRate
              ? `${data?.product?.hashRate} TH/s`
              : 'N/A'}
          </MachineInfoContainer>
        </TextContainer>
      </MachineContainer>
    ),
    askprice: (
      <AskPriceContainer className="counter-price">
        {data?.product?.askPrice ? `$${data?.product?.askPrice}` : 'N/A'}
      </AskPriceContainer>
    ),
    bid: (
      <BidAmountContainer>
        <MachinePriceContainer className="bid-amount-class">
          {data?.counters.length
            ? `$${data?.counters.length === 1 ? data?.counters[0]?.bidPrice : getLastElement(data.counters, 'odd')?.bidPrice}`
            : 'N/A'}
        </MachinePriceContainer>
        <AmountPercentageContainer>
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
        </AmountPercentageContainer>
      </BidAmountContainer>
    ),
    counter: (
      <MachinePriceContainer style={{ color: '#ffff' }}>
        {getLastElement(data.counters, 'even')?.bidPrice
          ? `$${getLastElement(data.counters, 'even')?.bidPrice}`
          : '-'}
      </MachinePriceContainer>
    ),
    ending: (
      <AuctionEndDateContainer className="time-remaining">
        {endDate(data?.product?.auctionEndDate)}
      </AuctionEndDateContainer>
    ),
    member: (
      <>
        {screenType === 'tab' ? (
          <ImageContainer className="customer">
            <Image
              src={data?.bidder?.profileImage || DEFAULT_PROFILE_URL}
              alt="customer"
              width={50}
              height={50}
            />
          </ImageContainer>
        ) : (
          <>
            <ImageContainer className="customer">
              <Image
                src={data?.bidder?.profileImage || DEFAULT_PROFILE_URL}
                alt="customer"
                width={50}
                height={50}
              />
            </ImageContainer>
            <BidderContainer>
              <BidderContent>
                {data?.bidder?.name ||
                  data?.bidder?.username ||
                  data?.bidder?.email}
              </BidderContent>
              <BidderContactNumber>{data?.bidder?.phone}</BidderContactNumber>
            </BidderContainer>
          </>
        )}
      </>
    ),
    action: (
      <ActionContainer>
        <ActionButton
          open={auctionManagementData.open}
          setAnchorEl={auctionManagementData.setAnchorEl}
          anchorEl={auctionManagementData.anchorEl}
          disabled={false}
          actionButtonData={auctionManagementData.actionButtonData}
          handleClose={auctionManagementData.handleClose}
          setData={() => auctionManagementData.setSelectedBidData(data)}
        />
      </ActionContainer>
    )
  }))
}
