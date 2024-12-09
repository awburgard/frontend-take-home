import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'

import { useFilters } from '@/context/FilterContext/useFilters'
import { ClientRole, PagedClientRole } from '@/types'
import { toastError } from '@/utils/toats'
import { toastSuccess } from '@/utils/toats'

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
  const response = await fetch(`${import.meta.env.VITE_API_URL}/roles?${query}`)

  if (!response.ok) {
    const errorData = await response.json()
    toastError({ message: errorData.message || 'Failed to fetch roles' })
    throw new Error(errorData.message || 'Failed to fetch roles')
  }

  return response.json()
}

async function fetchRole(id: string): Promise<ClientRole> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/roles/${id}`)

  if (!response.ok) {
    const errorData = await response.json()
    toastError({ message: errorData.message || 'Failed to fetch role' })
    throw new Error(errorData.message || 'Failed to fetch role')
  }

  return response.json()
}

export const useRolesQuery = (filters: RoleFilters) => {
  return useQuery({
    queryKey: roleKeys.list(filters),
    queryFn: () => fetchRoles(filters),
    placeholderData: keepPreviousData, // Ensures data doesn't flicker between pages,
    retry: 3,
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
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/roles/${role.id}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(role),
    }
  )

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
    onSuccess: (updatedRole) => {
      queryClient.setQueryData(
        roleKeys.list({ page: filters.page, search: filters.search }),
        (oldData: PagedClientRole | undefined) => {
          if (!oldData) return oldData
          return {
            ...oldData,
            data: oldData.data.map((role) =>
              role.id === updatedRole.id ? updatedRole : role
            ),
          }
        }
      )

      toastSuccess({ message: 'Role updated' })
    },
    onError: (error) => {
      toastError({ message: error.message })
    },
  })
}

async function deleteRole(id: string): Promise<ClientRole> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/roles/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Failed to delete role')
  }

  return response.json()
}

export const useDeleteRoleMutation = () => {
  const queryClient = useQueryClient()
  const { filters } = useFilters('roles')
  return useMutation({
    mutationFn: (id: string) => deleteRole(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(
        roleKeys.list({ page: filters.page, search: filters.search }),
        (oldData: PagedClientRole | undefined) => {
          if (!oldData) return oldData
          return {
            ...oldData,
            data: oldData.data.filter((role) => role.id !== id),
          }
        }
      )

      toastSuccess({ message: 'Role deleted' })
    },
    onError: (error) => {
      toastError({ message: error.message })
    },
  })
}
