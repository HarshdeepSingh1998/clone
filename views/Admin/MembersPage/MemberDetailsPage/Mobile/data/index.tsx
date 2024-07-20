import Image from 'next/image'
import { Tooltip } from '@mui/material'
import { MemberDetailsDataInterface } from '@/views/Admin/MembersPage/MemberDetailsPage/Mobile/types'
import { getBidAmountPercent } from '@/utils/HelperFunctions/GetBidAmountPercent'
import { getLastElement } from '@/utils/HelperFunctions/GetLastElement'
import { getBidDirectionArrow } from '@/utils/HelperFunctions/GetBidDirectionArrow'
import { getBidDirectionUpwardArrow } from '@/utils/HelperFunctions/GetBidDirectionUpwardArrrow'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { BiddingList } from '@/utils/ApiTypes/BiddingList'
import ActionButton from '@/components/ActionButton'
import Button from '@/components/Button'
import Bid from 'assets/images/images/bid.png'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import DownDirectionMark from '@/assets/images/svg/DownDirectionMark'
import UpDirectionMark from '@/assets/images/svg/UpwardArrow'
import {
  CheckboxContainer,
  MachineContainer,
  ImageContainer,
  TitleContainer,
  MachineNameContainer,
  ProductDescriptionContainer,
  DescriptionContainer,
  DepositAmountContainer,
  TextContainer,
  MachineInfo,
  ActionContainer,
  AssignButtonContainer,
  AmountPercentage,
  BidMemberAmountContainer,
  MachinePrice
} from '@/styles/Views/Admin/MembersPage/MemberDetails/Mobile/Data'

export type TableData = {
  machine: JSX.Element
  contract: JSX.Element
  serial: JSX.Element
  deposit: JSX.Element
  setup: JSX.Element
  status: JSX.Element
}

export type BidTableData = {
  machine: JSX.Element
  action: JSX.Element
  bid: JSX.Element
  counter: JSX.Element
}

export const biddingColumns = [
  {
    id: 'machine',
    label: ({ biddingListData }: { biddingListData: BiddingList }) => (
      <MachineContainer className="sales-mobile-machine">
        <ImageContainer>
          <Image
            src={biddingListData?.product.images[0] || Bid}
            width={50}
            alt="machine-Id"
            height={50}
          />
        </ImageContainer>
        <TextContainer>
          <MachineNameContainer>
            {biddingListData?.product?.modelName &&
            biddingListData.product.modelName.length > 15
              ? `${biddingListData.product.modelName.substring(0, 15)}...`
              : biddingListData?.product?.modelName || 'N/A'}
          </MachineNameContainer>
          <MachineInfo>
            <PowerIcon />
            {biddingListData?.product?.power
              ? `${biddingListData?.product?.power} kw`
              : 'N/A'}
            | <HashRateIcon />
            {biddingListData?.product?.hashRate
              ? `${biddingListData?.product?.hashRate} TH/s`
              : 'N/A'}
          </MachineInfo>
          <MachinePrice>{`$ ${biddingListData?.product?.askPrice}`}</MachinePrice>
        </TextContainer>
      </MachineContainer>
    )
  },
  {
    id: 'action',
    label: ({
      biddingListData,
      memberDetailsData
    }: {
      biddingListData: BiddingList
      memberDetailsData: MemberDetailsDataInterface
    }) => (
      <ActionContainer>
        {biddingListData?.auctionStatus === 'Pending' &&
          !(
            biddingListData.counters.at(-1)?.bidUser ===
            memberDetailsData.userData?.data?.id
          ) && (
            <AssignButtonContainer className="navbutton-assign">
              <Button
                type="button"
                variant="outline"
                label=""
                onClick={() =>
                  memberDetailsData.acceptBidClick(biddingListData)
                }
                disable={
                  biddingListData.publisher._id !==
                  memberDetailsData.userData.data?.id
                }
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
          setData={() => memberDetailsData.setSelectedBidData(biddingListData)}
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
    machine: <></>,
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

export const columns = [
  {
    id: 'machine',
    label: ({ memberDetailData }: { memberDetailData: ProductList }) => (
      <CheckboxContainer>
        <MachineContainer className="sales-mobile-machine">
          <ImageContainer className="member-image">
            {memberDetailData?.images?.length > 0 ? (
              <Image
                src={memberDetailData?.images[0]}
                alt="hello"
                width={51}
                height={56}
              />
            ) : (
              <Image src={Bid} alt="hello" width={51} height={56} />
            )}
          </ImageContainer>
          {memberDetailData?.modelName ? (
            <TitleContainer>
              <Tooltip title={memberDetailData?.modelName} placement="top-end">
                <MachineNameContainer>
                  {memberDetailData?.modelName &&
                  memberDetailData?.modelName.length > 20
                    ? `${memberDetailData?.modelName?.substring(0, 20)}...`
                    : `${memberDetailData?.modelName}` || 'N/A'}
                </MachineNameContainer>
              </Tooltip>
              <ProductDescriptionContainer>
                <PowerIcon /> {memberDetailData?.power} kW | <HashRateIcon />
                {memberDetailData?.hashRate} TH/s
              </ProductDescriptionContainer>
            </TitleContainer>
          ) : (
            <span style={{ color: 'red' }}>Product might be deleted</span>
          )}
        </MachineContainer>
      </CheckboxContainer>
    )
  },
  { id: 'contract', label: 'Contract ID' },
  {
    id: 'serial',
    label: ({ memberDetailData }: { memberDetailData: ProductList }) =>
      memberDetailData?.lotId ? `Lot` : `Serial Number`
  },
  { id: 'deposit', label: 'Deposit Fee' },
  { id: 'setup', label: 'Setup Fee' },
  { id: 'status', label: 'Status' }
]

export const generateTableData = (
  memberDetailData: ProductList[] | undefined
): TableData[] => {
  return (memberDetailData || [])?.map(data => ({
    machine: <></>,
    contract: (
      <DescriptionContainer className="mobile-responsive">
        {data?.contract?.contractId || '-'}
      </DescriptionContainer>
    ),
    serial: (
      <DescriptionContainer className="mobile-responsive">
        {data?.lotId ? data?.lotId : data?.serialNumber}
      </DescriptionContainer>
    ),
    deposit: (
      <DescriptionContainer className="mobile-responsive">
        <DepositAmountContainer>
          {data?.contract?.depositPrice
            ? `$${data.contract.depositPrice}`
            : 'N/A'}
        </DepositAmountContainer>
      </DescriptionContainer>
    ),
    setup: (
      <DescriptionContainer className="mobile-responsive">
        <DepositAmountContainer>
          {data?.contract?.setupPrice ? `$${data.contract.setupPrice}` : 'N/A'}
        </DepositAmountContainer>
      </DescriptionContainer>
    ),
    status: (
      <DescriptionContainer className="mobile-responsive">
        {data?.status ? (
          <DepositAmountContainer>
            {data?.status === 'UnPublished' ? 'In Inventory' : 'In Marketplace'}
          </DepositAmountContainer>
        ) : (
          '-'
        )}
      </DescriptionContainer>
    )
  }))
}
