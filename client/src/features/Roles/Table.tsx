import { Table } from '../../components/Table'
import { PagedClientRole } from '../../types'
import { Pagination } from '../shared/Pagination'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'

interface RolesTableProps {
  data: PagedClientRole | undefined
  setPage: (page: number) => void
}

export const RolesTable = ({ data, setPage }: RolesTableProps) => {
  return (
    <Table variant='surface'>
      <TableHeader />
      <TableBody data={data} />
      <Pagination data={data} setPage={setPage} />
    </Table>
  )
}
