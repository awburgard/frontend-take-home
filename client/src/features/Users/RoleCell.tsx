import { useQueryClient } from '@tanstack/react-query'

import { Table } from '@/components/Table'
import { useFilters } from '@/context/FilterContext/useFilters'
import { roleKeys } from '@/features/Roles/queries'
import { PagedClientRole } from '@/types'

export const RoleCell = ({ id }: { id: string }) => {
  const queryClient = useQueryClient()
  const { filters } = useFilters('roles')
  const data = queryClient.getQueryData<PagedClientRole>(roleKeys.list(filters))
  const role = data?.data.find((role) => role.id === id)

  return <Table.Cell minWidth='300'>{role?.name ?? 'Unknown role'}</Table.Cell>
}
