import { Table } from '@/components/Table'
import { TableRow } from '@/features/Users/TableRow'
import { PagedClientUser } from '@/types'

interface TableBodyProps {
  data: PagedClientUser | undefined
}

export const TableBody = ({ data }: TableBodyProps) => {
  return (
    <Table.Body>
      {data?.data.map((user) => {
        return <TableRow key={user.id} user={user} />
      })}
    </Table.Body>
  )
}
