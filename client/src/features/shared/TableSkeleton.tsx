import { Skeleton } from '@radix-ui/themes'

import { Table } from '@/components/Table'

type TableSkeletonProps = {
  Headers: () => JSX.Element
}

export const TableSkeleton = ({ Headers }: TableSkeletonProps) => {
  return (
    <Table variant='surface'>
      <Headers />
      <Table.Body>
        {[...Array(10)].map((_, index) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell minWidth='300'>
              <Skeleton width='100%' height='20px' />
            </Table.RowHeaderCell>
            <Table.Cell minWidth='300'>
              <Skeleton width='100%' height='20px' />
            </Table.Cell>
            <Table.Cell minWidth='300'>
              <Skeleton width='100%' height='20px' />
            </Table.Cell>
            <Table.Cell minWidth='300'>
              <Skeleton width='100%' height='20px' />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
