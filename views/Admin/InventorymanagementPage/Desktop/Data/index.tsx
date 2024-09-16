import Image from 'next/image'
import { Tooltip } from '@mui/material'
import ActionButton from '@/components/ActionButton'
import { UseInventoryProductInterface } from 'views/Admin/InventorymanagementPage/Desktop/types'
import FilterIcon from '@/assets/images/svg/TableFilterIcon'
import AssignFilterIcon from '@/assets/images/svg/TableFilterIcon'
import PowerIcon from '@/assets/images/svg/PowerIcon'
import HashRateIcon from '@/assets/images/svg/HashRateIcon'
import DummyMachine from '@/assets/images/images/machine-bid.png'
import DEFAULT_PROFILE_URL from 'assets/images/images/default-profile.png'
import {
  ImageContainer,
  TextContainer,
  MachineNameContainer,
  DetailContainer,
  ModalNameContainer,
  AdditionalDetailContainer,
  ContractContainer,
  Container,
  CheckboxContainer,
  AssignContainer,
  CustomerNameContainer,
  ContactNumberContainer
} from 'styles/Views/Admin/InventorymanagementPage/Desktop/data'

export const columns = [
  {
    id: 'checkbox',
    label: '',
    renderHeader: (inventoryData?: UseInventoryProductInterface) =>
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
  { id: 'machinemodel', label: 'Machine Model' },
  {
    id: 'contract',
    label: 'Contract ID',
    icon: (inventoryData?: UseInventoryProductInterface) => {
      if (inventoryData?.status !== 'UnPublished') {
        return <FilterIcon />
      } else return null
    }
  },
  { id: 'lot', label: 'Lot ID' },
  {
    id: 'assign',
    label: 'Assigned To',
    icon: (inventoryData?: UseInventoryProductInterface) => {
      if (inventoryData?.status !== 'UnPublished') {
        return <AssignFilterIcon />
      } else return null
    }
  },
  { id: 'actions', label: 'Actions' }
]

export const generateTableData = (
  inventoryData: UseInventoryProductInterface,
  screenType: string
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
    machinemodel: (
      <ContractContainer
        onClick={() => {
          inventoryData.handleViewProduct(data._id)
        }}
        className="modal-description"
      >
        <ImageContainer>
          <Image
            src={data?.images[0] || DummyMachine}
            alt="machine-Id"
            width={100}
            height={100}
          />
        </ImageContainer>
        <TextContainer>
          <Tooltip title={data?.modelName} placement="top-end">
            <MachineNameContainer>
              {data?.modelName && data?.modelName.length > 15
                ? `${data?.modelName?.substring(0, 15)}...`
                : `${data?.modelName}` || 'N/A'}
            </MachineNameContainer>
          </Tooltip>
          <DetailContainer>
            <ModalNameContainer>
              <Tooltip title={data?.serialNumber} placement="top-end">
                <div>
                  {data?.serialNumber && data?.serialNumber.length > 10
                    ? `SN: ${data?.serialNumber?.substring(0, 10)}...`
                    : `SN: ${data?.serialNumber}` || 'N/A'}
                </div>
              </Tooltip>
            </ModalNameContainer>
          </DetailContainer>
          <AdditionalDetailContainer>
            <ContractContainer>
              <Container>
                <PowerIcon />
                {data?.power} kW
              </Container>
              <Container>
                <HashRateIcon />
                {data?.hashRate} TH/s
              </Container>
            </ContractContainer>
          </AdditionalDetailContainer>
        </TextContainer>
      </ContractContainer>
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
            {screenType === 'tab' ? (
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
            ) : (
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
                <TextContainer className="customer-profile">
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
                </TextContainer>
              </AssignContainer>
            )}
          </>
        ) : (
          <AssignContainer>-</AssignContainer>
        )}
      </>
    ),
    actions: (
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
    )
  }))
}
