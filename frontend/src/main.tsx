import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { setBaseUrl } from './api'

import './index.css'

// Set the base URL for the API,
// it's /api because it's proxied in vite.config.ts
setBaseUrl('/api')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
