import { Box, Text } from '@radix-ui/themes'

interface NoResultsProps {
  message: string
}

export const NoResults = ({ message }: NoResultsProps) => {
  return (
    <Box p='4' aria-description={message}>
      <Text size='3' color='gray'>
        {message}
      </Text>
    </Box>
  )
}
