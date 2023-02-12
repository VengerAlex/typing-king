import {LOCALES} from '@types'
import messages from '@providers/LocalizationProvider/messages'

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof messages[LOCALES.ENGLISH]
    }
  }
}
