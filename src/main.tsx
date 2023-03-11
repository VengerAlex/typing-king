import './styles/index.scss'

import ReactDOM from 'react-dom/client'

import {MainProvider} from '@/providers'

import {App} from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(<MainProvider><App /></MainProvider>)
