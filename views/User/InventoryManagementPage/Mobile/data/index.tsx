/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Tooltip from '@mui/material/Tooltip'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { SalesListInterface } from '@/utils/ApiTypes/getSales'
import { UserInventoryDataInterface } from 'views/User/InventoryManagementPage/Mobile/types'
import Bid from 'assets/images/images/bid.png'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import {
  CheckboxContainer,
  ImageContainer,
  ImageContent,
  TitleContainer,
  TitleContent,
  DetailContainer,
  ContractContainer,
  LotContainer,
  MachineContainer
} from '@/styles/Views/User/InventoryManagementPage/Mobile/Data'

export type TableData = {
  machine: JSX.Element | false
  contract: JSX.Element | false
  lot: JSX.Element | false
}

export const columns = [
  {
    id: 'machine',
    label: ({
      inventoryData,
      productList
    }: {
      inventoryData: UserInventoryDataInterface
      productList: ProductList | SalesListInterface
    }) => (
      <MachineContainer>
        <CheckboxContainer>
          {inventoryData.status === 'UnPublished' && (
            <div
              style={{
                opacity: '1',
                pointerEvents: 'auto'
              }}
            >
              <input
                type="checkbox"
                checked={inventoryData.selectedProductIds.includes(
                  productList._id
                )}
                onChange={() =>
                  inventoryData.handleCheckboxToggle(productList._id)
                }
              />
            </div>
          )}
        </CheckboxContainer>
        {inventoryData?.status != 'Pending' &&
        inventoryData.isProductList(productList) ? (
          <ImageContainer>
            <ImageContent>
              {productList?.images?.length > 0 ? (
                <Image
                  src={productList?.images[0]}
                  alt="hello"
                  width={65}
                  height={56}
                />
              ) : (
                <Image src={Bid} alt="hello" width={65} height={56} />
              )}
            </ImageContent>
            <TitleContainer>
              <TitleContent>{productList?.modelName}</TitleContent>
              <DetailContainer>{`SN: ${productList?.serialNumber}`}</DetailContainer>
              <DetailContainer>
                <PowerIcon /> {productList?.power} kW | <HashRateIcon />
                {productList?.hashRate} TH/s
              </DetailContainer>
            </TitleContainer>
          </ImageContainer>
        ) : (
          inventoryData.isSalesList(productList) && (
            <ImageContainer>
              <ImageContent>
                {productList?.assignedProduct?.images?.length > 0 ? (
                  <Image
                    src={`${productList?.assignedProduct?.images[0]}`}
                    alt="hello"
                    width={65}
                    height={56}
                  />
                ) : (
                  <Image src={Bid} alt="hello" width={65} height={56} />
                )}
              </ImageContent>
              <TitleContainer>
                <TitleContent>
                  {productList?.assignedProduct?.modelName}
                </TitleContent>
                <DetailContainer>
                  {`SN: ${productList?.assignedProduct?.serialNumber}`}
                </DetailContainer>
                <DetailContainer>
                  <PowerIcon /> {productList?.assignedProduct?.power} kW |{' '}
                  <HashRateIcon />
                  {productList?.assignedProduct?.hashRate} TH/s
                </DetailContainer>
              </TitleContainer>
            </ImageContainer>
          )
        )}
      </MachineContainer>
    )
  },
  { id: 'contract', label: 'Contract ID' },
  { id: 'lot', label: 'Lot ID' }
]

export const generateTableData = (
  inventoryData: UserInventoryDataInterface
): TableData[] => {
  return (inventoryData.productList || []).map(data => ({
    machine: <></>,
    contract:
      inventoryData?.status != 'Pending' &&
      inventoryData.isProductList(data) ? (
        <Tooltip title={data?.contract?.contractId} placement="top-end">
          <ContractContainer className="transcation-id-class">
            {data?.contract
              ? Number(data?.contract?.contractId) > 8
                ? `${data?.contract?.contractId?.substring(0, 8)}...`
                : `${data?.contract?.contractId}` || 'N/A'
              : '-'}
          </ContractContainer>
        </Tooltip>
      ) : (
        inventoryData.isSalesList(data) && (
          <Tooltip
            title={data?.assignedProduct?.contract?.contractId}
            placement="top-end"
          >
            <ContractContainer className="transcation-id-class">
              {data?.assignedProduct?.contract
                ? Number(data?.assignedProduct?.contract?.contractId) > 8
                  ? `${data?.assignedProduct?.contract?.contractId?.substring(0, 8)}...`
                  : `${data?.assignedProduct?.contract?.contractId}` || 'N/A'
                : '-'}
            </ContractContainer>
          </Tooltip>
        )
      ),
    lot:
      inventoryData?.status != 'Pending' &&
      inventoryData.isProductList(data) ? (
        <LotContainer>
          {data?.lotId &&
          data?.lotCreatedBy === inventoryData.userData?.data?.id ? (
            data?.lotId
          ) : (
            <div>-</div>
          )}
        </LotContainer>
      ) : (
        inventoryData.isSalesList(data) && (
          <LotContainer>
            {data?.assignedProduct?.lotId ? (
              data?.assignedProduct?.lotId
            ) : (
              <div>-</div>
            )}
          </LotContainer>
        )
      )
  }))
}
