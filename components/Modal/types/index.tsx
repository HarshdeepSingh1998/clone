export interface IModalProps {
  isOpen: boolean
  children?: JSX.Element
  className?: string
  hideModal: () => void
}
