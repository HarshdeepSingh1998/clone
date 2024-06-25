import React from 'react'
import Link from 'next/link'
import Layout from 'components/Layout'
import {
  PageNotFoundContainer,
  PageNotFoundDescription,
  PageNotFoundHeader,
  PageNotFoundLink
} from '@/styles/Pages/404'

const NotFoundPage: React.FC = () => {
  return (
    <Layout
      background="radial-gradient(
      79.14% 79.14% at 11% 98%,
      /* Set background position to center */ #512709 -58.18%,
      #000513 53.58%
    );"
    >
      <PageNotFoundContainer>
        <PageNotFoundHeader>404 - Page Not Found</PageNotFoundHeader>
        <PageNotFoundDescription>
          Sorry, the page you are looking for does not exist.
        </PageNotFoundDescription>
        <Link href="/">
          <PageNotFoundLink
            style={{
              color: '#111211',
              textDecoration: 'underline',
              paddingBottom: '2rem'
            }}
          >
            Go back to the home page
          </PageNotFoundLink>
        </Link>
      </PageNotFoundContainer>
    </Layout>
  )
}

export default NotFoundPage
