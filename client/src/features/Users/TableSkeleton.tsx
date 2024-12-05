import { Skeleton } from '@radix-ui/themes'
import { Table } from '../../components/Table'

export const TableSkeleton = () => {
  return (
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
        {[...Array(5)].map((_, index) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell>
              <Skeleton width='100%' height='20px' />
            </Table.RowHeaderCell>
            <Table.Cell>
              <Skeleton width='100%' height='20px' />
            </Table.Cell>
            <Table.Cell>
              <Skeleton width='100%' height='20px' />
            </Table.Cell>
            <Table.Cell>
              <Skeleton width='100%' height='20px' />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
