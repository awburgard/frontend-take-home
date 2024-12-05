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
                <ActionMenu
                  role={role}
                  render={(toggleDialog) => (
                    <>
                      <DropdownMenu.Item onClick={toggleDialog}>
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
