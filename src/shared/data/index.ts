import { nanoid } from 'nanoid'
import { Checkmark, Delete, Edit } from '../../components/icons'
import { option } from '../../components/select'

export interface Todo {
  id: number | string
  title: string
  description: string
  category?: number
  dueDate?: Date
  isCompleted: boolean
}

interface Category {
  id: number
  name: string
}

export const sortOptions: option[] = [
  {
    title: 'Latest Created',
    value: 'Latest Created',
    id: nanoid(5),
    name: 'sort-menu',
  },
  {
    title: 'Oldest Created',
    value: 'Oldest Created',
    id: nanoid(5),
    name: 'sort-menu',
  },
  {
    title: 'Latest Due Date',
    value: 'Latest Due Date',
    id: nanoid(5),
    name: 'sort-menu',
  },
  {
    title: 'Oldest Due Date',
    value: 'Oldest Due Date',
    id: nanoid(5),
    name: 'sort-menu',
  },
]

export const filterOptions: option[] = [
  {
    title: 'Open',
    value: 'Open',
    id: nanoid(5),
    name: 'filter-menu',
  },
  {
    title: 'Past Due Date',
    value: 'Past Due Date',
    id: nanoid(5),
    name: 'filter-menu',
  },
  {
    title: 'No Due Date',
    value: 'No Due Date',
    id: nanoid(5),
    name: 'filter-menu',
  },
  {
    title: 'Done',
    value: 'Done',
    id: nanoid(5),
    name: 'filter-menu',
  },
]

export const todos: Todo[] = [
  {
    id: 1,
    title: 'Yolo',
    description: 'You only live once',
    dueDate: new Date(),
    isCompleted: false,
    category: 2,
  },
  {
    id: 2,
    title: 'Yolo',
    description: 'You only live once',
    dueDate: new Date(),
    isCompleted: false,
    category: 1,
  },
  {
    id: 3,
    title: 'Yolo',
    description: 'You only live once',
    dueDate: new Date(),
    isCompleted: false,
    category: 4,
  },
  {
    id: 4,
    title: 'Yolo',
    description: 'You only live once',
    dueDate: new Date(),
    isCompleted: false,
    category: 5,
  },
  {
    id: 5,
    title: 'Yolo',
    description: 'You only live once',
    dueDate: new Date(),
    isCompleted: false,
    category: 3,
  },
]

export const categories: Category[] = [
  {
    id: 1,
    name: 'Category 1',
  },
  {
    id: 2,
    name: 'Category 2',
  },
  {
    id: 3,
    name: 'Category 3',
  },
  {
    id: 4,
    name: 'Category 4',
  },
  {
    id: 5,
    name: 'Category 5',
  },
]

export const todoMenu: option[] = [
  {
    title: 'Edit',
    value: 'Edit',
    id: nanoid(5),
    name: 'todo-menu',
    IconLeft: Edit,
  },
  {
    title: 'Delete',
    value: 'Delete',
    id: nanoid(5),
    name: 'todo-menu',
    IconLeft: Delete,
  },
]

export const radioSelectOptions: option[] = [
  {
    title: 'Option 1',
    value: 'Option 1',
    id: nanoid(5),
    name: 'radio-sample',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
    id: nanoid(5),
    name: 'radio-sample',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
    id: nanoid(5),
    name: 'radio-sample',
  },
  {
    title: 'Option 4',
    value: 'Option 4',
    id: nanoid(5),
    name: 'radio-sample',
  },
  {
    title: 'Option 5',
    value: 'Option 5',
    id: nanoid(5),
    name: 'radio-sample',
  },
]

export const checkboxSelectOptions: option[] = [
  {
    title: 'Option 1',
    value: 'Option 1',
    id: nanoid(5),
    name: 'checkbox-sample',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
    id: nanoid(5),
    name: 'checkbox-sample',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
    id: nanoid(5),
    name: 'checkbox-sample',
  },
  {
    title: 'Option 4',
    value: 'Option 4',
    id: nanoid(5),
    name: 'checkbox-sample',
  },
  {
    title: 'Option 5',
    value: 'Option 5',
    id: nanoid(5),
    name: 'checkbox-sample',
  },
]

export const normalSelectOptions: option[] = [
  {
    title: 'Option 1',
    value: 'Option 1',
    id: nanoid(5),
    name: 'normal-sample',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
    id: nanoid(5),
    name: 'normal-sample',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
    id: nanoid(5),
    name: 'normal-sample',
  },
  {
    title: 'Option 4',
    value: 'Option 4',
    id: nanoid(5),
    name: 'normal-sample',
  },
  {
    title: 'Option 5',
    value: 'Option 5',
    id: nanoid(5),
    name: 'normal-sample',
  },
]

export const normalWithIconSelectOptions: option[] = [
  {
    title: 'Option 1',
    value: 'Option 1',
    id: nanoid(5),
    name: 'normal-sample',
    IconLeft: Edit,
  },
  {
    title: 'Option 2',
    value: 'Option 2',
    id: nanoid(5),
    name: 'normal-sample',
    IconLeft: Delete,
  },
  {
    title: 'Option 3',
    value: 'Option 3',
    id: nanoid(5),
    name: 'normal-sample',
    IconLeft: Edit,
  },
  {
    title: 'Option 4',
    value: 'Option 4',
    id: nanoid(5),
    name: 'normal-sample',
    IconLeft: Delete,
    IconRight: Checkmark,
  },
  {
    title: 'Option 5',
    value: 'Option 5',
    id: nanoid(5),
    name: 'normal-sample',
    IconLeft: Edit,
    IconRight: Checkmark,
  },
]
