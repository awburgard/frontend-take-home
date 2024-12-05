import { Table } from '.'

interface TableFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const TableFooter = ({ children }: TableFooterProps) => (
  <tfoot style={{ borderTop: '1px solid var(--gray-a5)', padding: '10px 0' }}>
    <Table.Row>
      <Table.Cell colSpan={999} align='right'>
        {children}
      </Table.Cell>
    </Table.Row>
  </tfoot>
)
