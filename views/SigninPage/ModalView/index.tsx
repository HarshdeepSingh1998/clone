import FanAnimation from '@/components/FanAnimation'
import SigninModal from 'views/SigninPage/ModalView/SigninModal'
import Footer from 'views/SigninPage/ModalView/Footer'
import {
  ModalContainer,
  ModalMainContainer
} from '@/styles/Views/SigninPage/Modal'

const ModalView = () => {
  return (
    <ModalContainer>
      <ModalMainContainer className="signup-class">
        <FanAnimation />
        <SigninModal />
        <FanAnimation />
      </ModalMainContainer>
      <Footer />
    </ModalContainer>
  )
}

export default ModalView
