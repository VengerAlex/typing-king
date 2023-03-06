import en from '@/providers/LocalizationProvider/locales/en/common.json'

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof en
    }
  }
}
