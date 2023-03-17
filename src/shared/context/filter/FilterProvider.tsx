import { Dispatch, createContext, useContext, useReducer } from 'react'
import {
  FilterReducerActions,
  FilterStateType,
  ProviderProps,
} from '../../types'
import { filterReducer } from './filterReducer'

const FilterContext = createContext(
  {} as { state: FilterStateType; dispatch: Dispatch<FilterReducerActions> }
)

const FilterProvider = ({ children }: ProviderProps) => {
  const initialState: FilterStateType = {
    filter: { type: null, value: '' },
  }

  const [state, dispatch] = useReducer(filterReducer, initialState)

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider

export const useFilterState = () => useContext(FilterContext)
