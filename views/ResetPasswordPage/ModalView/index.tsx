import FanAnimation from '@/components/FanAnimation'
import ResetModal from 'views/ResetPasswordPage/ModalView/ResetModal'
import Footer from 'views/ResetPasswordPage/ModalView/Footer'
import {
  ModalContainer,
  ModalMainContainer
} from '@/styles/Views/ResetPasswordPage/Modal'

const ModalView = () => {
  return (
    <ModalContainer>
      <ModalMainContainer className="signup-class">
        <FanAnimation />
        <ResetModal />
        <FanAnimation />
      </ModalMainContainer>
      <Footer />
    </ModalContainer>
  )
}

export default ModalView
