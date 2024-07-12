import { useState, ClipboardEvent } from 'react'
import { Controller } from 'react-hook-form'
import {
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnBulletList,
  BtnLink,
  Editor,
  EditorProvider,
  Toolbar,
  createButton
} from 'react-simple-wysiwyg'
import { EditorInterface } from 'components/Editor/types'
import CenterAlign from 'assets/images/svg/CenterAlignBtn'
import LeftAlign from 'assets/images/svg/LeftAlignBtn'
import RightAlign from 'assets/images/svg/RightAlignBtn'
import {
  EditorContainer,
  InputText,
  ErrorMessageContainer
} from '@/styles/Components/Editor'

const EditorComponent = ({
  control,
  controllername,
  errors,
  value
}: EditorInterface) => {
  const [inputValue, setInputValue] = useState(value)

  const handlePaste = (e: ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text/plain')
    document.execCommand('insertText', false, text)
  }

  const BtnAlignCenter = createButton(
    'Align center',
    <CenterAlign />,
    'justifyCenter'
  )
  const BtnAlignLeft = createButton('Align right', <LeftAlign />, 'justifyLeft')
  const BtnAlignRight = createButton(
    'Align left',
    <RightAlign />,
    'justifyRight'
  )

  return (
    <EditorContainer>
      <InputText>Description</InputText>
      <Controller
        name={controllername}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <EditorProvider>
            <Editor
              {...field}
              value={inputValue}
              onChange={e => {
                setInputValue(e.target.value)
                field.onChange(e.target.value)
              }}
              onPaste={handlePaste}
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                // width: '400px',
                height: '200px',
                overflow: 'auto',
                padding: '10px'
              }}
            >
              <Toolbar>
                <BtnBold />
                <BtnItalic />
                <BtnUnderline />
                <BtnBulletList />
                <BtnLink />
                <BtnAlignCenter />
                <BtnAlignLeft />
                <BtnAlignRight />
              </Toolbar>
            </Editor>
          </EditorProvider>
        )}
      />
      <ErrorMessageContainer>
        {errors.description && (
          <span>
            {errors?.description?.message || 'Description is required'}
          </span>
        )}
      </ErrorMessageContainer>
    </EditorContainer>
  )
}

export default EditorComponent
