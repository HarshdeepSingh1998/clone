export interface ErrorResponse {
  response: {
    data: {
      message: string
    }
  }
}

export interface ModalInterface {
  // eslint-disable-next-line no-unused-vars
  showModal: (value: boolean) => void
  setMenuModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
