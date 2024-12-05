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
  render: (toggleDialog: () => void) => React.ReactNode
}

export const ActionMenu = ({ userId, name, render }: ActionMenuProps) => {
  const [isDialogOpen, setDialogOpen] = useState(false)

  const toggleDialog = () => setDialogOpen((prev) => !prev)

  const { mutate: deleteUser } = useDeleteUserMutation()

  const handleDelete = () => {
    deleteUser(userId)
  }

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
          {render(toggleDialog)}
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
                onClick={toggleDialog}
                size='2'
              >
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button
                size='2'
                onClick={handleDelete}
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
