import { Table } from '../../components/Table'
import { useRolesQuery } from '../Roles/queries'

export const RoleCell = ({ id }: { id: string }) => {
  const { data } = useRolesQuery({ page: 1, search: '' })
  const role = data?.data.find((role) => role.id === id)

  return <Table.Cell minWidth='300'>{role?.name ?? 'Unknown role'}</Table.Cell>
}
