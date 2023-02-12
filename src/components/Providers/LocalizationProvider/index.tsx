import {
  createContext, FC,
  Fragment,
  PropsWithChildren,
} from 'react'
import {IntlProvider} from 'react-intl'
import {LOCALES} from '@types'
import {useLocalStorage} from '@hooks/useLocalStorage'
import messages from '@providers/LocalizationProvider/messages'

interface ILocaleContext {
  locale: LOCALES,
  setLocale: (value: LOCALES) => void
}
export const LocaleContext = createContext<ILocaleContext>({
  locale: LOCALES.UKRAINIAN,
  setLocale: () => null
})

export const LocalizationProvider: FC<PropsWithChildren> = ({children}) => {
  const [locale, setLocale] = useLocalStorage<LOCALES>('locale', LOCALES.ENGLISH)

  return <IntlProvider
    textComponent={Fragment}
    defaultLocale={LOCALES.UKRAINIAN}
    locale={locale}
    messages={messages[locale]}
  >
    <LocaleContext.Provider value={{locale, setLocale}}>
      {children}
    </LocaleContext.Provider>
  </IntlProvider>
}
