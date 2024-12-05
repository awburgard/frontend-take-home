import { formatDate } from '../../utils/formatDate'

import { Table } from '../../components/Table'
import { PagedClientRole } from '../../types'
import { ActionMenu } from './ActionMenu'
import { DropdownMenu } from '@radix-ui/themes'

interface TableBodyProps {
  data: PagedClientRole | undefined
}

export const TableBody = ({ data }: TableBodyProps) => {
  return (
    <Table.Body>
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
    </Table.Body>
  )
}
