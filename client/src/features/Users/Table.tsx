import { Table } from '../../components/Table'
import { PagedClientUser } from '../../types'
import { Pagination } from '../shared/Pagination'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import { TableSkeleton } from './TableSkeleton'

interface UsersTableProps {
  data: PagedClientUser | undefined
  setPage: (page: number) => void
  isLoading: boolean
}

export const UsersTable = ({ data, setPage, isLoading }: UsersTableProps) => {
  if (isLoading) return <TableSkeleton />
  return (
    <Table variant='surface'>
      <TableHeader />
      <TableBody data={data} />
      <Pagination data={data} setPage={setPage} />
    </Table>
  )
}
