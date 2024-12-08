import { Table as RadixTable } from '@radix-ui/themes'
import { TableFooter } from '@/components/Table/Footer'

export const Table = ({ children, ...props }: RadixTable.RootProps) => {
  return <RadixTable.Root {...props}>{children}</RadixTable.Root>
}

Table.Header = RadixTable.Header
Table.Body = RadixTable.Body
Table.Row = RadixTable.Row
Table.Cell = RadixTable.Cell
Table.RowHeaderCell = RadixTable.RowHeaderCell
Table.ColumnHeaderCell = RadixTable.ColumnHeaderCell
Table.Footer = TableFooter
