import { useCallback } from 'react'

import { useFilters } from '@/context/FilterContext/useFilters'
import { Search } from '@/features/Search'
import { AddUser } from '@/features/Users/AddUser'
import { useUsersQuery } from '@/features/Users/queries'
import { UsersTable } from '@/features/Users/Table'
import { useDebounce } from '@/hooks/useDebouce'

export default function Users() {
  const { filters, setFilters } = useFilters('users')
  const debouncedSearchTerm = useDebounce(filters.search, 300)
  const { data, isLoading, isFetching, isRefetching } = useUsersQuery({
    page: filters.page,
    search: debouncedSearchTerm,
  })

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters({ page: 1, search: e.target.value })
    },
    [setFilters]
  )

  const showSkeleton = isLoading || isFetching || isRefetching

  return (
    <>
      <Search
        placeholder='Search by first or last name...'
        search={filters.search}
        onChange={handleSearchChange}
        disabled={isLoading}
        actionButton={<AddUser />}
      />
      <UsersTable
        data={data}
        setPage={(page) => setFilters({ ...filters, page })}
        isLoading={showSkeleton}
      />
    </>
  )
}
