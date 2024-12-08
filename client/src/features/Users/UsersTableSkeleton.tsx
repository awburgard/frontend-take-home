import { TableSkeleton } from '@/features/shared/TableSkeleton'
import { TableHeader } from '@/features/Users/TableHeader'

export const UsersTableSkeleton = () => {
  return <TableSkeleton Headers={TableHeader} />
}
