/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Document, pdfjs, Page } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { useGetAsArraybuffer } from 'hooks/useGetPdf'
import {
  AddProductModalProps,
  OnLoadSuccessParams
} from '@/components/PdfViewer/types'
import CrossIcon from '@/assets/images/svg/CrossIcon'
import {
  PdfviewContainer,
  PdfviewContent,
  HeaderContainer,
  HeaderContent,
  BoxImage,
  PdfContainer
} from '@/styles/Components/PdfViewer'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PdfViewer: React.FC<AddProductModalProps> = ({ url, closePdfModal }) => {
  const [numPages, setNumPages] = useState<number>(0)
  const [pdfData, setPdfData] = useState<Blob | null>(null)

  const onDocumentLoadSuccess = ({ numPages }: OnLoadSuccessParams) => {
    setNumPages(numPages)
  }

  const { data: PDFArrayBuffer, refetch: refetchPDF } = useGetAsArraybuffer(
    'getPDF',
    url,
    { token: true }
  )

  useEffect(() => {
    refetchPDF()
  }, [refetchPDF])

  useEffect(() => {
    const intitialisePDFData = () => {
      const data = new Uint8Array(PDFArrayBuffer)
      const blob = new Blob([data], { type: 'application/pdf' })
      setPdfData(blob)
    }

    intitialisePDFData()
  }, [PDFArrayBuffer])

  const handleModalClose = () => {
    closePdfModal()
  }

  return (
    <PdfviewContainer>
      <PdfviewContent>
        <HeaderContainer>
          <HeaderContent>
            <BoxImage />
            PDF
          </HeaderContent>
          <span
            onClick={() => {
              handleModalClose()
            }}
          >
            <CrossIcon />
          </span>
        </HeaderContainer>
        <PdfContainer>
          {pdfData && (
            <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={650}
                />
              ))}
            </Document>
          )}
        </PdfContainer>
      </PdfviewContent>
    </PdfviewContainer>
  )
}

export default PdfViewer
