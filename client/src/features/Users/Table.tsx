import { Table } from '../../components/Table'
import { PagedClientUser } from '../../types'
import { Pagination } from '../shared/Pagination'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'

interface UsersTableProps {
  data: PagedClientUser | undefined
  setPage: (page: number) => void
}

export const UsersTable = ({ data, setPage }: UsersTableProps) => {
  return (
    <Table variant='surface'>
      <TableHeader />
      <TableBody data={data} />
      <Pagination data={data} setPage={setPage} />
    </Table>
  )
}
