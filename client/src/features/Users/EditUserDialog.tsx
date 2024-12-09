import { Button, Dialog, Flex } from '@radix-ui/themes'
import { useState } from 'react'

import { TextField } from '@/components/TextField'
import { RoleSelector } from '@/features/shared/RoleSelector'
import { ClientUser } from '@/types'
import { DialogType } from '@/types'

interface EditUserDialogProps {
  user: ClientUser
  setDialogType: (type: DialogType) => void
}

export const EditUserDialog = ({
  user,
  setDialogType,
}: EditUserDialogProps) => {
  const [first, setFirst] = useState(user.first)
  const [last, setLast] = useState(user.last)
  const [roleId, setRoleId] = useState(user.roleId)

  const handleSave = () => {
    console.log('save')
  }
  return (
    <Dialog.Root open={true} onOpenChange={() => setDialogType(null)}>
      <Dialog.Content minWidth='300' minHeight='300' size='4'>
        <Dialog.Title>Edit User</Dialog.Title>
        <Dialog.Description>
          Edit the user's first name, last name, and role.
        </Dialog.Description>
        <Flex direction='column' gap='3'>
          <TextField value={first} onChange={(e) => setFirst(e.target.value)} />
          <TextField value={last} onChange={(e) => setLast(e.target.value)} />
          <RoleSelector value={roleId} onChange={(value) => setRoleId(value)} />
        </Flex>

        <Flex gap='3' mt='4' justify='end'>
          <Dialog.Close>
            <Button variant='soft' color='gray'>
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleSave}>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
