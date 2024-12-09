import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { DropdownMenu, IconButton } from '@radix-ui/themes'
import { ReactNode, useState } from 'react'

interface ActionMenuProps {
  render: (toggleDialog: (dialogType: string) => void) => ReactNode
  dialogs: Record<
    string,
    (setDialogType: (type: string | null) => void) => ReactNode
  >
}

export const ActionMenu = ({ render, dialogs }: ActionMenuProps) => {
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

      {dialogType && dialogs[dialogType](setDialogType)}
    </>
  )
}
