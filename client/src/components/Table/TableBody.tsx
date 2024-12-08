import { Table as RadixTable } from '@radix-ui/themes'

export const TableBody = ({ children, ...props }: RadixTable.BodyProps) => {
  return (
    <RadixTable.Body style={{ gridArea: 'content' }} {...props}>
      {children}
    </RadixTable.Body>
  )
}
