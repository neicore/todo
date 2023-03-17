import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import App from './App'
import TodoProvider from './shared/context/todo/TodoProvider'
import FilterProvider from './shared/context/filter/FilterProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <FilterProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </FilterProvider>
  </React.StrictMode>
)
