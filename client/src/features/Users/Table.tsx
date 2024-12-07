import { Table } from '../../components/Table'
import { PagedClientUser } from '../../types'
import { Pagination } from '../shared/Pagination'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import { UsersTableSkeleton } from './UsersTableSkeleton'

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
