import { AlertDialog, Button, Flex, Strong } from '@radix-ui/themes'

interface DeleteUserDialogProps {
  isDialogOpen: boolean
  setDialogOpen: (open: boolean) => void
  name: string
  handleDelete: () => void
  toggleDialog: () => void
}

export const DeleteUserDialog = ({
  isDialogOpen,
  setDialogOpen,
  name,
  handleDelete,
  toggleDialog,
}: DeleteUserDialogProps) => {
  return (
    <AlertDialog.Root open={isDialogOpen} onOpenChange={setDialogOpen}>
      <AlertDialog.Content>
        <AlertDialog.Title>Delete user</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure? The user <Strong>{name}</Strong> will be permanently
          deleted.
        </AlertDialog.Description>
        <Flex gap='3' mt='4' justify='end'>
          <AlertDialog.Action>
            <Button
              variant='outline'
              color='gray'
              onClick={toggleDialog}
              size='2'
            >
              Cancel
            </Button>
          </AlertDialog.Action>
          <AlertDialog.Action>
            <Button size='2' onClick={handleDelete} color='red' variant='soft'>
              Delete User
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}
