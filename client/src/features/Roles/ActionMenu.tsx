import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { DropdownMenu, IconButton } from '@radix-ui/themes'
import { forwardRef, useImperativeHandle, useState } from 'react'

import { Role } from '@/server/models'

import { EditRoleDialog } from './EditRoleDialog'

interface ActionMenuProps {
  role: Role
  render: (toggleDialog: (dialogType: string) => void) => React.ReactNode
}

export const ActionMenu = forwardRef(
  ({ role, render }: ActionMenuProps, ref) => {
    const [dialogType, setDialogType] = useState<string | null>(null)

    useImperativeHandle(ref, () => ({
      openDialog: (type: string) => setDialogType(type),
      closeDialog: () => setDialogType(null),
    }))

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

        {dialogType === 'edit' && (
          <EditRoleDialog role={role} setDialogType={setDialogType} />
        )}
      </>
    )
  }
)
