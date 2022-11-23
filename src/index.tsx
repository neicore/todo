import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import App from './App'
import NewTodoProvider from './context/NewTodoProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <NewTodoProvider>
      <App />
    </NewTodoProvider>
  </React.StrictMode>
)
