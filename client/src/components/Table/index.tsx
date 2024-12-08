import { Table as RadixTable } from '@radix-ui/themes'

import { TableFooter } from '@/components/Table/Footer'
import { TableBody } from '@/components/Table/TableBody'
export const Table = ({ children, ...props }: RadixTable.RootProps) => {
  return (
    <RadixTable.Root
      {...props}
      style={{
        display: 'grid',
        gridTemplateRows: '1fr auto',
        gridTemplateAreas: `
        "content"
        "footer"
      `,
      }}
    >
      {children}
    </RadixTable.Root>
  )
}

Table.Header = RadixTable.Header
Table.Body = TableBody
Table.Row = RadixTable.Row
Table.Cell = RadixTable.Cell
Table.RowHeaderCell = RadixTable.RowHeaderCell
Table.ColumnHeaderCell = RadixTable.ColumnHeaderCell
Table.Footer = TableFooter
