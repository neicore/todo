import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import App from './App'
import TodoState from './shared/context/todo/TodoState'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <TodoState>
      <App />
    </TodoState>
  </React.StrictMode>
)
