import Image from 'next/image'
import { BiddingList } from '@/utils/ApiTypes/BiddingList'
import { getBidAmountPercent } from '@/utils/HelperFunctions/GetBidAmountPercent'
import { getBidDirectionArrow } from '@/utils/HelperFunctions/GetBidDirectionArrow'
import { getBidDirectionUpwardArrow } from '@/utils/HelperFunctions/GetBidDirectionUpwardArrrow'
import { getLastElement } from '@/utils/HelperFunctions/GetLastElement'
import { AuctionManagementMachineDetailInterface } from 'views/User/AuctionManagementPage/AuctionManagementMachineDetail/Mobile/types'
import ActionButton from '@/components/ActionButton'
import Button from 'components/Button'
import DownDirectionMark from '@/assets/images/svg/DownDirectionMark'
import Avatar from '@/assets/images/images/Avatar.png'
import UpDirectionMark from '@/assets/images/svg/UpwardArrow'
import {
  ActionContainer,
  AmountPercentage,
  AssignButtonContainer,
  BidMemberAmountContainer,
  BidderContactNumber,
  BidderContainer,
  BidderContent,
  ImageContainer,
  MachinePrice,
  MemberContainer
} from '@/styles/Views/User/AuctionManagementPage/AuctionManagementMachineDetail/Mobile/Data'

export type BidTableData = {
  member: JSX.Element
  action: JSX.Element
  bid: JSX.Element
  counter: JSX.Element
}

export const biddingColumns = [
  {
    id: 'member',
    label: ({
      biddingListData,
      auctionManagementData
    }: {
      biddingListData: BiddingList
      auctionManagementData: AuctionManagementMachineDetailInterface
    }) => (
      <MemberContainer
        onClick={() =>
          auctionManagementData.handleClickMember(biddingListData?.bidder._id)
        }
      >
        <ImageContainer>
          <Image
            src={biddingListData?.bidder?.profileImage || Avatar}
            alt="customer"
            width={100}
            height={100}
            style={{ borderRadius: '50px' }}
          />
        </ImageContainer>
        <BidderContainer className="customer-profile">
          <BidderContent>
            {biddingListData?.bidder?.name ||
              biddingListData?.bidder?.username ||
              biddingListData?.bidder?.email}
          </BidderContent>
          <BidderContactNumber>
            {biddingListData?.bidder?.phone}
          </BidderContactNumber>
        </BidderContainer>
      </MemberContainer>
    )
  },
  {
    id: 'action',
    label: ({
      biddingListData,
      auctionManagementData
    }: {
      biddingListData: BiddingList
      auctionManagementData: AuctionManagementMachineDetailInterface
    }) => (
      <ActionContainer>
        {biddingListData?.auctionStatus === 'Pending' &&
          !(
            biddingListData.counters.at(-1)?.bidUser ===
            auctionManagementData.userData?.data?.id
          ) && (
            <AssignButtonContainer className="navbutton-assign">
              <Button
                type="button"
                variant="outline"
                label=""
                onClick={() =>
                  auctionManagementData.acceptBidClick(biddingListData)
                }
                disable={
                  biddingListData.publisher._id !==
                  auctionManagementData.userData.data?.id
                }
                style={{ lineHeight: 'none' }}
              >
                <p>Assign Now</p>
              </Button>
            </AssignButtonContainer>
          )}
        <ActionButton
          open={auctionManagementData.open}
          setAnchorEl={auctionManagementData.setAnchorEl}
          anchorEl={auctionManagementData.anchorEl}
          disabled={false}
          actionButtonData={auctionManagementData.actionButtonData}
          handleClose={auctionManagementData.handleClose}
          setData={() =>
            auctionManagementData.setSelectedBidData(biddingListData)
          }
        />
      </ActionContainer>
    )
  },
  { id: 'bid', label: 'Bid Amount' },
  { id: 'counter', label: 'Counter Amount' }
]

export const generateBiddingTableData = (
  biddingList: BiddingList[] | undefined
): BidTableData[] => {
  return (biddingList || [])?.map(data => ({
    member: <></>,
    action: <></>,
    bid: (
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
    counter: (
      <MachinePrice className="counter-price-class">
        {getLastElement(data.counters, 'even')?.bidPrice
          ? `$${getLastElement(data.counters, 'even')?.bidPrice}`
          : '-'}
      </MachinePrice>
    )
  }))
}
