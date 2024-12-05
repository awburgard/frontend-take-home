import './App.css'
import Users from './features/Users'
import Roles from './features/Roles'
import { Tabs } from './components/Tab'
import { Box } from '@radix-ui/themes'

function App() {
  return (
    <Tabs defaultValue='users'>
      <Tabs.List>
        <Tabs.Trigger value='users'>Users</Tabs.Trigger>
        <Tabs.Trigger value='roles'>Roles</Tabs.Trigger>
      </Tabs.List>
      <Box pt='5'>
        <Tabs.Content value='users'>
          <Users />
        </Tabs.Content>
      </Box>
      <Box pt='5'>
        <Tabs.Content value='roles'>
          <Roles />
        </Tabs.Content>
      </Box>
    </Tabs>
  )
}

export default App
