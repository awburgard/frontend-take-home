import { Table as RadixTable } from '@radix-ui/themes'
import { TableFooter } from './Footer'

export const Table = ({ children, ...props }: RadixTable.RootProps) => {
  return (
    <RadixTable.Root style={{ minHeight: '530px' }} {...props}>
      {children}
    </RadixTable.Root>
  )
}

Table.Header = RadixTable.Header
Table.Body = RadixTable.Body
Table.Row = RadixTable.Row
Table.Cell = RadixTable.Cell
Table.RowHeaderCell = RadixTable.RowHeaderCell
Table.ColumnHeaderCell = RadixTable.ColumnHeaderCell
Table.Footer = TableFooter
