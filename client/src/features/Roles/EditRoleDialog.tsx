import { Button, Dialog, Flex, Strong, TextField } from '@radix-ui/themes'
import { useState } from 'react'

import { ClientRole, DialogType } from '@/types'

import { useUpdateRoleMutation } from './queries'

interface EditRoleDialogProps {
  role: ClientRole
  setDialogType: (type: DialogType) => void
}

export const EditRoleDialog = ({
  role,
  setDialogType,
}: EditRoleDialogProps) => {
  const [roleName, setRoleName] = useState(role.name)
  const { mutate: updateRole } = useUpdateRoleMutation()

  const closeDialog = () => {
    setDialogType(null)
  }

  const handleUpdate = () => {
    updateRole({ ...role, name: roleName })
    closeDialog()
  }

  return (
    <Dialog.Root open={true} onOpenChange={closeDialog}>
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
              onClick={closeDialog}
              size='2'
            >
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button size='2' onClick={handleUpdate} variant='soft'>
              Update Role
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
