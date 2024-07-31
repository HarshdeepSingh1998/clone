import Image from 'next/image'
import { Tooltip } from '@mui/material'
import { UserInventoryDataInterface } from 'views/User/InventoryManagementPage/Desktop/types'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import Bid from 'assets/images/images/bid.png'
import Publish from 'assets/images/svg/Publish'
import Revoke from 'assets/images/svg/Revoke'
import Preview from 'assets/images/images/preview.png'
import {
  DetailContainer,
  ImageContainer,
  ImageContent,
  TitleContainer,
  TitleContent,
  ContractContainer,
  LotContainer,
  ActionContainer,
  CheckboxContainer,
  ModalDescriptionContainer
} from '@/styles/Views/User/InventoryManagementPage/Desktop/Data'

export const columns = [
  {
    id: 'checkbox',
    label: '',
    renderHeader: (inventoryData?: UserInventoryDataInterface) =>
      inventoryData?.status === 'UnPublished' ? (
        <CheckboxContainer>
          <div>
            <input
              type="checkbox"
              checked={inventoryData.selectAll}
              onChange={inventoryData.handleHeaderCheckboxToggle}
            />
          </div>
        </CheckboxContainer>
      ) : (
        <></>
      )
  },
  { id: 'machine', label: 'Machine Model' },
  { id: 'contract', label: 'Contract ID' },
  { id: 'lot', label: 'Lot ID' },
  { id: 'action', label: 'Actions' }
]

export const generateTableData = (
  inventoryData: UserInventoryDataInterface
) => {
  return (inventoryData.productList || []).map(data => ({
    checkbox: (
      <CheckboxContainer>
        {inventoryData.status === 'UnPublished' && (
          <div>
            <input
              type="checkbox"
              checked={inventoryData.selectedProductIds.includes(data._id)}
              onChange={() => inventoryData.handleCheckboxToggle(data._id)}
            />
          </div>
        )}
      </CheckboxContainer>
    ),
    machine:
      inventoryData?.status != 'Pending' &&
      inventoryData.isProductList(data) ? (
        <ImageContainer>
          <ImageContent>
            {data?.images?.length > 0 ? (
              <Image src={data?.images[0]} alt="hello" width={65} height={56} />
            ) : (
              <Image src={Bid} alt="hello" width={65} height={56} />
            )}
          </ImageContent>
          <TitleContainer>
            <TitleContent>
              <Tooltip title={data?.modelName} placement="top-end">
                <ModalDescriptionContainer className="mobile-machine-modal">
                  {data?.modelName && data?.modelName?.length > 15
                    ? `${data?.modelName?.substring(0, 15)}...`
                    : `${data?.modelName}` || 'N/A'}
                </ModalDescriptionContainer>
              </Tooltip>
            </TitleContent>
            <DetailContainer>
              <Tooltip title={data?.serialNumber} placement="top-end">
                <ModalDescriptionContainer className="mobile-machine-modal">
                  {data?.serialNumber && data?.serialNumber?.length > 10
                    ? `SN: ${data?.serialNumber?.substring(0, 10)}...`
                    : `SN: ${data?.serialNumber}` || 'N/A'}
                </ModalDescriptionContainer>
              </Tooltip>
            </DetailContainer>
            <DetailContainer>
              <PowerIcon /> {data?.power} kW | <HashRateIcon />
              {data?.hashRate} TH/s
            </DetailContainer>
          </TitleContainer>
        </ImageContainer>
      ) : (
        inventoryData.isSalesList(data) && (
          <ImageContainer>
            <ImageContent>
              {data?.assignedProduct?.images?.length > 0 ? (
                <Image
                  src={`${data?.assignedProduct?.images[0]}`}
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
                  title={data?.assignedProduct?.modelName}
                  placement="top-end"
                >
                  <ModalDescriptionContainer className="mobile-machine-modal">
                    {data?.assignedProduct?.modelName &&
                    data?.assignedProduct?.modelName?.length > 15
                      ? `${data?.assignedProduct?.modelName?.substring(0, 15)}...`
                      : `${data?.assignedProduct?.modelName}` || 'N/A'}
                  </ModalDescriptionContainer>
                </Tooltip>
              </TitleContent>
              <DetailContainer>
                <Tooltip
                  title={data?.assignedProduct?.serialNumber}
                  placement="top-end"
                >
                  <ModalDescriptionContainer className="mobile-machine-modal">
                    {data?.assignedProduct?.serialNumber &&
                    data?.assignedProduct?.serialNumber?.length > 10
                      ? `SN: ${data?.assignedProduct?.serialNumber?.substring(0, 10)}...`
                      : `SN: ${data?.assignedProduct?.serialNumber}` || 'N/A'}
                  </ModalDescriptionContainer>
                </Tooltip>
              </DetailContainer>
              <DetailContainer>
                <PowerIcon /> {data?.assignedProduct?.power} kW |{' '}
                <HashRateIcon />
                {data?.assignedProduct?.hashRate} TH/s
              </DetailContainer>
            </TitleContainer>
          </ImageContainer>
        )
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
      ),
    action:
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
          {' '}
          <div
            style={{
              opacity: '0.5',
              pointerEvents: 'none'
            }}
          >
            <Image src={Preview} alt="minus" />
          </div>
        </ActionContainer>
      )
  }))
}
