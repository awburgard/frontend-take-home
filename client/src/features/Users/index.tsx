import { useCallback, useState } from 'react'
import { useUsersQuery } from './queries'
import { Search } from '../Search'
import { useDebounce } from '../../hooks/useDebouce'

import { UsersTable } from './Table'

export default function Users() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const debouncedSearchTerm = useDebounce(search, 300)
  const { data } = useUsersQuery({
    page,
    search: debouncedSearchTerm,
  })

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    []
  )

  return (
    <>
      <Search
        placeholder='Search by name...'
        search={search}
        onChange={handleSearchChange}
      />
      <UsersTable data={data} setPage={setPage} />
    </>
  )
}
