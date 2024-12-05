import {
  useQuery,
  keepPreviousData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { PagedClientUser } from '../../types'
import { toast } from 'react-toastify'
interface UserFilters {
  page: number
  search?: string
}

const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (filters: UserFilters) => [...userKeys.lists(), filters] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
}

async function fetchUsers(filters: UserFilters): Promise<PagedClientUser> {
  const query = new URLSearchParams({
    page: filters.page.toString(),
    ...(filters.search ? { search: filters.search } : {}),
  }).toString()
  const response = await fetch(`http://localhost:3002/users?${query}`)

  if (!response.ok) {
    toast.error('Failed to fetch users')
  }

  return response.json()
}

export const useUsersQuery = (filters: UserFilters) => {
  return useQuery({
    queryKey: userKeys.list(filters),
    queryFn: () => fetchUsers(filters),
    placeholderData: keepPreviousData, // Ensures data doesn't flicker between pages
  })
}

async function deleteUser(id: string): Promise<PagedClientUser> {
  const response = await fetch(`http://localhost:3002/users/${id}`, {
    method: 'DELETE',
  })
  return response.json()
}

export const useDeleteUserMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: userKeys.all })
      queryClient.setQueryData(userKeys.list({ page: 1 }), data)

      toast.success('User deleted', {
        position: 'bottom-right',
      })
    },
    onError: (error) => {
      console.error(error)
      toast.error('Failed to delete user', {
        position: 'bottom-right',
      })
    },
  })
}
