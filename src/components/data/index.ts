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
