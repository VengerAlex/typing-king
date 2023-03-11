import {useLocalization} from '@/providers/LocalizationProvider'
import Select from 'react-select'
import {customStyles} from '@/styles/react-select'
import {LOCALES} from '@/helpers/types'

type language = {value: LOCALES, label: string}

const languages: language[] = [
  { value: LOCALES.ENGLISH, label: 'English' },
  { value: LOCALES.UKRAINIAN, label: 'Ukrainian' },
  { value: LOCALES.SPANISH, label: 'Spanish' }
]

export const Localization = () => {
  const {locale, setLocale} = useLocalization()

  const selectedValue = locale && languages.find(({value}) => value === locale)

  return <Select
    isMulti={false}
    value={selectedValue}
    onChange={(selectValue) => setLocale(selectValue?.value as LOCALES)}
    isLoading={!locale}
    isSearchable
    styles={customStyles}
    options={languages}
    placeholder='Choose a language'
  />
}
