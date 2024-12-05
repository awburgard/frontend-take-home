import { TextField } from '../../components/TextField'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

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
  /**
   * think through how to manage state for the search query for both users and roles
   * for right now, we will just hardcode the state, pass in the state (DO NOT KEEP THIS), and go on our way
   */
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
