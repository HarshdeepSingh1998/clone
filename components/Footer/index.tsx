import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useScreenType from '@/utils/Customhooks/useScreenType'
import { footerData } from '@/utils/LayoutContent/Footer'
import { FooterProps } from 'components/Footer/types'
import ProjectLogo from 'assets/images/images/project-logo.png'
import {
  AddressContainer,
  ListContainer,
  CompanyHeading,
  CompanyDetailContainer,
  CopyRightContainer,
  FirstCol,
  FooterContainer,
  Heading,
  HeadingWrap,
  MainFooterContainer,
  RightFooterContainer,
  SecWrap,
  SecondColumnContainer,
  PrimaryFooterContainer
} from 'styles/Components/Footer'

const Footer: React.FC<FooterProps> = ({ background = '#111527' }) => {
  const { screenType } = useScreenType()

  const { email, query } = footerData.address

  const queryParts = query.split(' Or ')

  return (
    <MainFooterContainer background={background}>
      <FooterContainer>
        <PrimaryFooterContainer>
          <AddressContainer>
            <Link href={'/'}>
              <Image src={ProjectLogo} alt={'project logo'} />
            </Link>
            <HeadingWrap>{footerData.address.heading}</HeadingWrap>
            <SecWrap>{footerData.address.street}</SecWrap>
            <SecWrap>
              {queryParts[0].replace(email, '')}
              <p style={{ textDecoration: 'none' }}>{email}</p> Or
              <p style={{ textDecoration: 'none' }}>{queryParts[1]}</p>
            </SecWrap>
          </AddressContainer>
          <CompanyDetailContainer>
            <FirstCol>
              <CompanyHeading>{footerData.company.heading}</CompanyHeading>
              <ListContainer>
                {footerData.company.list.map(data => (
                  <>
                    <li>
                      <Link href={data.href}>{data.title}</Link>
                    </li>
                  </>
                ))}
              </ListContainer>
            </FirstCol>
            <SecondColumnContainer>
              {screenType === 'mobile' || screenType === 'tab' ? (
                <>
                  <Heading>{footerData.followUs.legalText}</Heading>
                  <Heading>{footerData.followUs.serviceText}</Heading>
                  <Heading>{footerData.followUs.followUsText}</Heading>
                </>
              ) : (
                <>
                  <Heading>{footerData.followUs.followUsText}</Heading>
                  <ListContainer>
                    {footerData.followUs.steps.map(data => (
                      <>
                        <li>
                          <Link href={data.href}>{data.title}</Link>
                        </li>
                      </>
                    ))}
                  </ListContainer>
                </>
              )}
            </SecondColumnContainer>
          </CompanyDetailContainer>
        </PrimaryFooterContainer>
        <CopyRightContainer>
          <RightFooterContainer>
            {footerData.copyRightText}
          </RightFooterContainer>
        </CopyRightContainer>
      </FooterContainer>
    </MainFooterContainer>
  )
}

export default Footer
