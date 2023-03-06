import {LOCALES} from '@/types'

export const loadLocaleData = (locale: LOCALES) => {
  return import(`../../providers/LocalizationProvider/locales/${locale}/common.json`)
}
