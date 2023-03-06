import {
  createContext, FC,
  Fragment,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {IntlProvider} from 'react-intl'
import {LOCALES} from '@/types'
import {useLocalStorage} from '@/hooks/useLocalStorage'
import {loadLocaleData} from '@/helpers/utils/loadLocaleData'

interface ILocaleContext {
  locale: LOCALES,
  setLocale: (value: LOCALES) => void
}

export const LocaleContext = createContext<ILocaleContext>({
  locale: LOCALES.ENGLISH,
  setLocale: () => null
})

export const LocalizationProvider: FC<PropsWithChildren> = ({children}) => {
  const [locale, setLocale] = useLocalStorage<LOCALES>('locale', LOCALES.ENGLISH)
  const [messages, setMessages] = useState<Record<string, string>>()

  useEffect(() => {
    loadLocaleData(locale)
      .then(msg => setMessages(msg))
  }, [locale])

  const values = useMemo(() => ({locale, setLocale}), [locale])

  if (!messages) return null

  return <IntlProvider
    textComponent={Fragment}
    defaultLocale={LOCALES.ENGLISH}
    locale={locale}
    messages={messages}
  >
    <LocaleContext.Provider value={values}>
      {children}
    </LocaleContext.Provider>
  </IntlProvider>
}

export const useLocalization = () => useContext(LocaleContext)
