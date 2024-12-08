import { Avatar, DropdownMenu, Flex } from '@radix-ui/themes'

import { Table } from '@/components/Table'
import { ActionMenu } from '@/features/Users/ActionMenu'
import { CreatedAtCell } from '@/features/Users/CreatedAtCell'
import { RoleCell } from '@/features/Users/RoleCell'
import { ClientUser } from '@/types'

interface TableRowProps {
  user: ClientUser
}

export const TableRow = ({ user }: TableRowProps) => {
  return (
    <Table.Row key={user.id}>
      <Table.RowHeaderCell minWidth='300'>
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
      <Table.Cell minWidth='300'>
        <ActionMenu
          userId={user.id}
          name={`${user.first} ${user.last}`}
          render={(toggleDialog) => (
            <>
              <DropdownMenu.Item>Edit</DropdownMenu.Item>
              <DropdownMenu.Item onClick={toggleDialog}>
                Delete
              </DropdownMenu.Item>
            </>
          )}
        />
      </Table.Cell>
    </Table.Row>
  )
}
