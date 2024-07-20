import Image from 'next/image'
import { AuctionManagementMachineDetailInterface } from 'views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Desktop/types'
import { UserState } from '@/store/userSlice'
import { getLastElement } from '@/utils/HelperFunctions/GetLastElement'
import { getBidAmountPercent } from '@/utils/HelperFunctions/GetBidAmountPercent'
import { getBidDirectionArrow } from '@/utils/HelperFunctions/GetBidDirectionArrow'
import { getBidDirectionUpwardArrow } from '@/utils/HelperFunctions/GetBidDirectionUpwardArrrow'
import { BiddingList } from '@/utils/ApiTypes/BiddingList'
import Button from '@/components/Button'
import ActionButton from '@/components/ActionButton'
import Avatar from '@/assets/images/images/Avatar.png'
import UpDirectionMark from '@/assets/images/svg/UpwardArrow'
import DownDirectionMark from '@/assets/images/svg/DownDirectionMark'
import {
  MemberContainer,
  ImageContainer,
  BidderContainer,
  BidderContent,
  BidderContactNumber,
  AmountPercentage,
  BidMemberAmountContainer,
  MachinePrice,
  ActionContainer,
  AssignButtonContainer
} from '@/styles/Views/Admin/AuctionManagementPage/AuctionManagementMachineDetail/Desktop/Data'

export const biddingColumns = [
  { id: 'member', label: 'Member' },
  { id: 'bidPrice', label: 'Bid Amount' },
  { id: 'counterPrice', label: 'Counter Amount' },
  { id: 'action', label: 'Actions' }
]

export const generateBiddingTableData = (
  biddingList: BiddingList[] | undefined,
  userData: UserState,
  auctionManagementData: AuctionManagementMachineDetailInterface
) => {
  return (biddingList || [])?.map(data => ({
    member: (
      <MemberContainer
        onClick={() =>
          auctionManagementData.handleClickMember(data?.bidder._id)
        }
      >
        <ImageContainer>
          <Image
            src={data?.bidder?.profileImage || Avatar}
            alt="customer"
            width={100}
            height={100}
            style={{ borderRadius: '50px' }}
          />
        </ImageContainer>
        <BidderContainer className="customer-profile">
          <BidderContent>
            {data?.bidder?.name ||
              data?.bidder?.username ||
              data?.bidder?.email}
          </BidderContent>
          <BidderContactNumber> {data?.bidder?.phone}</BidderContactNumber>
        </BidderContainer>
      </MemberContainer>
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
                onClick={() => auctionManagementData.acceptBidClick(data)}
                disable={data.publisher._id !== userData.data?.id}
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
          setData={() => auctionManagementData.setSelectedBidData(data)}
        />
      </ActionContainer>
    )
  }))
}
