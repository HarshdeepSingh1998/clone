import React from 'react'
import Link from 'next/link'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { navbarData } from '@/utils/LayoutContent/Navbar'
import { IProps } from 'components/NavBar/MobileNav/types'
import Button from '@/components/Button'
import {
  InnerContainer,
  MainContainer,
  NavTextContainer,
  NavButtonContainer,
  NavButtonStyle,
  NavButtonSignIn
} from '@/styles/Components/Navbar/Mobile'

const MobileView: React.FC<IProps> = () => {
  const { screenType } = useScreenType()

  return (
    <div>
      <MainContainer className="landing-nav">
        <InnerContainer>
          {navbarData.list.map(data => (
            <>
              <NavTextContainer>
                <Link href={data.href}>{data.title}</Link>
              </NavTextContainer>
            </>
          ))}
        </InnerContainer>
        {screenType === 'mobile' && (
          <NavButtonContainer>
            <NavButtonSignIn>
              <Link href={'/signin'}>
                <Button
                  type="button"
                  label={navbarData.loginButtonText}
                  padding={'15px 52px !important'}
                ></Button>
              </Link>
            </NavButtonSignIn>

            <NavButtonStyle>
              <Link href={'/signup'}>
                <Button
                  type="button"
                  variant="contained"
                  label={navbarData.getStartedButtonText}
                  padding={'15px 25px !important'}
                />
              </Link>
            </NavButtonStyle>
          </NavButtonContainer>
        )}
      </MainContainer>
    </div>
  )
}

export default MobileView
