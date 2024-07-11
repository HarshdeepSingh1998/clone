import Image from 'next/image'
import { toast } from 'react-toastify'
import { Controller } from 'react-hook-form'
import { FileUploadInputProps } from 'components/FileUploadInput/types'
import Cross from 'assets/images/images/Cross.png'
import PdfIcon from '@/assets/images/svg/PdfIcon'
import {
  InputContent,
  InputText,
  LabelContainer,
  InputContainers,
  ChoseFileLabel,
  TextContainer,
  AttachmentContainer,
  PdfContainer,
  ErrorMessageContainer
} from '@/styles/Components/FileUploadInput'

const FileUploadInput: React.FC<FileUploadInputProps> = ({
  control,
  controllername,
  isEditModalOpen,
  document,
  setValue,
  errors
}) => {
  return (
    <InputContent>
      <InputText>{'Attachment'}</InputText>
      <Controller
        name={controllername}
        control={control}
        render={({ field }) => (
          <>
            {!document ? (
              <>
                <LabelContainer onClick={e => e.stopPropagation()}>
                  <InputContainers
                    type="file"
                    accept="application/pdf"
                    onChange={e => {
                      if (e.target.files) {
                        const fileArrayFormat = Array.from(e.target.files)

                        const fileSizeExceeded = fileArrayFormat.every(
                          file => file.size > 2 * 1024 * 1024
                        )

                        if (fileSizeExceeded) {
                          toast.error(`Maximum file size allowed is ${2}MB`)
                          return
                        }

                        const file = e.target.files && e.target.files[0]
                        field.onChange(file)
                      }
                    }}
                  />
                  <label>
                    <ChoseFileLabel>Choose file</ChoseFileLabel>
                  </label>
                  <label htmlFor="file" style={{ cursor: 'pointer' }}>
                    <TextContainer>No file chosen</TextContainer>
                  </label>
                </LabelContainer>
              </>
            ) : (
              <AttachmentContainer>
                {' '}
                {isEditModalOpen ? (
                  <PdfContainer>
                    <PdfIcon /> <p>Attachment</p>
                  </PdfContainer>
                ) : (
                  <p>{document && document?.name} </p>
                )}
                <Image
                  src={Cross}
                  alt="minus"
                  onClick={() => setValue('document', '')}
                />
              </AttachmentContainer>
            )}
            <ErrorMessageContainer>
              {errors?.document?.message || ''}
            </ErrorMessageContainer>
          </>
        )}
      />
    </InputContent>
  )
}

export default FileUploadInput
