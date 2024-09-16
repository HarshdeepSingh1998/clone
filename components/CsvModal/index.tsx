import Modal from 'react-modal'
import Image from 'next/image'
import useSubmitForm from '@/utils/Callback/Admin/Inventorymanagement/CsvModal'
import { CsvModalProps } from 'components/CsvModal/types'
import { Style } from 'components/RevokeModal'
import Csv from 'assets/images/images/Csv.png'
import Filled from 'assets/images/images/filled.png'
import Bin from 'assets/images/images/bin.png'
import Completed from 'assets/images/images/tick.png'
import {
  ModalContainer,
  HeaderContainer,
  BoxImage,
  HeaderContent,
  FileImageContainer,
  UploadedFileContainer,
  UploadedFileContent,
  UploadedFileText,
  UploadedFileTextContainer,
  UploadFile,
  DeleteImage,
  DropImages,
  FileUploadError,
  InputFile,
  UploadFileContainer,
  ButtonContainer
} from '@/styles/Components/CsvModal'
import Button from 'components/Button'

const CsvModal: React.FC<CsvModalProps> = ({
  isModalOpen,
  closeModal,
  inventoryData,
  setPage,
  setForceUpdate,
  selectedFiles,
  setSelectedFiles,
  handleFileChange,
  fileUploadError,
  setFileUploadError
}) => {
  const inventoryPage = true
  const { onSubmit } = useSubmitForm(
    selectedFiles,
    inventoryPage,
    setPage,
    setForceUpdate,
    inventoryData
  )

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => closeModal(false)}
      style={Style}
    >
      <ModalContainer>
        <HeaderContainer>
          <BoxImage />
          <HeaderContent>
            Upload Files
            <span>Select and upload the files of your choice</span>
          </HeaderContent>
        </HeaderContainer>
        {selectedFiles ? (
          <UploadedFileContainer>
            <UploadFile>
              <Image src={Csv} alt="minus" />
              <UploadedFileTextContainer>
                <UploadedFileText>
                  {Array.from(selectedFiles).map(file => file.name)[0]}
                </UploadedFileText>
                <UploadedFileContent>
                  {`${Array.from(selectedFiles).map(file => file.size)[0]}KB of ${Array.from(selectedFiles).map(file => file.size)[0]}KB`}
                  <FileImageContainer>
                    <Image src={Completed} alt="minus" />
                    Completed
                  </FileImageContainer>
                </UploadedFileContent>
              </UploadedFileTextContainer>
            </UploadFile>
            <DeleteImage onClick={() => setSelectedFiles(null)}>
              <Image src={Bin} alt="minus" />
            </DeleteImage>
          </UploadedFileContainer>
        ) : (
          <>
            <UploadFileContainer>
              <DropImages>
                <InputFile type="file" onChange={handleFileChange} />
                <Image src={Filled} alt="minus" />
                Click or Drop File
              </DropImages>
              <span>Formats accepted are .csv and .xlsx</span>
            </UploadFileContainer>
            <FileUploadError>
              {fileUploadError && fileUploadError}
            </FileUploadError>
          </>
        )}
        <ButtonContainer disable={false}>
          <Button
            type="submit"
            variant="contained"
            disable={false}
            label={'Import'}
            onClick={() => onSubmit()}
          />
          <Button
            disable={false}
            type="submit"
            variant={'outline'}
            label={'Cancel'}
            onClick={() => {
              closeModal(false)
              setSelectedFiles(null)
              setFileUploadError('')
            }}
          />
        </ButtonContainer>
      </ModalContainer>
    </Modal>
  )
}

export default CsvModal
