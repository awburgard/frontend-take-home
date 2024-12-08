import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

import { TextField } from '@/components/TextField'

interface SearchProps {
  placeholder: string
  search: string
  icon?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

export const Search = ({
  placeholder,
  icon = true,
  search,
  onChange,
  disabled = false,
}: SearchProps) => {
  return (
    <TextField
      placeholder={placeholder}
      value={search}
      onChange={onChange}
      disabled={disabled}
    >
      {icon ? (
        <TextField.Slot>
          <MagnifyingGlassIcon />
        </TextField.Slot>
      ) : null}
    </TextField>
  )
}
