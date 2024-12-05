import { useCallback, useState } from 'react'
import { Table } from '../../components/Table'
import { useUsersQuery } from './queries'
import { Search } from '../Search'
import { Avatar, Button, Flex, Spinner } from '@radix-ui/themes'
import { useDebounce } from '../../hooks/useDebouce'

export default function Users() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const debouncedSearchTerm = useDebounce(search, 300)

  const { data, isError, isPending, isLoading } = useUsersQuery({
    page,
    search: debouncedSearchTerm,
  })

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    },
    [search]
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
            <Table.Cell>User</Table.Cell>
            <Table.Cell>Role</Table.Cell>
            <Table.Cell>Joined</Table.Cell>
            <Table.Cell></Table.Cell>
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
                    <Table.Cell>{user.roleId}</Table.Cell>
                    <Table.Cell>{user.createdAt}</Table.Cell>
                    <Table.Cell>...</Table.Cell>
                  </Table.Row>
                )
              })}
            </>
          ) : (
            <Spinner loading={isLoading} />
          )}
        </Table.Body>

        <Flex justify='between' py='2'>
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
      </Table>
    </>
  )
}
