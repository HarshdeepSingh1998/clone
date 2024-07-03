import { useState } from 'react'
import Link from 'next/link'
import useMobileNavbar from '@/utils/Customhooks/useMobileNavbar'
import { MobileNavbarInterface } from '../types'
import { SideBarDataInterface } from '@/components/AuthNavbar/types'
import {
  MobileNavbarContainer,
  NavbarContent,
  ItemContent,
  TextContainer,
  EditProfileContainer,
  ChangePasswordContainer,
  LogoutContainer,
  TermsAndConditionsContainer
} from '@/styles/Components/AuthNavbar/MobileNavbar'
const MobileNavbar = ({
  userRole,
  handleLogoutClick: logout,
  handleEditClick,
  handleChangePassword,
  setMenuSliderOpen,
  setPdfUrl,
  setOpenPdfViewer
}: MobileNavbarInterface) => {
  const [sideBarData, setSideBarData] = useState<SideBarDataInterface[]>([])
  const {
    selectedIndex,
    handleItemClick,
    openPdfView,
    handleLogoutClick,
    handleEditClickUser,
    handleChangePasswordUse
  } = useMobileNavbar(
    logout,
    handleEditClick,
    handleChangePassword,
    userRole,
    setSideBarData,
    setMenuSliderOpen,
    setPdfUrl,
    setOpenPdfViewer
  )
  return (
    <>
      <MobileNavbarContainer className="dashboard-responsive">
        <NavbarContent>
          {sideBarData?.map((section, i) => (
            <div key={i}>
              {section.data.map((item, i) => (
                <Link href={item.link ? item.link : '/user'} key={i}>
                  <ItemContent
                    key={item.id}
                    onClick={() => handleItemClick(i)}
                    isSelected={selectedIndex === i}
                  >
                    {item.icon}
                    <TextContainer>{item.title}</TextContainer>
                  </ItemContent>
                </Link>
              ))}
            </div>
          ))}
        </NavbarContent>
        {userRole === 'user' && (
          <>
            <EditProfileContainer
              style={{ padding: '5px', color: ' #64718c' }}
              onClick={() => handleEditClickUser()}
            >
              Edit Your Profile
            </EditProfileContainer>
            <ChangePasswordContainer
              style={{ color: ' #64718c' }}
              onClick={() => handleChangePasswordUse()}
            >
              Change Password
            </ChangePasswordContainer>
          </>
        )}
        <LogoutContainer onClick={() => handleLogoutClick()}>
          Logout
        </LogoutContainer>
      </MobileNavbarContainer>
      {userRole === 'user' && (
        <TermsAndConditionsContainer
          onClick={() =>
            openPdfView(
              'https://marketplace-miningauction-node-staging.thewitslab.com/api/getFileAccess/contract-2121444-1718269819761.pdf'
            )
          }
        >
          Terms and Conditions
        </TermsAndConditionsContainer>
      )}
    </>
  )
}

export default MobileNavbar
