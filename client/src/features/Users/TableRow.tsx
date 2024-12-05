import { Avatar, DropdownMenu, Flex } from '@radix-ui/themes'
import { Table } from '../../components/Table'
import { RoleCell } from './RoleCell'
import { CreatedAtCell } from './CreatedAtCell'
import { ActionMenu } from './ActionMenu'
import { ClientUser } from '../../types'

interface TableRowProps {
  user: ClientUser
}

export const TableRow = ({ user }: TableRowProps) => {
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
              <DropdownMenu.Item onClick={openDialog}>Delete</DropdownMenu.Item>
            </>
          )}
        />
      </Table.Cell>
    </Table.Row>
  )
}
