import { useCallback, useState } from 'react'
import { Table } from '../../components/Table'
import { Search } from '../Search'
import { Button, DropdownMenu, Flex, Spinner } from '@radix-ui/themes'
import { useDebounce } from '../../hooks/useDebouce'
import { useRolesQuery } from './queries'
import { formatDate } from '../../utils/formatDate'
import ActionMenu from './ActionMenu'

export default function Roles() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const debouncedSearchTerm = useDebounce(search, 300)
  const { data, isLoading } = useRolesQuery({
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
      <Table variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {!isLoading ? (
            <>
              {data?.data.map((role) => {
                return (
                  <Table.Row key={role.id}>
                    <Table.RowHeaderCell>{role.name}</Table.RowHeaderCell>
                    <Table.Cell>{role.description}</Table.Cell>
                    <Table.Cell>{role.isDefault ? 'Yes' : 'No'}</Table.Cell>
                    <Table.Cell>{formatDate(role.createdAt)}</Table.Cell>
                    <Table.Cell>
                      <ActionMenu
                        role={role}
                        render={(openDialog) => (
                          <>
                            <DropdownMenu.Item onClick={openDialog}>
                              Edit
                            </DropdownMenu.Item>
                            <DropdownMenu.Item>Delete</DropdownMenu.Item>
                          </>
                        )}
                      />
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </>
          ) : (
            <Spinner loading={isLoading} />
          )}
        </Table.Body>

        {Boolean(data?.next || data?.prev) && (
          <Flex justify='end'>
            <Button
              variant='soft'
              onClick={() => setPage(data?.prev || 1)}
              disabled={!data?.prev}
            >
              Previous
            </Button>
            <Button
              variant='soft'
              onClick={() => setPage(data?.next || 1)}
              disabled={!data?.next}
            >
              Next
            </Button>
          </Flex>
        )}
      </Table>
    </>
  )
}
