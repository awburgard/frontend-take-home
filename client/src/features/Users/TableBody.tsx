import { Table } from '@/components/Table'
import { NoResults } from '@/features/shared/NoResults'
import { TableRow } from '@/features/Users/TableRow'
import { PagedClientUser } from '@/types'

interface TableBodyProps {
  data: PagedClientUser | undefined
}

export const TableBody = ({ data }: TableBodyProps) => {
  if (!data?.data.length) return <NoResults message='No users found' />
  return (
    <Table.Body>
      {data?.data.map((user) => {
        return <TableRow key={user.id} user={user} />
      })}
    </Table.Body>
  )
}
