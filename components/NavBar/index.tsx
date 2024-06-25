import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Drawer } from '@mui/material'
import useScreenType from '@/utils/Customhooks/useScreenType'
import useMenuControl from '@/utils/Customhooks/useMenuControl'
import { navbarData } from '@/utils/LayoutContent/Navbar'
import Button from 'components/Button'
import MobileNav from 'components/NavBar/MobileNav'
import MenuIcon from '@/assets/images/svg/MenuIcon'
import CloseNavMenu from '@/assets/images/svg/CloseNavMenu'
import {
  NavbarHeader,
  NavTextContainer,
  NavItemsContainer,
  NavButtonContainer,
  NavButtonStyle,
  NavbarContainer,
  NavTextContentContainer,
  NavButtonSignIn,
  LogoMenuContainer,
  MobileMenuIconContainer,
  MobileRightSection
} from '@/styles/Components/Navbar'

interface NavbarProps {
  background?: string
}

const NavBar: React.FC<NavbarProps> = ({ background = '#000' }) => {
  const { screenType } = useScreenType()

  const { showMenu, setShowMenu, setStateFunc } = useMenuControl()

  const renderNavItems = () => (
    <NavItemsContainer>
      {navbarData.list.map(data => (
        <Link key={data.href} href={data.href}>
          {data.title}
        </Link>
      ))}
    </NavItemsContainer>
  )

  const renderNavButton = () => (
    <NavButtonContainer>
      {(screenType === 'tab' || screenType === 'desktop') && (
        <NavButtonSignIn>
          <Link href="/signin">
            <Button type="button" label={navbarData.loginButtonText} />
          </Link>
        </NavButtonSignIn>
      )}
      <NavButtonStyle className="mobile-nav">
        <Link href="/signup">
          <Button
            type="button"
            variant="contained"
            label={navbarData.getStartedButtonText}
          />
        </Link>
        <LogoMenuContainer>
          {(screenType === 'mobile' || screenType === 'tab') && (
            <MobileRightSection>
              <MobileMenuIconContainer onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <CloseNavMenu /> : <MenuIcon />}
              </MobileMenuIconContainer>
            </MobileRightSection>
          )}
        </LogoMenuContainer>
      </NavButtonStyle>
    </NavButtonContainer>
  )

  return (
    <NavbarHeader background={background}>
      <NavbarContainer>
        <NavTextContentContainer>
          <Link href="/">
            <Image src={navbarData.projectLogo} alt="project logo" />
          </Link>
          <NavTextContainer>
            {screenType === 'desktop' && renderNavItems()}
            {renderNavButton()}
          </NavTextContainer>
        </NavTextContentContainer>
      </NavbarContainer>
      <Drawer
        anchor="right"
        open={showMenu}
        onClose={() => setShowMenu(false)}
        sx={{ pt: 50, marginTop: '10vw', position: 'unset' }}
        PaperProps={{ sx: { width: '100%' } }}
      >
        <MobileNav setStateFunc={setStateFunc} />
      </Drawer>
    </NavbarHeader>
  )
}

export default NavBar
