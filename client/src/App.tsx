import { Box, Container } from '@radix-ui/themes'
import { useSuspenseQueries } from '@tanstack/react-query'

import { Tabs } from '@/components/Tab'
import Roles from '@/features/Roles'
import { fetchRoles, roleKeys } from '@/features/Roles/queries'
import Users from '@/features/Users'
import { fetchUsers, userKeys } from '@/features/Users/queries'

const defaultFilters = { page: 1, search: '' }

function App() {
  useSuspenseQueries({
    queries: [
      {
        queryKey: userKeys.list(defaultFilters),
        queryFn: () => fetchUsers(defaultFilters),
        staleTime: Infinity,
      },
      {
        queryKey: roleKeys.list(defaultFilters),
        queryFn: () => fetchRoles(defaultFilters),
        staleTime: Infinity,
      },
    ],
  })

  return (
    <Container>
      <Tabs defaultValue='users'>
        <Tabs.List>
          <Tabs.Trigger value='users'>Users</Tabs.Trigger>
          <Tabs.Trigger value='roles'>Roles</Tabs.Trigger>
        </Tabs.List>
        <Box pt='5'>
          <Tabs.Content value='users'>
            <Users />
          </Tabs.Content>
          <Tabs.Content value='roles'>
            <Roles />
          </Tabs.Content>
        </Box>
      </Tabs>
    </Container>
  )
}

export default App
