import Image from 'next/image'
import { Tooltip } from '@mui/material'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import Bid from 'assets/images/images/bid.png'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import {
  ImageContainer,
  ImageContent,
  TitleContainer,
  TitleContent,
  DetailContainer,
  ContractContainer,
  PriceContainer
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
