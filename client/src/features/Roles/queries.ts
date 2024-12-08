import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { useFilters } from '@/context/FilterContext/useFilters'
import { ClientRole, PagedClientRole } from '@/types'

interface RoleFilters {
  page: number
  search?: string
}

export const roleKeys = {
  all: ['roles'] as const,
  lists: () => [...roleKeys.all, 'list'] as const,
  list: (filters: RoleFilters) => [...roleKeys.lists(), filters] as const,
  details: () => [...roleKeys.all, 'detail'] as const,
  detail: (id: string) => [...roleKeys.details(), id] as const,
}

export async function fetchRoles(
  filters: RoleFilters
): Promise<PagedClientRole> {
  const query = new URLSearchParams({
    page: filters.page.toString(),
    ...(filters.search ? { search: filters.search } : {}),
  }).toString()
  const response = await fetch(`http://localhost:3002/roles?${query}`)

  if (!response.ok) {
    const errorData = await response.json()
    toast.error(errorData.message || 'Failed to fetch roles')
    throw new Error(errorData.message || 'Failed to fetch roles')
  }

  return response.json()
}

async function fetchRole(id: string): Promise<ClientRole> {
  const response = await fetch(`http://localhost:3002/roles/${id}`)

  if (!response.ok) {
    const errorData = await response.json()
    toast.error(errorData.message || 'Failed to fetch role')
    throw new Error(errorData.message || 'Failed to fetch role')
  }

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

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Failed to update role')
  }

  return response.json()
}

export const useUpdateRoleMutation = () => {
  const queryClient = useQueryClient()
  const { filters } = useFilters('roles')
  return useMutation({
    mutationFn: (role: ClientRole) => updateRole(role),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: roleKeys.all })
      queryClient.setQueryData(roleKeys.list(filters), data)
      toast.success('Role updated', {
        position: 'bottom-right',
      })
    },
    onError: (error) => {
      toast.error(error.message, {
        position: 'bottom-right',
      })
    },
  })
}
