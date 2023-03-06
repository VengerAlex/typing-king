import {FC, PropsWithChildren} from 'react'
import {LocalizationProvider} from '@/providers/LocalizationProvider'
import {BrowserRouter} from 'react-router-dom'

export const MainProvider: FC<PropsWithChildren> = ({children}) => (
  <BrowserRouter>
    <LocalizationProvider>
      {children}
    </LocalizationProvider>
  </BrowserRouter>
)
