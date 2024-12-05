import Users from './features/Users'
import Roles from './features/Roles'
import { Tabs } from './components/Tab'
import { Box, Container } from '@radix-ui/themes'

function App() {
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
