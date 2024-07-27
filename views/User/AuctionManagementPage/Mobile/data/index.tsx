import Image from 'next/image'
import { Tooltip } from '@mui/material'
import { BiddingList } from '@/utils/ApiTypes/BiddingList'
import { getLastElement } from '@/utils/HelperFunctions/GetLastElement'
import { getBidAmountPercent } from '@/utils/HelperFunctions/GetBidAmountPercent'
import { getBidDirectionArrow } from '@/utils/HelperFunctions/GetBidDirectionArrow'
import { getBidDirectionUpwardArrow } from '@/utils/HelperFunctions/GetBidDirectionUpwardArrrow'
import { getRejectedBidUser } from '@/utils/HelperFunctions/GetRejectedBidUser'
import { endDate } from '@/utils/HelperFunctions/AuctionEndDate'
import ActionButton from '@/components/ActionButton'
import { AuctionManagementDataInterface } from 'views/User/AuctionManagementPage/Mobile/types'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import DownDirectionMark from '@/assets/images/svg/DownDirectionMark'
import UpDirectionMark from '@/assets/images/svg/UpwardArrow'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import {
  MachineContainer,
  ModalNameContainer,
  MachineInfoContainer,
  ActionContainer,
  AskPriceContainer,
  AmountPercentageContainer,
  BidAmountContainer,
  MachinePriceContainer,
  AuctionEndDateContainer,
  BidderContactNumber,
  BidderContainer,
  BidderContent,
  ImageContainer,
  CounterContainer
} from '@/styles/Views/User/AuctionManagementPage/Mobile/Data'

export type TableData = {
  machine: JSX.Element
  askprice: JSX.Element
  bid: JSX.Element
  counter: JSX.Element
  ending: JSX.Element
}

export type CurrentTableData = {
  machine: JSX.Element
  askprice: JSX.Element
  bid: JSX.Element
  counter: JSX.Element
  ending: JSX.Element
  member: JSX.Element
}

export type RejectedTableData = {
  machine: JSX.Element
  publish: JSX.Element
  bid: JSX.Element
  reject: JSX.Element
}

export const rejectedColumns = [
  {
    id: 'machine',
    label: ({ auctionData }: { auctionData: BiddingList }) => (
      <MachineContainer style={{ padding: '0' }}>
        <ModalNameContainer className="mobile-machine-modal-text">
          <Tooltip title={auctionData?.product?.modelName} placement="top-end">
            <ModalNameContainer className="mobile-machine-modal">
              {auctionData?.product?.modelName &&
              auctionData?.product?.modelName.length > 15
                ? `${auctionData?.product?.modelName?.substring(0, 15)}...`
                : `${auctionData?.product?.modelName}` || 'N/A'}
            </ModalNameContainer>
          </Tooltip>
          <ModalNameContainer>
            <div>
              {auctionData?.product?.lotId ? (
                <div style={{ display: 'flex', gap: '10px' }}>
                  {`QTY: ${auctionData?.product?.quantity}`}{' '}
                  <div>{auctionData?.product?.lotId}</div>
                </div>
              ) : (
                <Tooltip
                  title={auctionData?.product?.serialNumber}
                  placement="top-end"
                >
                  <div className="mobile-sn">
                    {auctionData?.product?.serialNumber &&
                    auctionData?.product?.serialNumber.length > 10
                      ? `SN: ${auctionData?.product?.serialNumber?.substring(0, 10)}...`
                      : `SN: ${auctionData?.product?.serialNumber}` || 'N/A'}
                  </div>
                </Tooltip>
              )}
            </div>
          </ModalNameContainer>

          <MachineInfoContainer>
            <PowerIcon />
            {auctionData?.product?.power
              ? `${auctionData?.product?.power} kW`
              : 'N/A'}
            | <HashRateIcon />
            {auctionData?.product?.hashRate
              ? `${auctionData?.product?.hashRate} TH/s`
              : 'N/A'}
          </MachineInfoContainer>
        </ModalNameContainer>
      </MachineContainer>
    )
  },
  { id: 'publish', label: 'Published By' },
  { id: 'bid', label: 'Bidder' },
  { id: 'reject', label: 'Rejected By' }
]

export const generateRejectedTableData = (
  auctionManagementData: AuctionManagementDataInterface,
  biddingList: BiddingList[] | undefined
): RejectedTableData[] => {
  return (biddingList || [])?.map(data => ({
    machine: (
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
    )
  }))
}

