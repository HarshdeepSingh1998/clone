import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useCustomSidebar from '@/utils/Customhooks/useSidebar'
import {
  SidebarInterface,
  SideBarDataInterface
} from 'components/Sidebar/types'
import TermsandCondition from 'components/Sidebar/TermsandCondition'
import ProjectLogo from 'assets/images/images/project-logo.png'
import {
  SidebarContainer,
  LogoContainer,
  SidebarContent,
  ItemContainer,
  TextContainer
} from '@/styles/Components/Sidebar'

const Sidebar = ({
  userRole,
  openPdfViewer,
  setOpenPdfViewer
}: SidebarInterface) => {
  const [sideBarData, setSideBarData] = useState<SideBarDataInterface[]>([])
  const { selectedIndex, pdfUrl, handleItemClick, openPdfView, closePdfModal } =
    useCustomSidebar(userRole, setOpenPdfViewer, setSideBarData)
  return (
    <SidebarContainer>
      <div>
        <LogoContainer>
          <Link href="/">
            <Image src={ProjectLogo} alt="Asic mining" />
          </Link>
        </LogoContainer>
        <SidebarContent>
          {sideBarData?.map((section, i) => (
            <div key={i}>
              {section.data.map((item, i) => (
                <Link href={item.link ? item.link : '/user'} key={i}>
                  <ItemContainer
                    key={item.id}
                    onClick={() => handleItemClick(i)}
                    isSelected={selectedIndex === i}
                  >
                    {item.icon}
                    <TextContainer>{item.title}</TextContainer>
                  </ItemContainer>
                </Link>
              ))}
            </div>
          ))}
        </SidebarContent>
      </div>

      {userRole === 'user' && (
        <TermsandCondition
          openPdfView={openPdfView}
          openPdfViewer={openPdfViewer}
          setOpenPdfViewer={setOpenPdfViewer}
          pdfUrl={pdfUrl}
          closePdfModal={closePdfModal}
        />
      )}
    </SidebarContainer>
  )
}

export default Sidebar
