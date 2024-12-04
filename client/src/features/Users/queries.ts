import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { PagedData, User } from './../../../../server/src/models'

const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (page: number, search: string) =>
    [...userKeys.lists(), { page, search }] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: number) => [...userKeys.details(), id] as const,
}

async function fetchUsers(page = 1, search = ''): Promise<PagedData<User>> {
  const query = new URLSearchParams({
    page: page.toString(),
    search,
  }).toString()
  const response = await fetch(`http://localhost:3002/users?${query}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`)
  }

  return response.json()
}

export const useUsersQuery = (page: number, search: string) => {
  return useQuery({
    queryKey: userKeys.list(page, search),
    queryFn: () => fetchUsers(page, search),
    placeholderData: keepPreviousData, // Ensures data doesn't flicker between pages
  })
}
