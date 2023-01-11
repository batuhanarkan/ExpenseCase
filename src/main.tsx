import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import ExpenseProvider from './providers/ExpenseProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ExpenseProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ExpenseProvider>
  </React.StrictMode>,
)
