/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction } from 'react'

export interface SidebarInterface {
  userRole: string
  openPdfViewer: boolean
  setOpenPdfViewer: Dispatch<SetStateAction<boolean>>
}

export interface SideBarDataInterface {
  route: string
  data: {
    id: number
    restricted: boolean
    title: string
    icon: JSX.Element
    link: string
  }[]
}

export interface TermsandConditionInterface {
  openPdfView: (pdfURL: string) => void
  openPdfViewer: boolean
  setOpenPdfViewer: Dispatch<SetStateAction<boolean>>
  pdfUrl: string
  closePdfModal: () => void
}
