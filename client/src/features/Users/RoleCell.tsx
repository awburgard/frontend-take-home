import { Table } from '../../components/Table'
import { useRoleQuery } from '../Roles/queries'

export default function RoleCell({ id }: { id: string }) {
  const { data } = useRoleQuery(id)
  return <Table.Cell>{data?.name}</Table.Cell>
}
