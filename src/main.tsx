import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
import {MainProvider} from '@/providers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(<MainProvider><App /></MainProvider>)
