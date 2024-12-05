import { useCallback, useState } from 'react'
import { Table } from '../../components/Table'
import { useUsersQuery } from './queries'
import { Search } from '../Search'
import { Avatar, Button, DropdownMenu, Flex, Spinner } from '@radix-ui/themes'
import { useDebounce } from '../../hooks/useDebouce'
import RoleCell from './RoleCell'
import CreatedAtCell from './CreatedAtCell'
import ActionMenu from './ActionMenu'

export default function Users() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const debouncedSearchTerm = useDebounce(search, 300)
  const { data, isLoading } = useUsersQuery({
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
            <Table.ColumnHeaderCell>User</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Joined</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {!isLoading ? (
            <>
              {data?.data.map((user) => {
                return (
                  <Table.Row key={user.id}>
                    <Table.RowHeaderCell>
                      <Flex align='center' gap='2'>
                        <Avatar
                          src={user.photo}
                          fallback={user.first[0]}
                          radius='full'
                          size='1'
                        />
                        {user.first} {user.last}
                      </Flex>
                    </Table.RowHeaderCell>
                    <RoleCell id={user.roleId} />
                    <CreatedAtCell createdAt={user.createdAt} />
                    <Table.Cell>
                      <ActionMenu
                        userId={user.id}
                        name={`${user.first} ${user.last}`}
                        render={(openDialog) => (
                          <>
                            <DropdownMenu.Item>Edit</DropdownMenu.Item>
                            <DropdownMenu.Item onClick={openDialog}>
                              Delete
                            </DropdownMenu.Item>
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
          <Table.Footer>
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
          </Table.Footer>
        )}
      </Table>
    </>
  )
}
