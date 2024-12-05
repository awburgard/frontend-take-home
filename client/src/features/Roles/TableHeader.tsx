import { Table } from '../../components/Table'

export const TableHeader = () => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  )
}
