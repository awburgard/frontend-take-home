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

  const handlePrevious = () => {
    setPage(data?.prev || 1)
  }

  const handleNext = () => {
    setPage(data?.next || 1)
  }

  if (!showPagination) return null

  return (
    <Table.Footer>
      <Box>
        <Button
          variant='soft'
          onClick={handlePrevious}
          disabled={!data?.prev}
          mr='2'
        >
          Previous
        </Button>

        <Button variant='outline' onClick={handleNext} disabled={!data?.next}>
          Next
        </Button>
      </Box>
    </Table.Footer>
  )
}
