import { useCallback, useState } from 'react'
import { Search } from '../Search'
import { useDebounce } from '../../hooks/useDebouce'
import { useRolesQuery } from './queries'

import { RolesTable } from './Table'

export default function Roles() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const debouncedSearchTerm = useDebounce(search, 300)
  const { data } = useRolesQuery({
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
        placeholder='Search by name or description...'
        search={search}
        onChange={handleSearchChange}
      />
      <RolesTable data={data} setPage={setPage} />
    </>
  )
}
