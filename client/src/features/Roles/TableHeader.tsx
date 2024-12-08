import { Table } from '@/components/Table'

export const TableHeader = () => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeaderCell minWidth='300'>Role</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell minWidth='300'>
          Description
        </Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell minWidth='300'>Default</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell minWidth='300'>Created</Table.ColumnHeaderCell>
        <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  )
}
