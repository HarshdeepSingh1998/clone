import useTermsandCondtionsData from '@/utils/Customhooks/useTermsAndCondtionsData'
import Loader from '@/components/Loader'
import ModalView from '@/views/User/TermsAndConditionsPage/ModalView'

const TermsandConditions = () => {
  const termsandConditionsData = useTermsandCondtionsData()

  return (
    <>
      <Loader isLoading={termsandConditionsData.isLoading} />
      <ModalView termsandConditionsData={termsandConditionsData} />
    </>
  )
}

export default TermsandConditions
