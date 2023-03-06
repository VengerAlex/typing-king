import {ReactElement} from 'react'
import {LocalizationProvider} from '@/providers/LocalizationProvider'
import {BrowserRouter} from 'react-router-dom'
import {MainLayout} from '@/layouts/MainLayout'

export const MainProvider = ({children}: {children: ReactElement}) => (
  <BrowserRouter>
    <LocalizationProvider>
      <MainLayout>
        {children}
      </MainLayout>
    </LocalizationProvider>
  </BrowserRouter>
)
