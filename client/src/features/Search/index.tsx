import { TextField } from '../../components/TextField'

interface SearchProps {
  placeholder: string
  search: string
  icon?: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search = ({
  placeholder,
  icon,
  search,
  onChange,
}: SearchProps) => {
  /**
   * think through how to manage state for the search query for both users and roles
   * for right now, we will just hardcode the state, pass in the state (DO NOT KEEP THIS), and go on our way
   */
  return (
    <TextField placeholder={placeholder} value={search} onChange={onChange}>
      {icon ? (
        <TextField.Slot>
          <button>click me</button>
        </TextField.Slot>
      ) : null}
    </TextField>
  )
}
