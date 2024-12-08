import { useCallback } from 'react'
import { Search } from '@/features/Search'
import { useDebounce } from '@/hooks/useDebouce'
import { useRolesQuery } from '@/features/Roles/queries'
import { RolesTable } from '@/features/Roles/Table'
import { Box, Flex } from '@radix-ui/themes'
import { useFilters } from '@/context/FilterContext/useFilters'

export default function Roles() {
  const { filters, setFilters } = useFilters('roles')
  const debouncedSearchTerm = useDebounce(filters.search, 300)
  const { data, isLoading, isFetching, isRefetching } = useRolesQuery({
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
            placeholder='Search by name or description...'
            search={filters.search}
            onChange={handleSearchChange}
            disabled={isLoading}
          />
        </Box>
      </Flex>
      <RolesTable
        data={data}
        setPage={(page) => setFilters({ ...filters, page })}
        isLoading={showSkeleton}
      />
    </>
  )
}
