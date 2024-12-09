import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { DropdownMenu, IconButton } from '@radix-ui/themes'
import React, { useState } from 'react'

import { DeleteUserDialog } from '@/features/Users/DeleteUserDialog'
import { EditUserDialog } from '@/features/Users/EditUserDialog'
import { ClientUser } from '@/types'

interface ActionMenuProps {
  user: ClientUser
  render: (toggleDialog: (dialogType: string) => void) => React.ReactNode
}

export const ActionMenu = ({ user, render }: ActionMenuProps) => {
  const [dialogType, setDialogType] = useState<string | null>(null)

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
          {render((type) => setDialogType(type))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      {dialogType === 'delete' && (
        <DeleteUserDialog
          name={`${user.first} ${user.last}`}
          userId={user.id}
          setDialogType={setDialogType}
        />
      )}

      {dialogType === 'edit' && (
        <EditUserDialog user={user} setDialogType={setDialogType} />
      )}
    </>
  )
}
