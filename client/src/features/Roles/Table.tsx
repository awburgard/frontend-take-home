import { Table } from '@/components/Table'
import { PagedClientRole } from '@/types'
import { Pagination } from '@/features/shared/Pagination'
import { TableBody } from '@/features/Roles/TableBody'
import { TableHeader } from '@/features/Roles/TableHeader'
import { RolesTableSkeleton } from '@/features/Roles/RolesTableSkeleton'

interface RolesTableProps {
  data: PagedClientRole | undefined
  setPage: (page: number) => void
  isLoading: boolean
}

export const RolesTable = ({ data, setPage, isLoading }: RolesTableProps) => {
  if (isLoading) return <RolesTableSkeleton />
  return (
    <Table variant='surface'>
      <TableHeader />
      <TableBody data={data} />
      <Pagination data={data} setPage={setPage} />
    </Table>
  )
}
