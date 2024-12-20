import { Table } from '../../components/Table'
import { PagedClientRole } from '../../types'
import { Pagination } from '../shared/Pagination'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import { TableSkeleton } from '../shared/TableSkeleton'

interface RolesTableProps {
  data: PagedClientRole | undefined
  setPage: (page: number) => void
  isLoading: boolean
}

export const RolesTable = ({ data, setPage, isLoading }: RolesTableProps) => {
  if (isLoading) return <TableSkeleton Headers={TableHeader} />
  return (
    <Table variant='surface'>
      <TableHeader />
      <TableBody data={data} />
      <Pagination data={data} setPage={setPage} />
    </Table>
  )
}
