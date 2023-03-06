import {LOCALES} from '@/helpers/types'

export const loadLocaleData = (locale: LOCALES) => {
  return import(`../../providers/LocalizationProvider/locales/${locale}/common.json`)
}
