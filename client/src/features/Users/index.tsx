import { useCallback } from 'react'
import { useUsersQuery } from './queries'
import { Search } from '../Search'
import { useDebounce } from '../../hooks/useDebouce'

import { UsersTable } from './Table'
import { AddUser } from './AddUser'
import { Box, Flex } from '@radix-ui/themes'
import { useFilters } from '../../context/FilterContext/useFilters'

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
      <Flex justify='between' align='center' gap='2' mb='5' width='100%'>
        <Box width='100%'>
          <Search
            placeholder='Search by first or last name...'
            search={filters.search}
            onChange={handleSearchChange}
            disabled={isLoading}
          />
        </Box>
        <AddUser />
      </Flex>
      <UsersTable
        data={data}
        setPage={(page) => setFilters({ ...filters, page })}
        isLoading={showSkeleton}
      />
    </>
  )
}
