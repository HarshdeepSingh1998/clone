import { faqData } from '@/utils/LandingPageContent/Faq'
import { membershipData } from '@/utils/LandingPageContent/Membership'
import Layout from '@/components/Layout'
import FormView from '@/views/ContactPage/FormView'
import FaqView from '@/views/LandingPage/FaqView'
import MembershipView from '@/views/LandingPage/MembershipView'

const Contact = () => {
  return (
    <Layout
      background="radial-gradient(
        79.14% 79.14% at 11% 98%,
        /* Set background position to center */ #512709 -58.18%,
        #000513 53.58%
      );"
    >
      <FormView />
      <FaqView faqData={faqData} />
      <MembershipView membershipData={membershipData} />
    </Layout>
  )
}

export default Contact
