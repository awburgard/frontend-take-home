import './App.css'
import Users from './features/Users'
import Roles from './features/Roles'
import { Tabs } from './components/Tab'

function App() {
  return (
    <Tabs defaultValue='users'>
      <Tabs.List>
        <Tabs.Trigger value='users'>Users</Tabs.Trigger>
        <Tabs.Trigger value='roles'>Roles</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value='users'>
        <Users />
      </Tabs.Content>
      <Tabs.Content value='roles'>
        <Roles />
      </Tabs.Content>
    </Tabs>
  )
}

export default App
