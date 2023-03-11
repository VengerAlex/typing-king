import {ReactElement} from 'react'
import {BrowserRouter} from 'react-router-dom'

import {MainLayout} from '@/layouts/MainLayout'
import {LocalizationProvider} from '@/providers/LocalizationProvider'

export const MainProvider = ({children}: {children: ReactElement}) => (
  <BrowserRouter>
    <LocalizationProvider>
      <MainLayout>
        {children}
      </MainLayout>
    </LocalizationProvider>
  </BrowserRouter>
)
