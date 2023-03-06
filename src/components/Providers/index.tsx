import {FC, PropsWithChildren} from 'react'
import {LocalizationProvider} from '@/components/Providers/LocalizationProvider'

export const MainProvider: FC<PropsWithChildren> = ({children}) => (
  <LocalizationProvider>
    {children}
  </LocalizationProvider>
)
