import { nanoid } from 'nanoid'
import { Delete, Edit } from '../components/icons'
import { option } from '../components/select'

interface Todo {
  id: number
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
    Icon: Edit,
  },
  {
    title: 'Option 2',
    value: 'Option 2',
    id: nanoid(5),
    name: 'normal-sample',
    Icon: Delete,
  },
  {
    title: 'Option 3',
    value: 'Option 3',
    id: nanoid(5),
    name: 'normal-sample',
    Icon: Edit,
  },
  {
    title: 'Option 4',
    value: 'Option 4',
    id: nanoid(5),
    name: 'normal-sample',
    Icon: Delete,
  },
  {
    title: 'Option 5',
    value: 'Option 5',
    id: nanoid(5),
    name: 'normal-sample',
    Icon: Edit,
  },
]
