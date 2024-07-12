import { EditorContainer, InputText } from '@/styles/Components/Editor'
import { Controller } from 'react-hook-form'

const Editor = ({ control, controllerName }) => {
  return (
    <EditorContainer>
      <InputText>Description</InputText>
      <Controller
        name={controllerName}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <EditorProvider
            {...field}
            value={productDetails ? productDetails.description : ''}
          >
            <Editor
              value={inputValue}
              onChange={handleChange}
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
              {' '}
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
      <ErrorMessageWrapper id="description-section">
        {errors.description && (
          <span className="text-rose-500 text-left text-sm">
            {errors?.description?.message || 'Description is required'}
          </span>
        )}
      </ErrorMessageWrapper>
    </EditorContainer>
  )
}

export default Editor
