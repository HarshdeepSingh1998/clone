import FormView from '@/views/ContactPage/FormView'
import Layout from '@/components/Layout'

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
      {/* <FaqSection faqData={faqDataHomePage}></FaqSection>
      <MiningAccount /> */}
    </Layout>
  )
}

export default Contact
