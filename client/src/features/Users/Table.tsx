import { Table } from '@/components/Table'
import { Pagination } from '@/features/shared/Pagination'
import { TableBody } from '@/features/Users/TableBody'
import { TableHeader } from '@/features/Users/TableHeader'
import { UsersTableSkeleton } from '@/features/Users/UsersTableSkeleton'
import { PagedClientUser } from '@/types'

interface UsersTableProps {
  data: PagedClientUser | undefined
  setPage: (page: number) => void
  isLoading: boolean
}

export const UsersTable = ({ data, setPage, isLoading }: UsersTableProps) => {
  if (isLoading) return <UsersTableSkeleton />
  return (
    <Table variant='surface'>
      <TableHeader />
      <TableBody data={data} />
      <Pagination data={data} setPage={setPage} />
    </Table>
  )
}
