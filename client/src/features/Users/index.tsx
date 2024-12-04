import { Table } from '../../components/Table'

export default function Users() {
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
        <Table.Row>
          <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
          <Table.Cell>danilo@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
          <Table.Cell>...</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
          <Table.Cell>...</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
          <Table.Cell>jasper@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
          <Table.Cell>...</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