export const columns = [
  {
    id: 'machine',
    label: ({
      auctionData,
      auctionManagementData
    }: {
      auctionData: BiddingList
      auctionManagementData: AuctionManagementDataInterface
    }) => (
      <MachineContainer
        onClick={() =>
          auctionManagementData.handleClickTable(auctionData?.product?._id)
        }
        style={{ padding: '0' }}
      >
        <ModalNameContainer className="mobile-machine-modal-text">
          <Tooltip title={auctionData?.product?.modelName} placement="top-end">
            <ModalNameContainer className="mobile-machine-modal">
              {auctionData?.product?.modelName &&
              auctionData?.product?.modelName.length > 15
                ? `${auctionData?.product?.modelName?.substring(0, 15)}...`
                : `${auctionData?.product?.modelName}` || 'N/A'}
            </ModalNameContainer>
          </Tooltip>
          <ModalNameContainer>
            <div>
              {auctionData?.product?.lotId ? (
                <div style={{ display: 'flex', gap: '10px' }}>
                  {`QTY: ${auctionData?.product?.quantity}`}{' '}
                  <div>{auctionData?.product?.lotId}</div>
                </div>
              ) : (
                <Tooltip
                  title={auctionData?.product?.serialNumber}
                  placement="top-end"
                >
                  <div className="mobile-sn">
                    {auctionData?.product?.serialNumber &&
                    auctionData?.product?.serialNumber.length > 10
                      ? `SN: ${auctionData?.product?.serialNumber?.substring(0, 10)}...`
                      : `SN: ${auctionData?.product?.serialNumber}` || 'N/A'}
                  </div>
                </Tooltip>
              )}
            </div>
          </ModalNameContainer>

          <MachineInfoContainer>
            <PowerIcon />
            {auctionData?.product?.power
              ? `${auctionData?.product?.power} kW`
              : 'N/A'}
            | <HashRateIcon />
            {auctionData?.product?.hashRate
              ? `${auctionData?.product?.hashRate} TH/s`
              : 'N/A'}
          </MachineInfoContainer>
        </ModalNameContainer>
      </MachineContainer>
    )
  },
  { id: 'askprice', label: 'Price' },
  { id: 'bid', label: 'My Offer' },
  { id: 'counter', label: 'Counter Offer' },
  { id: 'ending', label: 'Ending In' }
  //   { id: 'member', label: 'Members' }
]

export const generateTableData = (
  auctionManagementData: AuctionManagementDataInterface,
  biddingList: BiddingList[] | undefined
): TableData[] => {
  return (biddingList || [])?.map(data => ({
    machine: (
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
        {/* <AmountPercentageContainer>
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
        </AmountPercentageContainer> */}
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
    )
    // member: (
    //   <>
    //     <ImageContainer className="customer">
    //       <Image
    //         src={data?.bidder?.profileImage || DEFAULT_PROFILE_URL}
    //         alt="customer"
    //         width={50}
    //         height={50}
    //       />
    //     </ImageContainer>
    //     <BidderContainer>
    //       <BidderContent>
    //         {data?.bidder?.name ||
    //           data?.bidder?.username ||
    //           data?.bidder?.email}
    //       </BidderContent>
    //       <BidderContactNumber>{data?.bidder?.phone}</BidderContactNumber>
    //     </BidderContainer>
    //   </>
    // )
  }))
}

export const currentColumns = [
  {
    id: 'machine',
    label: ({
      auctionData,
      auctionManagementData
    }: {
      auctionData: BiddingList
      auctionManagementData: AuctionManagementDataInterface
    }) => (
      <MachineContainer
        onClick={() =>
          auctionManagementData.handleClickTable(auctionData?.product?._id)
        }
        style={{ padding: '0' }}
      >
        <ModalNameContainer className="mobile-machine-modal-text">
          <Tooltip title={auctionData?.product?.modelName} placement="top-end">
            <ModalNameContainer className="mobile-machine-modal">
              {auctionData?.product?.modelName &&
              auctionData?.product?.modelName.length > 15
                ? `${auctionData?.product?.modelName?.substring(0, 15)}...`
                : `${auctionData?.product?.modelName}` || 'N/A'}
            </ModalNameContainer>
          </Tooltip>
          <ModalNameContainer>
            <div>
              {auctionData?.product?.lotId ? (
                <div style={{ display: 'flex', gap: '10px' }}>
                  {`QTY: ${auctionData?.product?.quantity}`}{' '}
                  <div>{auctionData?.product?.lotId}</div>
                </div>
              ) : (
                <Tooltip
                  title={auctionData?.product?.serialNumber}
                  placement="top-end"
                >
                  <div className="mobile-sn">
                    {auctionData?.product?.serialNumber &&
                    auctionData?.product?.serialNumber.length > 10
                      ? `SN: ${auctionData?.product?.serialNumber?.substring(0, 10)}...`
                      : `SN: ${auctionData?.product?.serialNumber}` || 'N/A'}
                  </div>
                </Tooltip>
              )}
            </div>
          </ModalNameContainer>

          <MachineInfoContainer>
            <PowerIcon />
            {auctionData?.product?.power
              ? `${auctionData?.product?.power} kW`
              : 'N/A'}
            | <HashRateIcon />
            {auctionData?.product?.hashRate
              ? `${auctionData?.product?.hashRate} TH/s`
              : 'N/A'}
          </MachineInfoContainer>
        </ModalNameContainer>
      </MachineContainer>
    )
  },
  { id: 'askprice', label: 'Price' },
  { id: 'bid', label: 'My Offer' },
  { id: 'counter', label: 'Counter Offer' },
  { id: 'ending', label: 'Ending In' },
  { id: 'member', label: 'Members' }
]

export const generateCurrentTableData = (
  auctionManagementData: AuctionManagementDataInterface,
  biddingList: BiddingList[] | undefined
): TableData[] => {
  return (biddingList || [])?.map(data => ({
    machine: (
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
    )
  }))
}
