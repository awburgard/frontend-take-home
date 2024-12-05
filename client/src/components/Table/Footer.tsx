import { Flex } from '@radix-ui/themes'

interface TableFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const TableFooter = ({ children }: TableFooterProps) => (
  <Flex
    justify='end'
    align='center'
    gap='2'
    minHeight='44px'
    px='3'
    py='2'
    width='100%'
    style={{ borderTop: '1px solid var(--gray-a5)' }}
  >
    {children}
  </Flex>
)
