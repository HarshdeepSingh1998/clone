import FanAnimation from '@/components/FanAnimation'
import SignupModal from 'views/SignupPage/ModalView/SignupModal'
import {
  ModalContainer,
  ModalMainContainer
} from '@/styles/Views/SignupPage/Modal'

const ModalView = () => {
  return (
    <ModalContainer>
      <ModalMainContainer className="signup-class">
        <FanAnimation />
        <SignupModal />

        <FanAnimation />
      </ModalMainContainer>
      {/* <Footer /> */}
    </ModalContainer>
  )
}

export default ModalView
