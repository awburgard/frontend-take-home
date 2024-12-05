import { useCallback, useState } from 'react'
import { Search } from '../Search'
import { useDebounce } from '../../hooks/useDebouce'
import { useRolesQuery } from './queries'

import { RolesTable } from './Table'
import { Box, Flex } from '@radix-ui/themes'

export default function Roles() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const debouncedSearchTerm = useDebounce(search, 300)
  const { data, isLoading, isFetching, isRefetching } = useRolesQuery({
    page,
    search: debouncedSearchTerm,
  })

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    []
  )

  const showSkeleton = isLoading || isFetching || isRefetching

  return (
    <>
      <Flex justify='between' align='center' gap='2' mb='5' width='100%'>
        <Box width='100%'>
          <Search
            placeholder='Search by name or description...'
            search={search}
            onChange={handleSearchChange}
            disabled={isLoading}
          />
        </Box>
      </Flex>
      <RolesTable data={data} setPage={setPage} isLoading={showSkeleton} />
    </>
  )
}
