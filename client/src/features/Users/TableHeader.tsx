import { Table } from '../../components/Table'

export const TableHeader = () => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>User</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Joined</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  )
}
