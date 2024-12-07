import { createContext } from 'react'

export interface Filters {
  page: number
  search: string
}

export interface FilterContextType {
  filters: Record<string, Filters>
  setFilters: (feature: string, filters: Filters) => void
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
)
