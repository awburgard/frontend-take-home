import { Table } from '../../components/Table'
import { formatDate } from '../../utils/formatDate'

export const CreatedAtCell = ({ createdAt }: { createdAt: string }) => {
  return <Table.Cell>{formatDate(createdAt)}</Table.Cell>
}
