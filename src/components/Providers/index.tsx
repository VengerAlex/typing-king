import {FC, PropsWithChildren} from 'react'
import {ReactQueryDevtools} from 'react-query/devtools'
import {QueryClient, QueryClientProvider} from 'react-query'
import {LocalizationProvider} from '@/components/Providers/LocalizationProvider'

const queryClient = new QueryClient()

export const MainProvider: FC<PropsWithChildren> = ({children}) => (
  <QueryClientProvider client={queryClient}>
    <LocalizationProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </LocalizationProvider>
  </QueryClientProvider>
)
