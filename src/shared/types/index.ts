import { ReactNode } from 'react'

export interface Todo {
  id: string
  title: string
  description?: string
  category: string
  dateCreated: string
  dueDate?: string
  isCompleted: boolean
}

export interface Category {
  id: string
  name: string
  title: string
  value: string
}

export interface TodoStateType {
  todos?: Todo[]
  categories?: Category[]
  modal?: {
    child: ReactNode
  }
  select?: {
    id: string
    title: string
  }
  pickDate?: string
}

export interface TodoStateProps {
  children: ReactNode
}

export interface TodoReducerActions {
  type:
    | 'CREATE_TODO'
    | 'EDIT_TODO'
    | 'DELETE_TODO'
    | 'SORT_TODO'
    | 'FILTER_TODO'
    | 'HANDLE_MODAL'
    | 'CREATE_CATEGORY'
    | 'SELECT'
    | 'PICK_DATE'
  payload: TodoStateType
}
