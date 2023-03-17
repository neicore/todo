import { FilterReducerActions, FilterStateType } from '../../types'

export const filterReducer = (
  state: FilterStateType,
  action: FilterReducerActions
) => {
  const { type, payload } = action

  switch (type) {
    case 'SEARCH_TODO':
      return payload
    case 'FILTER_TODO':
      return payload
    case 'SORT_TODO':
      return payload
    default:
      return state
  }
}
