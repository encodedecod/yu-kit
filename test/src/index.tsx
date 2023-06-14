import { createRoot } from 'react-dom/client'
import App from './App'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@yu-kit/styles/reset.scss'

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}
