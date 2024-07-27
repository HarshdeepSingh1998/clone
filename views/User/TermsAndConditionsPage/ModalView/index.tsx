import { UseTermsAndConditionsDataType } from 'views/User/TermsAndConditionsPage/types'
import FanAnimation from '@/components/FanAnimation'
import Modal from 'views/User/TermsAndConditionsPage/ModalView/Modal'
import Footer from 'views/User/TermsAndConditionsPage/ModalView/Footer'
import {
  ModalContainer,
  ModalMainContainer
} from '@/styles/Views/User/TermsAndConditionsPage/ModalView'

const ModalView = ({
  termsandConditionsData
}: {
  termsandConditionsData: UseTermsAndConditionsDataType
}) => {
  return (
    <ModalContainer>
      <ModalMainContainer className="signup-class">
        <FanAnimation />
        <Modal termsandConditionsData={termsandConditionsData} />
        <FanAnimation />
      </ModalMainContainer>
      <Footer />
    </ModalContainer>
  )
}

export default ModalView
