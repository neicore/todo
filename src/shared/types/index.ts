import { ReactNode } from 'react'

export interface Todo {
  id: string
  title: string
  description?: string
  category: string
  dateCreated: string
  dueDate?: Date
  isCompleted: boolean
}

export interface Category {
  id: string
  name: string
}

export interface TodoStateType {
  todos?: Todo[]
  categories?: Category[]
}

export interface TodoStateProps {
  children: ReactNode
}

export interface TodoReducerActions {
  type: 'CREATE' | 'EDIT' | 'DELETE' | 'SORT' | 'FILTER'
  payload: TodoStateType
}
