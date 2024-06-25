import React, { useRef } from 'react'
import { bannerData } from '@/utils/LandingPageContent/Banner'
import { serviceData } from '@/utils/LandingPageContent/ServiceData'
import { buyAndHostData } from '@/utils/LandingPageContent/BuyAndHost'
import { featuresData } from '@/utils/LandingPageContent/Features'
import { minerHostingData } from '@/utils/LandingPageContent/MinerHosting'
import { minerSellerData } from '@/utils/LandingPageContent/MinerSeller'
import { faqData } from '@/utils/LandingPageContent/Faq'
import { membershipData } from '@/utils/LandingPageContent/Membership'
import Layout from '@/components/Layout'
import BannerSection from 'views/LandingPage/BannerSection/index'
import ServiceSection from '@/views/LandingPage/ServiceSection'
import MiningAccount from '@/views/LandingPage/MiningAccount'
import WhyUsSection from '@/views/LandingPage/WhyUsSection'
import SellerSection from '@/views/LandingPage/SellerSection'
import MinerHostingSection from '@/views/LandingPage/MinerHostingSection'
import FaqSection from '@/views/LandingPage/FaqSection'
import ShopRigsSection from '@/views/LandingPage/ShopRigs'

const Home = () => {
  const minerHostingRef = useRef<HTMLDivElement>(null)

  /**
   * @description This method is to scroll to the pricing section in the home page
   */
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
      <div>Hi</div>
      {/* <BannerSection onSeePricingClick={scrollToMinerHosting} />
      <FAQSection faqData={faqData}/>
      <ServiceSection serviceData={serviceData} />
      <ShopRigsSection shopRigData={shopRigData} />
      <PlaceBidSection placeBidData={placeBidData} />
      <WhyUsSection whyUsData={whyUsData} />
      <div ref={minerHostingRef}>
        <MinerHostingSection miningHostData={miningHostData} />
      </div>

      <SellerSection />
      <FaqSection faqData={faqDataHomePage} />
      <FAQSection faqData={accordionData} />
      <MiningAccount /> */}
    </Layout>
  )
}

export default Home
