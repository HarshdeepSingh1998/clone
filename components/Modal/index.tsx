import ReactModal from 'react-modal'
import { IModalProps } from 'components/Modal/types'

const Modal = ({ isOpen, children, className, hideModal }: IModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className={className}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      onRequestClose={hideModal}
    >
      <div>{children}</div>
    </ReactModal>
  )
}

export default Modal
