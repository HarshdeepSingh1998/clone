import Tooltip from '@mui/material/Tooltip'
import ActionButton from '@/components/ActionButton'
import PdfIcon from '@/assets/images/svg/PdfIcon'
import { ContractList } from '@/utils/ApiTypes/ContractList'
import { Dispatch, SetStateAction } from 'react'

export const generateTableData = (
  contractList: ContractList[] | undefined,
  open: boolean,
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>,
  anchorEl: HTMLElement | null,
  actionButtonData: any,
  handleClose: () => void,
  setContractDetails: Dispatch<SetStateAction<ContractList | undefined>>
) => {
  return (contractList || []).map(contract => ({
    contractId: (
      <Tooltip title={contract?.contractId}>
        <div>
          {contract.contractId && contract?.contractId.length > 8
            ? `${contract?.contractId?.substring(0, 8)}...`
            : contract?.contractId || 'N/A'}
        </div>
      </Tooltip>
    ),
    expirationDate: (
      <Tooltip title={contract?.expirationDate}>
        <div>
          {contract?.expirationDate && contract?.expirationDate?.length > 10
            ? `${contract?.expirationDate?.substring(0, 10)}...`
            : contract?.expirationDate || 'N/A'}
        </div>
      </Tooltip>
    ),
    location: (
      <Tooltip title={contract?.location}>
        <div>
          {contract?.location && contract?.location?.length > 5
            ? `${contract?.location?.substring(0, 5)}...`
            : contract?.location || 'N/A'}
        </div>
      </Tooltip>
    ),
    hostRate: (
      <Tooltip title={contract.hostRate}>
        <div>
          {contract.hostRate && contract.hostRate.toString().length > 5
            ? `$${contract?.hostRate}.../kWH`
            : `$${contract?.hostRate}/kWH` || 'N/A'}
        </div>
      </Tooltip>
    ),
    depositPrice: (
      <Tooltip title={contract?.depositPrice}>
        <div>
          {contract?.depositPrice &&
          contract?.depositPrice?.toString().length > 5
            ? `$${contract?.depositPrice}...`
            : `$${contract?.depositPrice}` || 'N/A'}
        </div>
      </Tooltip>
    ),
    setupPrice: (
      <Tooltip title={contract?.setupPrice}>
        <div>
          {contract?.setupPrice && contract?.setupPrice?.toString().length > 5
            ? `$${contract?.setupPrice}...`
            : `$${contract?.setupPrice}` || 'N/A'}
        </div>
      </Tooltip>
    ),
    document: contract.document ? <PdfIcon /> : '-',
    action: (
      <ActionButton
        open={open}
        setAnchorEl={setAnchorEl}
        anchorEl={anchorEl}
        disabled={contract.isAssignedToProduct ? true : false}
        actionButtonData={actionButtonData}
        handleClose={handleClose}
        setData={() => setContractDetails(contract)}
      />
    )
  }))
}

export const columns = [
  { id: 'contractId', label: 'Contract ID' },
  { id: 'expirationDate', label: 'Expiration Date' },
  { id: 'location', label: 'Location' },
  { id: 'hostRate', label: 'Hosting Rate' },
  { id: 'depositPrice', label: 'Deposit Fees' },
  { id: 'setupPrice', label: 'Setup Fees' },
  {
    id: 'document',
    label: 'Attachment'
  },
  {
    id: 'action',
    label: 'Action'
  }
]
