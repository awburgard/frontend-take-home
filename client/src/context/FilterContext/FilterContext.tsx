import { useState } from 'react'

import {
  FilterContext,
  Filters,
} from '@/context/FilterContext/FilterContextType'

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFiltersState] = useState<Record<string, Filters>>({
    users: { page: 1, search: '' },
    roles: { page: 1, search: '' },
  })

  const setFilters = (feature: string, newFilters: Filters) => {
    setFiltersState((prevFilters) => ({
      ...prevFilters,
      [feature]: newFilters,
    }))
  }

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}
