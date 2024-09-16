import { useState, useEffect } from 'react'
import { TermsandConditionInterface } from 'components/Sidebar/types'
import Modal from '@/components/Modal'
import PdfViewer from '@/components/PdfViewer'
import { TextContainer } from '@/styles/Components/Sidebar/TermsandCondition'

const TermsandCondition = ({
  openPdfView,
  openPdfViewer,
  setOpenPdfViewer,
  pdfUrl,
  closePdfModal
}: TermsandConditionInterface) => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <>
      <TextContainer>
        <span
          onClick={() =>
            openPdfView(
              'https://marketplace-miningauction-node-staging.thewitslab.com/api/getFileAccess/contract-2121444-1718269819761.pdf'
            )
          }
        >
          Terms and Conditions
        </span>
      </TextContainer>

      <Modal isOpen={openPdfViewer} hideModal={() => setOpenPdfViewer(false)}>
        <PdfViewer url={pdfUrl} closePdfModal={closePdfModal} />
      </Modal>
    </>
  )
}

export default TermsandCondition
