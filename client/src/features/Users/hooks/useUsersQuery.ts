import { useQuery } from '@tanstack/react-query'

const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (filters: string) => [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
}

const fetchUsers = async () => {
  return null
}

export const useUsersQuery = () =>
  useQuery({
    queryKey: userKeys.all,
    queryFn: () => fetchUsers(),
  })
