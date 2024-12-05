import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import {
  DropdownMenu,
  IconButton,
  Dialog,
  Button,
  Flex,
  Strong,
} from '@radix-ui/themes'
import { useState } from 'react'
import { useDeleteUserMutation } from './queries'

interface ActionMenuProps {
  userId: string
  name: string
  render: (openDialog: () => void) => React.ReactNode
}

const ActionMenu: React.FC<ActionMenuProps> = ({ userId, name, render }) => {
  const [isDialogOpen, setDialogOpen] = useState(false)

  const openDialog = () => setDialogOpen(true)
  const closeDialog = () => setDialogOpen(false)

  const { mutate: deleteUser } = useDeleteUserMutation()

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton
            variant='ghost'
            color='gray'
            radius='full'
            aria-label='Actions'
          >
            <DotsHorizontalIcon width='16px' height='16px' />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sideOffset={5}>
          {render(openDialog)}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <Dialog.Root open={isDialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Content>
          <Dialog.Title>Delete user</Dialog.Title>
          <Dialog.Description>
            Are you sure? The user <Strong>{name}</Strong> will be permanently
            deleted.
          </Dialog.Description>
          <Flex gap='3' mt='4' justify='end'>
            <Dialog.Close>
              <Button
                variant='outline'
                color='gray'
                onClick={closeDialog}
                size='2'
              >
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button
                size='2'
                onClick={() => deleteUser(userId)}
                color='red'
                variant='soft'
              >
                Delete User
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}

export default ActionMenu
