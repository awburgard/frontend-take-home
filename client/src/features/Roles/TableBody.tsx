import { DropdownMenu } from '@radix-ui/themes'

import { Table } from '@/components/Table'
import { RolesActionMenu } from '@/features/Roles/ActionMenu'
import { NoResults } from '@/features/shared/NoResults'
import { PagedClientRole } from '@/types'
import { formatDate } from '@/utils/formatDate'

interface TableBodyProps {
  data: PagedClientRole | undefined
}

export const TableBody = ({ data }: TableBodyProps) => {
  if (!data?.data.length) return <NoResults message='No roles found' />
  return (
    <Table.Body>
      <>
        {data?.data.map((role) => {
          return (
            <Table.Row key={role.id}>
              <Table.RowHeaderCell minWidth='300'>
                {role.name}
              </Table.RowHeaderCell>
              <Table.Cell minWidth='300'>{role.description}</Table.Cell>
              <Table.Cell minWidth='300'>
                {role.isDefault ? 'Yes' : 'No'}
              </Table.Cell>
              <Table.Cell minWidth='300'>
                {formatDate(role.createdAt)}
              </Table.Cell>
              <Table.Cell>
                <RolesActionMenu
                  role={role}
                  render={(toggleDialog) => (
                    <>
                      <DropdownMenu.Item onClick={() => toggleDialog('edit')}>
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
    </Table.Body>
  )
}
