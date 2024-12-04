import { Table as RadixTable } from '@radix-ui/themes'

interface TableProps extends RadixTable.RootProps {}

export const Table = ({ children, ...props }: TableProps) => {
  return <RadixTable.Root {...props}>{children}</RadixTable.Root>
}

Table.Header = RadixTable.Header
Table.Body = RadixTable.Body
Table.Row = RadixTable.Row
Table.Cell = RadixTable.Cell
