import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {IntlProvider} from 'react-intl'

import {LOCALES} from '@/helpers/types'
import {Localization} from '@/pages/Settings/components/Localization'
import en_messages from '@/providers/LocalizationProvider/locales/en/common.json'
import uk_messages from '@/providers/LocalizationProvider/locales/uk/common.json'

describe('Localization', () => {
  it('Should change select value based on language you chose', async() => {
    render(
      <IntlProvider locale='en' messages={en_messages}>
        <Localization/>
      </IntlProvider>
    )

    const selectElement = screen.getByRole('combobox')

    await userEvent.type(selectElement, LOCALES.UKRAINIAN)

    expect(screen.getByRole('combobox')).toHaveValue(LOCALES.UKRAINIAN)
    expect(screen.getByText('Ukrainian')).toBeInTheDocument()
  })

  it('Should change locale based and update corresponding text', async() => {
    const {rerender} = render(
      <IntlProvider locale='en' messages={en_messages}>
        <Localization/>
      </IntlProvider>
    )

    const selectElement = screen.getByRole('combobox')

    await userEvent.type(selectElement, LOCALES.UKRAINIAN)

    expect(screen.getByRole('combobox')).toHaveValue(LOCALES.UKRAINIAN)
    expect(screen.getByText('Ukrainian')).toBeInTheDocument()

    rerender(
      <IntlProvider locale={LOCALES.UKRAINIAN} messages={uk_messages}>
        <Localization />
      </IntlProvider>
    )

    await waitFor(() => {
      expect(screen.getByText('Виберіть мову')).toBeInTheDocument()
    })
  })
})
