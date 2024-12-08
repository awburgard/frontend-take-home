import { Select } from '@radix-ui/themes'

import { useFilters } from '@/context/FilterContext/useFilters'
import { useRolesQuery } from '@/features/Roles/queries'

interface RoleSelectorProps {
  value: string
  onChange: (value: Select.ItemProps['value']) => void
}

export const RoleSelector = ({ value, onChange }: RoleSelectorProps) => {
  const { filters } = useFilters('roles')
  const { data: roles } = useRolesQuery(filters)
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger />
      <Select.Content>
        {roles?.data.map((role) => (
          <Select.Item key={role.id} value={role.id}>
            {role.name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  )
}
