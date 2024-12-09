import { ActionMenu } from '@/features/shared/ActionMenu'
import { DeleteUserDialog } from '@/features/Users/DeleteUserDialog'
import { EditUserDialog } from '@/features/Users/EditUserDialog'
import { ClientUser } from '@/types'

interface ActionMenuProps {
  user: ClientUser
  render: (toggleDialog: (dialogType: string) => void) => React.ReactNode
}

export const UserActionMenu = ({ user, render }: ActionMenuProps) => {
  return (
    <ActionMenu
      render={render}
      dialogs={{
        delete: (setDialogType) => (
          <DeleteUserDialog
            name={`${user.first} ${user.last}`}
            userId={user.id}
            setDialogType={setDialogType}
          />
        ),
        edit: (setDialogType) => (
          <EditUserDialog user={user} setDialogType={setDialogType} />
        ),
      }}
    />
  )
}
