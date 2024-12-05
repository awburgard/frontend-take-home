import { Box, Button } from '@radix-ui/themes'
import { Table } from '../../components/Table'
import { PagedData } from '../../../../server/src/models'

interface PaginationProps<T> {
  data: PagedData<T> | undefined
  setPage: (page: number) => void
}

export const Pagination = <T,>({ data, setPage }: PaginationProps<T>) => {
  if (!data) return null

  const showPagination = Boolean(data.next || data.prev)

  if (!showPagination) return null

  return (
    <Table.Footer>
      <Box>
        <Button
          variant='soft'
          onClick={() => setPage(data?.prev || 1)}
          disabled={!data?.prev}
          mr='2'
        >
          Previous
        </Button>

        <Button
          variant='outline'
          onClick={() => setPage(data?.next || 1)}
          disabled={!data?.next}
        >
          Next
        </Button>
      </Box>
    </Table.Footer>
  )
}
