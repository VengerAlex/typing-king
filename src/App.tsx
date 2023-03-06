import {lazy, Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import {ROUTES} from '@/helpers/types'

const Home = lazy(() => import('./pages/Home'))
const Settings = lazy(() => import('./pages/Settings'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const App = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
        <Route path={ROUTES.NotFound} element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
