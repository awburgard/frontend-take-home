import { Table } from '../../components/Table'

import { PagedClientUser } from '../../types'
import { TableRow } from './TableRow'

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
