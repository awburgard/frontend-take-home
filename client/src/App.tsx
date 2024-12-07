import Users from './features/Users'
import Roles from './features/Roles'
import { Tabs } from './components/Tab'
import { Box, Container } from '@radix-ui/themes'

import { useSuspenseQueries } from '@tanstack/react-query'

import { userKeys, fetchUsers } from './features/Users/queries'
import { roleKeys, fetchRoles } from './features/Roles/queries'

function App() {
  useSuspenseQueries({
    queries: [
      {
        queryKey: userKeys.list({ page: 1, search: '' }),
        queryFn: () => fetchUsers({ page: 1, search: '' }),
        staleTime: Infinity,
      },
      {
        queryKey: roleKeys.list({ page: 1, search: '' }),
        queryFn: () => fetchRoles({ page: 1, search: '' }),
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
