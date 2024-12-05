import {
  useQuery,
  keepPreviousData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { ClientRole, PagedClientRole } from '../../types'
interface RoleFilters {
  page: number
  search?: string
}

const roleKeys = {
  all: ['roles'] as const,
  lists: () => [...roleKeys.all, 'list'] as const,
  list: (filters: RoleFilters) => [...roleKeys.lists(), filters] as const,
  details: () => [...roleKeys.all, 'detail'] as const,
  detail: (id: string) => [...roleKeys.details(), id] as const,
}

async function fetchRoles(filters: RoleFilters): Promise<PagedClientRole> {
  const query = new URLSearchParams({
    page: filters.page.toString(),
    ...(filters.search ? { search: filters.search } : {}),
  }).toString()
  const response = await fetch(`http://localhost:3002/roles?${query}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch roles: ${response.statusText}`)
  }

  return response.json()
}

async function fetchRole(id: string): Promise<ClientRole> {
  const response = await fetch(`http://localhost:3002/roles/${id}`)
  return response.json()
}

export const useRolesQuery = (filters: RoleFilters) => {
  return useQuery({
    queryKey: roleKeys.list(filters),
    queryFn: () => fetchRoles(filters),
    placeholderData: keepPreviousData, // Ensures data doesn't flicker between pages
  })
}

export const useRoleQuery = (id: string) => {
  return useQuery({
    queryKey: roleKeys.detail(id),
    queryFn: () => fetchRole(id),
    enabled: !!id,
  })
}

async function updateRole(role: ClientRole): Promise<ClientRole> {
  const response = await fetch(`http://localhost:3002/roles/${role.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(role),
  })
  return response.json()
}

export const useUpdateRoleMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (role: ClientRole) => updateRole(role),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: roleKeys.all })
    },
  })
}
