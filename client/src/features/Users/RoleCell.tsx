import { Table } from '../../components/Table'
import { useRolesQuery } from '../Roles/queries'

export default function RoleCell({ id }: { id: string }) {
  const { data } = useRolesQuery({ page: 1, search: '' }) // this could be done better to avoid extra query or fetching all possible roles
  const role = data?.data.find((role) => role.id === id)

  if (!role) return <Table.Cell>Unknown role</Table.Cell>

  return <Table.Cell>{role?.name}</Table.Cell>
}
