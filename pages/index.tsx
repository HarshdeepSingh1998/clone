import React, { useRef } from 'react'
import { bannerData } from 'utils/LandingPageContent/Banner'
import { serviceData } from 'utils/LandingPageContent/ServiceData'
import { buyAndHostData } from 'utils/LandingPageContent/BuyAndHost'
import { featuresData } from 'utils/LandingPageContent/Features'
import { minerHostingData } from 'utils/LandingPageContent/MinerHosting'
import { minerSellerData } from 'utils/LandingPageContent/MinerSeller'
import { faqData } from 'utils/LandingPageContent/Faq'
import { membershipData } from 'utils/LandingPageContent/Membership'
import Layout from 'components/Layout'
import BannerView from 'views/LandingPage/BannerView'
import ServiceView from 'views/LandingPage/ServiceView'
import BuyAndHostView from 'views/LandingPage/BuyAndHostView'
import FeatureView from 'views/LandingPage/FeatureView'
import MinerHostingView from 'views/LandingPage/MinerHostingView'
import MinerSellerView from 'views/LandingPage/MinerSellerView'
import MembershipView from 'views/LandingPage/MembershipView'
import FaqView from 'views/LandingPage/FaqView'

const Home = () => {
  const minerHostingRef = useRef<HTMLDivElement>(null)

  const scrollToMinerHosting = () => {
    if (minerHostingRef.current) {
      minerHostingRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <Layout
      background="radial-gradient(
        79.14% 79.14% at 11% 98%,
        /* Set background position to center */ #512709 -58.18%,
        #000513 53.58%
      );"
    >
      <BannerView
        onSeePricingClick={scrollToMinerHosting}
        bannerData={bannerData}
      />
      <ServiceView serviceData={serviceData} />
      <BuyAndHostView buyAndHostData={buyAndHostData} />
      <FeatureView featuresData={featuresData} />
      <div ref={minerHostingRef}>
        <MinerHostingView minerHostingData={minerHostingData} />
      </div>
      <MinerSellerView minerSellerData={minerSellerData} />
      <FaqView faqData={faqData} />
      <MembershipView membershipData={membershipData} />
    </Layout>
  )
}

export default Home
