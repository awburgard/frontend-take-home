import { useState, Fragment } from 'react'
import { Table } from '../../components/Table'
import { useUsersQuery } from './queries'

export default function Users() {
  const [search, setSearch] = useState<string>('')
  const {
    data,
    isError,
    isPending,
    isLoading,
    isFetchedAfterMount,
    isFetching,
  } = useUsersQuery(1, search)

  if (isLoading || isPending || isFetching) {
    return <div>Loading...</div>
  }

  return (
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
        {isFetchedAfterMount ? (
          <>
            {data?.data.map((user) => {
              return (
                <Table.Row key={user.id}>
                  <Table.RowHeaderCell>
                    {user.first} {user.last}
                  </Table.RowHeaderCell>
                  <Table.Cell>{user.roleId}</Table.Cell>
                  <Table.Cell>{user.createdAt}</Table.Cell>
                  <Table.Cell>...</Table.Cell>
                </Table.Row>
              )
            })}
          </>
        ) : null}
      </Table.Body>
    </Table>
  )
}
