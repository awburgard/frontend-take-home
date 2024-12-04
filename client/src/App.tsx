import './App.css'
import Users from './features/Users'
import Roles from './features/Roles'
import { Tabs as RadixTabs } from '@radix-ui/themes'

function App() {
  return (
    <RadixTabs.Root defaultValue='users'>
      <RadixTabs.List>
        <RadixTabs.Trigger value='users'>Users</RadixTabs.Trigger>
        <RadixTabs.Trigger value='roles'>Roles</RadixTabs.Trigger>
      </RadixTabs.List>
      <RadixTabs.Content value='users'>
        <Users />
      </RadixTabs.Content>
      <RadixTabs.Content value='roles'>
        <Roles />
      </RadixTabs.Content>
    </RadixTabs.Root>
  )
}

export default App
