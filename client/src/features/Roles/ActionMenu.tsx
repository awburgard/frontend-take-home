import { Role } from '@/server/models'
import { DialogType } from '@/types'

import { ActionMenu } from '../shared/ActionMenu'
import { EditRoleDialog } from './EditRoleDialog'

interface ActionMenuProps {
  role: Role
  render: (toggleDialog: (dialogType: DialogType) => void) => React.ReactNode
}

export const RolesActionMenu = ({ role, render }: ActionMenuProps) => {
  return (
    <ActionMenu
      render={render}
      dialogs={{
        edit: (setDialogType) => (
          <EditRoleDialog role={role} setDialogType={setDialogType} />
        ),
      }}
    />
  )
}
