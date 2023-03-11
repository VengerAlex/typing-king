import {Fragment} from 'react'
import {FormattedMessage} from 'react-intl'

import {Localization} from '@/pages/Settings/components/Localization'

const Settings = () => {
  return (
    <Fragment>
      <h1><FormattedMessage id='settings' /></h1>
      <div className='setting__container'>
        <Localization />
      </div>
    </Fragment>
  )
}

export default Settings
