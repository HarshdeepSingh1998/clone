import Image from 'next/image'
import Tooltip from '@mui/material/Tooltip'
import Bid from 'assets/images/images/bid.png'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/Mobile/types'
import {
  MachineContainer,
  CheckboxContainer,
  ImageContainer,
  TitleContainer,
  ModalDescriptionContainer,
  DetailContainer,
  ContractContainer,
  AssignContainer,
  CustomerNameContainer,
  ContactNumberContainer,
  ImageContent,
  TitleContent
} from '@/styles/Views/Admin/InventorymanagementPage/Mobile/Data'
import ActionButton from '@/components/ActionButton'
import { ProductList } from '@/utils/ApiTypes/ProductList'

export type TableData = {
  machine: JSX.Element
  contract: JSX.Element
  lot: JSX.Element
  assign: JSX.Element
}

export const columns = [
  {
    id: 'machine',
    label: ({
      inventoryData,
      productList
    }: {
      inventoryData: UseInventoryProductInterface
      productList: ProductList
    }) => (
      <MachineContainer>
        <CheckboxContainer>
          {inventoryData.status === 'UnPublished' && (
            <div>
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
        <>
          <ImageContainer
            onClick={() => {
              inventoryData.handleViewProduct(productList._id)
            }}
          >
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
                  <ModalDescriptionContainer className="mobile-machine-modal serial-number">
                    {productList?.serialNumber &&
                    productList?.serialNumber?.length > 10
                      ? `SN: ${productList?.serialNumber?.substring(0, 10)}...`
                      : `SN: ${productList?.serialNumber}` || 'N/A'}
                  </ModalDescriptionContainer>
                </Tooltip>
              </DetailContainer>
              <DetailContainer className="detail-container">
                <PowerIcon /> {productList?.power} kW | <HashRateIcon />
                {productList?.hashRate} TH/s
              </DetailContainer>
            </TitleContainer>
          </ImageContainer>
        </>
      </MachineContainer>
    )
  },
  { id: 'contract', label: 'Contract ID' },
  { id: 'lot', label: 'Lot ID' },
  { id: 'assign', label: 'Assigned To' }
]

export const generateTableData = (
  inventoryData: UseInventoryProductInterface
) => {
  return (inventoryData.productList || []).map(data => ({
    machine: (
      <ActionButton
        open={inventoryData.open}
        setAnchorEl={inventoryData.setAnchorEl}
        anchorEl={inventoryData.anchorEl}
        actionButtonData={inventoryData.actionButtonData}
        handleClose={inventoryData.handleClose}
        setData={() => {
          inventoryData.setProductDetails(data)
          inventoryData.setStatusProduct(data.status)
        }}
        disabled={
          (data?.transaction && data?.status === 'Published') ||
          (inventoryData.selectedProductIds.includes(data._id) &&
            inventoryData.selectedProductIds?.length >= 2)
        }
      />
    ),
    contract: (
      <ContractContainer>
        <Tooltip title={data?.contract?.contractId} placement="top-end">
          <div className="mobile-sn">
            {data?.contract
              ? data?.contract?.contractId?.length > 10
                ? `${data?.contract?.contractId?.substring(0, 10)}...`
                : `${data?.contract?.contractId}` || 'N/A'
              : '-'}
          </div>
        </Tooltip>
      </ContractContainer>
    ),
    lot: (
      <ContractContainer>
        {data?.lotId ? data?.lotId : <div>-</div>}
      </ContractContainer>
    ),
    assign: (
      <>
        {data?.user && data?.transaction ? (
          <>
            <AssignContainer>
              <ImageContainer className="customer">
                <Image
                  src={
                    data?.user?.profileImage
                      ? data?.user?.profileImage
                      : DEFAULT_PROFILE_URL
                  }
                  alt="customer"
                  width={48}
                  height={48}
                  style={{ borderRadius: '50px' }}
                />
              </ImageContainer>
              <TitleContainer className="customer-profile">
                <CustomerNameContainer>
                  {data?.user?.name ? (
                    <CustomerNameContainer>
                      {data?.user?.name}
                    </CustomerNameContainer>
                  ) : (
                    <CustomerNameContainer>
                      {data?.user?.email?.split('@')[0]}
                    </CustomerNameContainer>
                  )}
                </CustomerNameContainer>
                <ContactNumberContainer>
                  {data?.user?.phone ? (
                    <ContactNumberContainer>
                      {data?.user?.phone}
                    </ContactNumberContainer>
                  ) : (
                    <ContactNumberContainer>{''}</ContactNumberContainer>
                  )}
                </ContactNumberContainer>
              </TitleContainer>
            </AssignContainer>
          </>
        ) : (
          <AssignContainer>-</AssignContainer>
        )}
      </>
    )
  }))
}
