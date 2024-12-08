import { Box, Container, Skeleton } from '@radix-ui/themes'

import { Tabs } from '../Tab'

export const AppSkeleton = () => (
  <Container>
    <Tabs defaultValue='users'>
      <Tabs.List>
        <Tabs.Trigger value='users'>
          <Skeleton width='50px' height='20px' />
        </Tabs.Trigger>
        <Tabs.Trigger value='roles'>
          <Skeleton width='50px' height='20px' />
        </Tabs.Trigger>
      </Tabs.List>
      <Box pt='5'>
        <Tabs.Content value='users'>
          <Skeleton width='100%' height='200px' />
        </Tabs.Content>
        <Tabs.Content value='roles'>
          <Skeleton width='100%' height='200px' />
        </Tabs.Content>
      </Box>
    </Tabs>
  </Container>
)
