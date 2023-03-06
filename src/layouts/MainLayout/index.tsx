import {Menu} from '@/layouts/components/Menu'
import {ReactElement} from 'react'

export const MainLayout = ({children}: {children: ReactElement}) => {
  return <main className='container'>
    <Menu />
    <div className='app'>
      {children}
    </div>
  </main>
}
