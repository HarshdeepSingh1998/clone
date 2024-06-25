import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div
        style={{
          textAlign: 'center',
          height: '250px',
          padding: '2rem',
          background: '#c3bfbf'
        }}
      >
        <h1 style={{ color: '#3c3535', padding: '2rem' }}>
          404 - Page Not Found
        </h1>
        <p style={{ color: '#555', padding: '2rem' }}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/">
          <p
            style={{
              color: '#111211',
              textDecoration: 'underline',
              paddingBottom: '2rem'
            }}
          >
            Go back to the home page
          </p>
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
