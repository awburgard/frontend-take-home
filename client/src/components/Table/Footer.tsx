import './table.footer.css'

import { Table as RadixTable } from '@radix-ui/themes'
import { useMemo } from 'react'

import { Table } from '@/components/Table'

type Align = RadixTable.CellProps['justify']

interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  children?: React.ReactNode
  align?: Align
  colSpan?: number
}

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  colSpan = 999,
  align = 'end',
  ...props
}) => {
  const renderRow = useMemo(
    () => (content: React.ReactNode, align: Align) =>
      (
        <Table.Row>
          <Table.Cell
            colSpan={colSpan}
            justify={align}
            className='rt-TableFooterRow'
            data-justify={align}
          >
            {content}
          </Table.Cell>
        </Table.Row>
      ),
    [colSpan]
  )

  return (
    <tfoot className='rt-TableFooter' {...props}>
      {children && renderRow(children, align)}
    </tfoot>
  )
}
