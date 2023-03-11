import {Fragment} from 'react'
import {FormattedMessage} from 'react-intl'
import Select from 'react-select'

import {LOCALES} from '@/helpers/types'
import {useLocalization} from '@/providers/LocalizationProvider'
import {customStyles} from '@/styles/react-select'

type language = {value: LOCALES, label: string}

const languages: language[] = [
  { value: LOCALES.ENGLISH, label: 'English' },
  { value: LOCALES.UKRAINIAN, label: 'Ukrainian' },
  { value: LOCALES.SPANISH, label: 'Spanish' }
]

export const Localization = () => {
  const {locale, setLocale} = useLocalization()

  const selectedValue = locale && languages.find(({value}) => value === locale)

  return <Fragment>
    {locale}
    <label
      data-testid='hello'
      className='label'
      htmlFor='languages'
    >
      <FormattedMessage id='chooseLanguage' />
    </label>
    <Select
      inputId='languages'
      isMulti={false}
      value={selectedValue}
      onChange={(selectValue) => setLocale(selectValue?.value as LOCALES)}
      isLoading={!locale}
      isSearchable
      styles={customStyles}
      options={languages}
    />
  </Fragment>
}
