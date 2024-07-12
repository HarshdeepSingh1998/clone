import { ContentEditableEvent } from 'react-simple-wysiwyg'

/* eslint-disable no-unused-vars */
export interface EditorInterface {
  control: any
  controllername: string
  errors: any
  value: string
  onChange?: (e: ContentEditableEvent) => void
}
