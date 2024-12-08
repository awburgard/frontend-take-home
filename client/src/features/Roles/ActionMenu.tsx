import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import {
  Button,
  Dialog,
  DropdownMenu,
  Flex,
  IconButton,
  Strong,
  TextField,
} from '@radix-ui/themes'
import { useState } from 'react'

import { useUpdateRoleMutation } from '@/features/Roles/queries'
import { Role } from '@/server/models'

interface ActionMenuProps {
  role: Role
  render: (toggleDialog: () => void) => React.ReactNode
}

export const ActionMenu = ({ role, render }: ActionMenuProps) => {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [roleName, setRoleName] = useState(role.name)

  const toggleDialog = () => setDialogOpen((prev) => !prev)

  const { mutate: updateRole } = useUpdateRoleMutation()

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
          <Dialog.Title>Update role</Dialog.Title>
          <Dialog.Description size='2' mb='4'>
            Are you sure? The role name for <Strong>{role.name}</Strong> will be
            updated.
          </Dialog.Description>
          <TextField.Root
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
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
                onClick={() => updateRole({ ...role, name: roleName })}
                variant='soft'
              >
                Update Role
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  )
}
