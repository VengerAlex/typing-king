import ReactDOM from 'react-dom/client'
import {App} from './App'
import './styles/index.scss'
import {MainProvider} from '@/providers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(<MainProvider><App /></MainProvider>)
