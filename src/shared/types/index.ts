import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react'

export interface Todo {
  id: string
  title: string
  description: string
  category: {
    id: string
    title: string
  }
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
    todo?: Todo
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

export interface SelectProps {
  options: Option[]
  type?:
    | 'single-radio'
    | 'single-normal'
    | 'multi-checkbox'
    | 'multi-normal'
    | 'date'
  triggerType?: 'full' | 'icon'
  TriggerIconLeft?: ReactNode
  triggerTitle?: string
  activeBeacon?: boolean
  TriggerIcon?: ReactNode
  bottom?: boolean
  right?: boolean
  top?: boolean
  left?: boolean
  startDate?: Date
  endDate?: Date
  dispatchToNormal?: (id: string, title: string) => void
}

export interface Option {
  title: string
  value: string
  id: string
  name: string
  IconLeft?: ReactNode
  IconRight?: ReactNode
}

export interface SelectItemProps {
  type: 'normal' | 'checkbox' | 'radio'
  title: string
  value: string
  id: string
  name: string
  handleClick: MouseEventHandler<any>
  icon: 'none' | 'left' | 'right' | 'both'
  IconLeft?: ReactNode
  IconRight?: ReactNode
}

export interface ButtonProps {
  label: string
  type?: ButtonType
  handleButtonClick: MouseEventHandler<HTMLSpanElement | HTMLButtonElement>
}

export enum ButtonType {
  submit = 'submit',
  reset = 'reset',
}

export interface CategoryProps {
  title: string
}

export interface CountBadgeProps {
  count: string
}

export interface SplitButtonProps {
  primaryLabel: string
  secondaryLabel: string
  type?: ButtonType
  handlePrimaryClick: React.MouseEventHandler<HTMLButtonElement>
  handleSecondaryClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface LogoProps {
  type?: 'icon' | 'full'
}

export interface ModalProps {
  child: ReactNode
}

export interface SearchBarProps {
  handleInput: any
}

export interface TodoCardProps {
  handleChange?: ChangeEventHandler<HTMLInputElement>
  todo: Todo
}
