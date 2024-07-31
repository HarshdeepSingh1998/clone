/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Tooltip from '@mui/material/Tooltip'
import { ProductList } from '@/utils/ApiTypes/ProductList'
import { SalesListInterface } from '@/utils/ApiTypes/getSales'
import { UserInventoryDataInterface } from 'views/User/InventoryManagementPage/Mobile/types'
import Bid from 'assets/images/images/bid.png'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import Publish from 'assets/images/svg/Publish'
import Revoke from 'assets/images/svg/Revoke'
import Preview from 'assets/images/images/preview.png'
import {
  CheckboxContainer,
  ImageContainer,
  ImageContent,
  TitleContainer,
  TitleContent,
  DetailContainer,
  ContractContainer,
  LotContainer,
  MachineContainer,
  ActionContainer,
  ModalDescriptionContainer
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
              <TitleContent>
                <Tooltip title={productList?.modelName} placement="top-end">
                  <ModalDescriptionContainer className="mobile-machine-modal">
                    {productList?.modelName &&
                    productList?.modelName?.length > 15
                      ? `${productList?.modelName?.substring(0, 15)}...`
                      : `${productList?.modelName}` || 'N/A'}
                  </ModalDescriptionContainer>
                </Tooltip>
              </TitleContent>
              <DetailContainer>
                <Tooltip title={productList?.serialNumber} placement="top-end">
                  <ModalDescriptionContainer className="mobile-machine-modal">
                    {productList?.serialNumber &&
                    productList?.serialNumber?.length > 10
                      ? `SN: ${productList?.serialNumber?.substring(0, 10)}...`
                      : `SN: ${productList?.serialNumber}` || 'N/A'}
                  </ModalDescriptionContainer>
                </Tooltip>
              </DetailContainer>
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
                  <Tooltip
                    title={productList?.assignedProduct?.modelName}
                    placement="top-end"
                  >
                    <ModalDescriptionContainer className="mobile-machine-modal">
                      {productList?.assignedProduct?.modelName &&
                      productList?.assignedProduct?.modelName?.length > 15
                        ? `${productList?.assignedProduct?.modelName?.substring(0, 15)}...`
                        : `${productList?.assignedProduct?.modelName}` || 'N/A'}
                    </ModalDescriptionContainer>
                  </Tooltip>
                </TitleContent>
                <DetailContainer>
                  <Tooltip
                    title={productList?.assignedProduct?.serialNumber}
                    placement="top-end"
                  >
                    <ModalDescriptionContainer className="mobile-machine-modal">
                      {productList?.assignedProduct?.serialNumber &&
                      productList?.assignedProduct?.serialNumber?.length > 10
                        ? `SN: ${productList?.assignedProduct?.serialNumber?.substring(0, 10)}...`
                        : `SN: ${productList?.assignedProduct?.serialNumber}` ||
                          'N/A'}
                    </ModalDescriptionContainer>
                  </Tooltip>
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
    machine:
      inventoryData?.status != 'Pending' &&
      inventoryData.isProductList(data) ? (
        <ActionContainer>
          {data.status === 'UnPublished' ? (
            <div
              onClick={() =>
                !(
                  inventoryData.selectedProductIds.includes(data._id) &&
                  inventoryData.selectedProductIds.length >= 2
                ) &&
                inventoryData.handlePublishButtonClick(data._id as string, data)
              }
              style={
                inventoryData.selectedProductIds.includes(data._id) &&
                inventoryData.selectedProductIds.length >= 2
                  ? { opacity: '0.5' }
                  : { opacity: '1' }
              }
            >
              <Publish />
            </div>
          ) : data.status === 'Published' ? (
            <div
              onClick={() =>
                inventoryData.handleRevokeButton(data._id as string, data)
              }
            >
              <Revoke />
            </div>
          ) : null}
        </ActionContainer>
      ) : (
        <ActionContainer>
          <div
            style={{
              opacity: '0.5',
              pointerEvents: 'none'
            }}
          >
            <Image src={Preview} alt="minus" />
          </div>
        </ActionContainer>
      ),
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
