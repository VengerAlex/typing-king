import {FC, PropsWithChildren} from 'react'
import {LocalizationProvider} from '@providers/LocalizationProvider'

export const MainProvider: FC<PropsWithChildren> = ({children}) => (
  <LocalizationProvider>
    {children}
  </LocalizationProvider>
)
