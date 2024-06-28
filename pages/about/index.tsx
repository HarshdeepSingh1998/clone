import { faqData } from '@/utils/LandingPageContent/Faq'
import { membershipData } from '@/utils/LandingPageContent/Membership'
import Layout from '@/components/Layout'
import HeaderView from '@/views/AboutPage/HeaderView'
import FounderView from '@/views/AboutPage/FounderView'
import MissionView from '@/views/AboutPage/MissionView'
import StoryView from '@/views/AboutPage/StoryView'
import FaqView from '@/views/LandingPage/FaqView'
import MembershipView from '@/views/LandingPage/MembershipView'

const AboutPage = () => {
  return (
    <Layout
      background="radial-gradient(
    79.14% 79.14% at 11% 98%,
    /* Set background position to center */ #512709 -58.18%,
    #000513 53.58%
  );"
    >
      <HeaderView />
      <FounderView />
      <MissionView />
      <StoryView />
      <FaqView faqData={faqData} />
      <MembershipView membershipData={membershipData} />
    </Layout>
  )
}

export default AboutPage
