import { AlertDialog, Button, Flex, Strong } from '@radix-ui/themes'

import { useDeleteUserMutation } from '@/features/Users/queries'

interface DeleteUserDialogProps {
  name: string
  setDialogType: (type: string | null) => void
  userId: string
}

export const DeleteUserDialog = ({
  name,
  setDialogType,
  userId,
}: DeleteUserDialogProps) => {
  const { mutate: deleteUser } = useDeleteUserMutation()

  const handleDelete = () => {
    deleteUser(userId)
    setDialogType(null)
  }

  return (
    <AlertDialog.Root open={true} onOpenChange={() => setDialogType(null)}>
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
              onClick={() => setDialogType(null)}
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
