import {ReactElement} from 'react'

import {Menu} from '@/layouts/components/Menu'

export const MainLayout = ({children}: {children: ReactElement}) => {
  return <main className='container'>
    <Menu />
    <div className='app'>
      {children}
    </div>
  </main>
}
