import { PlusIcon } from '@radix-ui/react-icons'
import { Button } from '@radix-ui/themes'

export const AddUser = () => {
  return (
    <Button>
      <PlusIcon height='16' width='16' />
      Add User
    </Button>
  )
}