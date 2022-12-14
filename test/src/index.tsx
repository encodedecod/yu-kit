import { createRoot } from 'react-dom/client'
import App from './App'
import flexiable from 'h-flexiable'

import '@h-devkit/styles/reset.scss'

flexiable()
const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
}
