import { useContext } from 'react'

import {
  FilterContext,
  Filters,
} from '@/context/FilterContext/FilterContextType'

export const useFilters = (feature: string) => {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider')
  }
  const { filters, setFilters } = context
  return {
    filters: filters[feature],
    setFilters: (newFilters: Filters) => setFilters(feature, newFilters),
  }
}
