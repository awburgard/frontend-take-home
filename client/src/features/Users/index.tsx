import { useCallback, useState } from 'react'
import { useUsersQuery } from './queries'
import { Search } from '../Search'
import { useDebounce } from '../../hooks/useDebouce'

import { UsersTable } from './Table'
import { AddUser } from './AddUser'
import { Box, Flex } from '@radix-ui/themes'

export default function Users() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const debouncedSearchTerm = useDebounce(search, 300)
  const { data, isLoading, isFetching, isRefetching } = useUsersQuery({
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
            placeholder='Search by first or last name...'
            search={search}
            onChange={handleSearchChange}
            disabled={isLoading}
          />
        </Box>
        <AddUser />
      </Flex>
      <UsersTable data={data} setPage={setPage} isLoading={showSkeleton} />
    </>
  )
}
