import { nanoid } from 'nanoid'
import { Checkmark, Delete, Edit } from '../../components/icons'
import { Option } from '../types'

export const sortOptions: Option[] = [
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

export const filterOptions: Option[] = [
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

export const todoMenu: Option[] = [
  {
    title: 'Edit',
    value: 'Edit',
    id: nanoid(5),
    name: 'todo-menu',
    IconLeft: <Edit />,
  },
  {
    title: 'Delete',
    value: 'Delete',
    id: nanoid(5),
    name: 'todo-menu',
    IconLeft: <Delete />,
  },
]

export const radioSelectOptions: Option[] = [
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

export const checkboxSelectOptions: Option[] = [
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

export const normalSelectOptions: Option[] = [
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

export const normalWithIconSelectOptions: Option[] = [
  {
    title: 'Option 1',
    value: 'Option 1',
    id: nanoid(5),
    name: 'normal-sample',
    IconLeft: <Edit />,
  },
  {
    title: 'Option 2',
    value: 'Option 2',
    id: nanoid(5),
    name: 'normal-sample',
    IconLeft: <Delete />,
  },
  {
    title: 'Option 3',
    value: 'Option 3',
    id: nanoid(5),
    name: 'normal-sample',
    IconLeft: <Edit />,
  },
  {
    title: 'Option 4',
    value: 'Option 4',
    id: nanoid(5),
    name: 'normal-sample',
    IconLeft: <Delete />,
    IconRight: <Checkmark />,
  },
  {
    title: 'Option 5',
    value: 'Option 5',
    id: nanoid(5),
    name: 'normal-sample',
    IconLeft: <Edit />,
    IconRight: <Checkmark />,
  },
]
