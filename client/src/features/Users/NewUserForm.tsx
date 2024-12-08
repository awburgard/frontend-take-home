import { Button } from '@radix-ui/themes'
import React, { useState } from 'react'

import { TextField } from '@/components/TextField'
import { useCreateUserMutation } from '@/features/Users/queries'

interface NewUserFormProps {
  onSuccess: () => void
}

const NewUserForm: React.FC<NewUserFormProps> = () => {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [roleId, setRoleId] = useState('')

  const mutation = useCreateUserMutation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate({ first, last, roleId })
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder='First Name'
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      <TextField
        placeholder='Last Name'
        value={last}
        onChange={(e) => setLast(e.target.value)}
      />
      <TextField
        placeholder='Role'
        value={roleId}
        onChange={(e) => setRoleId(e.target.value)}
      />
      <Button type='submit' disabled={mutation.isPending}>
        {mutation.isPending ? 'Creating...' : 'Create User'}
      </Button>
    </form>
  )
}

export default NewUserForm
